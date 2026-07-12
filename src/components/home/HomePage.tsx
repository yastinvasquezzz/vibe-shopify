import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { ShoppingBag, ArrowRight, ShieldCheck, Truck, RefreshCw, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const { products, setActiveView, setFilterCategory, setSelectedProductId } = useStore();
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const trendingProducts = products.slice(0, 3);
  
  const handleCollectionClick = (catName: string) => {
    setFilterCategory(catName);
    setActiveView('catalog');
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setActiveView('pdp');
  };

  const formatTime = (val: number) => String(val).padStart(2, '0');

  return (
    <div className="w-full space-y-20 pb-20">
      {/* --- SECTION: HERO SECTION --- */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-100 transition-transform duration-1000" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-black/50" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-500/20 bg-accent-500/10 text-accent-400 text-xs font-bold uppercase tracking-widest"
          >
            <Zap size={12} /> Nueva temporada 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none"
          >
            Estética Minimalista. <br />
            <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">Rendimiento Extremo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Descubre nuestra línea seleccionada de audio espacial, wearables deportivos y mochilas técnicas diseñadas bajo estándares de ingeniería premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => handleCollectionClick('Todos')}
              className="px-8 py-4 rounded-xl bg-accent-600 hover:bg-accent-500 text-white font-bold text-sm transition-all shadow-xl shadow-accent-600/10 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Explorar Catálogo
            </button>
            <button
              onClick={() => handleCollectionClick('Audio')}
              className="px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Colección Audio</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION: BENEFITS BAR --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass border border-white/5 p-6 rounded-2xl flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400 flex-shrink-0">
            <Truck size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Envío Gratis</h4>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">En pedidos superiores a $150 USD a nivel nacional.</p>
          </div>
        </div>

        <div className="glass border border-white/5 p-6 rounded-2xl flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400 flex-shrink-0">
            <RefreshCw size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Devolución en 30 Días</h4>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Sin preguntas innecesarias. Retorno simple y rápido.</p>
          </div>
        </div>

        <div className="glass border border-white/5 p-6 rounded-2xl flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400 flex-shrink-0">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Garantía Asegurada</h4>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Todos nuestros productos técnicos cuentan con 2 años de cobertura.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION: COLLECTIONS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Colecciones Destacadas</h2>
          <p className="text-xs text-zinc-500 font-medium mt-1">Explora gamas de productos refinados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => handleCollectionClick('Audio')}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 space-y-1">
              <h3 className="text-lg font-bold text-white">Audio Profesional</h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1">Ver colección <ArrowRight size={12} /></p>
            </div>
          </div>

          <div
            onClick={() => handleCollectionClick('Moda')}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 space-y-1">
              <h3 className="text-lg font-bold text-white">Ropa & Calzado</h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1">Ver colección <ArrowRight size={12} /></p>
            </div>
          </div>

          <div
            onClick={() => handleCollectionClick('Accesorios')}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 space-y-1">
              <h3 className="text-lg font-bold text-white">Accesorios Estilo</h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1">Ver colección <ArrowRight size={12} /></p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: DEAL OF THE DAY --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="glass border border-white/5 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="bg-rose-500/10 border border-rose-500/30 text-rose-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Oferta del Día
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              SoundAura Pro Wireless <br />
              con 20% de Descuento
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              Aprovecha nuestra promoción exclusiva de audio. Cancelación de ruido inteligente híbrida y batería estelar de 40 horas.
            </p>

            <div className="flex gap-4 items-center select-none">
              <div className="text-center">
                <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-xl font-black text-white">
                  {formatTime(timeLeft.hours)}
                </div>
                <span className="text-[9px] font-bold text-zinc-550 uppercase tracking-widest mt-1.5 block">Horas</span>
              </div>
              <div className="text-xl font-bold text-zinc-650">:</div>
              <div className="text-center">
                <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-xl font-black text-white">
                  {formatTime(timeLeft.minutes)}
                </div>
                <span className="text-[9px] font-bold text-zinc-550 uppercase tracking-widest mt-1.5 block">Minutos</span>
              </div>
              <div className="text-xl font-bold text-zinc-650">:</div>
              <div className="text-center">
                <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-xl font-black text-white animate-pulse">
                  {formatTime(timeLeft.seconds)}
                </div>
                <span className="text-[9px] font-bold text-zinc-550 uppercase tracking-widest mt-1.5 block">Segundos</span>
              </div>
            </div>

            <button
              onClick={() => handleProductClick('prod-001')}
              className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg"
            >
              <span>Comprar Ahora por $249</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-850">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" alt="SoundAura Pro" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- SECTION: TRENDING PRODUCTS --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Productos Populares</h2>
            <p className="text-xs text-zinc-500 font-medium mt-1">Los favoritos de nuestra comunidad.</p>
          </div>
          <button
            onClick={() => handleCollectionClick('Todos')}
            className="text-xs font-bold text-accent-400 hover:text-accent-300 transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            Ver Todo <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => handleProductClick(p.id)}
              className="group border border-white/5 bg-zinc-950/20 rounded-3xl p-4 cursor-pointer hover:border-white/10 transition-colors space-y-4"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 relative">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{p.category}</span>
                <h4 className="text-sm font-bold text-zinc-300 group-hover:text-white line-clamp-1 truncate">{p.name}</h4>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-extrabold text-white">${p.price} USD</span>
                  <span className="text-xs font-bold text-zinc-550 flex items-center gap-0.5">
                    ★ <span className="text-zinc-400 font-semibold">{p.rating}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default HomePage;
