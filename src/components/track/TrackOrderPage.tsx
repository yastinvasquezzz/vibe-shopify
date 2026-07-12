import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { Search, Package, MapPin, Truck, CheckCircle2, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TrackOrderPage: React.FC = () => {
  const { orders, trackingOrderId, setTrackingOrderId } = useStore();
  const [searchInput, setSearchInput] = useState(trackingOrderId);
  const [hasSearched, setHasSearched] = useState(trackingOrderId !== '');

  const matchedOrder = orders.find(
    (o) => o.id.trim().toLowerCase() === searchInput.trim().toLowerCase()
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackingOrderId(searchInput);
    setHasSearched(true);
  };

  const getStatusStep = (status: 'processing' | 'shipped' | 'delivered') => {
    switch (status) {
      case 'delivered':
        return 4;
      case 'shipped':
        return 3;
      case 'processing':
      default:
        return 2;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Seguimiento de Pedido</h1>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Ingresa el ID único de tu pedido (provisto al confirmar la compra, ej: ord-XXXXXX) para verificar su progreso logístico.
        </p>

        <form onSubmit={handleSearchSubmit} className="relative max-w-md mx-auto pt-2">
          <input
            type="text"
            placeholder="ID de Pedido (ej: ord-123456)"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2.5 pl-4 pr-12 text-sm text-zinc-150 placeholder-zinc-500 focus:outline-none focus:border-accent-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-450 hover:text-white transition-all mt-1"
            aria-label="Search order"
          >
            <Search size={16} />
          </button>
        </form>
      </div>

      <AnimatePresence mode="wait">
        {hasSearched && (
          <motion.div
            key={matchedOrder ? 'found' : 'notfound'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {matchedOrder ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* --- SECTION: LOGISTICS TIMELINE STEPPER --- */}
                <div className="lg:col-span-8 glass border border-white/5 p-6 rounded-3xl space-y-8">
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-900">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Rastreo de Orden</span>
                      <h3 className="text-sm font-extrabold font-mono text-accent-400 mt-0.5">{matchedOrder.id}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Costo total</span>
                      <div className="text-sm font-bold text-white">${matchedOrder.total} USD</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 relative pt-4 select-none">
                    <div className="absolute top-8 left-[12%] right-[12%] h-0.5 bg-zinc-900 z-0">
                      <div
                        className="h-full bg-accent-500 transition-all duration-700"
                        style={{
                          width: `${
                            getStatusStep(matchedOrder.status) === 2 ? '33%' :
                            getStatusStep(matchedOrder.status) === 3 ? '66%' : '100%'
                          }`
                        }}
                      />
                    </div>

                    {[
                      { step: 1, label: 'Confirmada', desc: 'Orden recibida', icon: CheckCircle2 },
                      { step: 2, label: 'Preparación', desc: 'En bodega', icon: Package },
                      { step: 3, label: 'En Camino', desc: 'En tránsito', icon: Truck },
                      { step: 4, label: 'Entregada', desc: 'En tu dirección', icon: MapPin }
                    ].map((s) => {
                      const activeStep = getStatusStep(matchedOrder.status);
                      const isDone = s.step <= activeStep;
                      const IconComponent = s.icon;
                      
                      return (
                        <div key={s.step} className="flex flex-col items-center text-center relative z-10 space-y-2">
                          <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isDone
                              ? 'border-accent-500 bg-accent-500 text-white shadow-lg shadow-accent-500/20'
                              : 'border-zinc-800 bg-zinc-950 text-zinc-500'
                          }`}>
                            <IconComponent size={14} />
                          </div>
                          <div>
                            <div className={`text-[10px] font-bold uppercase tracking-wider ${isDone ? 'text-zinc-200' : 'text-zinc-550'}`}>{s.label}</div>
                            <div className="text-[8px] text-zinc-500 mt-0.5 hidden sm:block">{s.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-4 border border-zinc-900 bg-zinc-950/20 rounded-2xl flex gap-3 text-xs leading-relaxed text-zinc-400">
                    <Package size={16} className="text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-300">Estimado de Entrega:</span>
                      <p className="text-zinc-500 mt-1">
                        Tu pedido fue colocado el día <span className="font-semibold text-zinc-400">{matchedOrder.date}</span> con envío {matchedOrder.shippingMethod === 'express' ? 'Express' : 'Estándar'}. Debe arribar a tu destino entre el{' '}
                        <span className="font-semibold text-zinc-350">
                          {matchedOrder.shippingMethod === 'express'
                            ? new Date(new Date(matchedOrder.date).getTime() + 86400000).toISOString().split('T')[0]
                            : new Date(new Date(matchedOrder.date).getTime() + 259200000).toISOString().split('T')[0]}
                        </span>{' '}
                        y el{' '}
                        <span className="font-semibold text-zinc-350">
                          {matchedOrder.shippingMethod === 'express'
                            ? new Date(new Date(matchedOrder.date).getTime() + 172800000).toISOString().split('T')[0]
                            : new Date(new Date(matchedOrder.date).getTime() + 432000000).toISOString().split('T')[0]}
                        </span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* --- SECTION: DETAILS SIDEBAR PANEL --- */}
                <div className="lg:col-span-4 glass border border-white/5 p-6 rounded-3xl space-y-5">
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest pb-2.5 border-b border-zinc-900">
                    Detalles del Pedido
                  </h3>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider block mb-0.5">Destinatario</span>
                      <p className="font-semibold text-zinc-300">{matchedOrder.shippingAddress.fullName}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider block mb-0.5">Dirección</span>
                      <p className="font-semibold text-zinc-300">{matchedOrder.shippingAddress.address}, {matchedOrder.shippingAddress.city}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider block mb-0.5">Teléfono</span>
                      <p className="font-semibold text-zinc-300">{matchedOrder.shippingAddress.phone}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 space-y-3">
                    <span className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider block">Artículos comprados</span>
                    <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                      {matchedOrder.items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center text-xs">
                          <span className="text-zinc-450 truncate max-w-[150px]">{item.product.name}</span>
                          <span className="text-zinc-550 font-mono">Cant: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto text-center border border-zinc-900 bg-zinc-950/20 rounded-3xl p-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-650 mx-auto">
                  <HelpCircle size={20} />
                </div>
                <h3 className="text-sm font-bold text-zinc-300">Pedido no encontrado</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  No hemos localizado ningún registro con el ID ingresado. Por favor, asegúrate de escribirlo correctamente (ej: ord-XXXXXX).
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default TrackOrderPage;
