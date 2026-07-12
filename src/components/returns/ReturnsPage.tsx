import React, { useState } from 'react';
import { ClipboardList, Package, Search, CreditCard, CheckCircle2, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ReturnsPage: React.FC = () => {
  const [form, setForm] = useState({ orderId: '', email: '', reason: 'incorrect_size', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};
    if (!form.orderId.trim()) newErrors.orderId = true;
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = true;
    if (!form.message.trim()) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ orderId: '', email: '', reason: 'incorrect_size', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const steps = [
    { icon: ClipboardList, title: '1. Solicitar', desc: 'Completa el formulario inferior indicando el ID del pedido.' },
    { icon: Package, title: '2. Enviar', desc: 'Prepara el paquete con el empaque original intacto.' },
    { icon: Search, title: '3. Inspección', desc: 'Validamos el estado físico e higiénico del artículo.' },
    { icon: CreditCard, title: '4. Reembolso', desc: 'Procesamos tu dinero a la cuenta original en 48h.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-16">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full text-accent-400 text-[10px] font-bold uppercase tracking-wider">
          <Shield size={12} /> Garantía VIBE
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Devoluciones y Garantía</h1>
        <p className="text-xs text-zinc-500 font-medium">Ofrecemos un sistema simple para cambios de productos o reembolsos en compras.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-zinc-900 z-0" />
        {steps.map((s, idx) => {
          const IconComponent = s.icon;
          return (
            <div key={idx} className="glass border border-white/5 p-5 rounded-2xl flex flex-col items-center text-center space-y-3.5 relative z-10">
              <div className="w-12 h-12 rounded-full border border-accent-500/30 bg-accent-500/10 flex items-center justify-center text-accent-400 shadow-lg shadow-accent-500/5">
                <IconComponent size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">{s.title}</h4>
                <p className="text-[11px] text-zinc-550 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="glass border border-white/5 p-6 md:p-8 rounded-3xl space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest pb-3 border-b border-zinc-900 flex items-center gap-2">
            Condiciones Legales
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-zinc-200">Garantía de Devolución de 30 Días</span>
                <p className="text-zinc-500 leading-relaxed">Puedes solicitar el reembolso íntegro o el cambio de cualquier artículo en su condición original durante los primeros 30 días.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-zinc-200">Condición del Producto</span>
                <p className="text-zinc-500 leading-relaxed">El artículo debe devolverse sin usar, en su empaque original sellado, con etiquetas de fábrica y accesorios incluidos.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-zinc-200">Garantía de Hardware de 2 Años</span>
                <p className="text-zinc-500 leading-relaxed">Todos nuestros altavoces, auriculares y wearables cuentan con garantía contra fallos de fábrica y desperfectos de componentes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass border border-white/5 p-6 md:p-8 rounded-3xl space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest pb-3 border-b border-zinc-900">
            Formulario de Solicitud
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="checkout-label">ID del Pedido</label>
              <input
                type="text"
                placeholder="ej: ord-123456"
                value={form.orderId}
                onChange={(e) => setForm({ ...form, orderId: e.target.value })}
                className={`checkout-input ${errors.orderId ? 'border-rose-500/50' : ''}`}
              />
            </div>
            <div>
              <label className="checkout-label">Correo Electrónico</label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`checkout-input ${errors.email ? 'border-rose-500/50' : ''}`}
              />
            </div>
            <div>
              <label className="checkout-label">Motivo de Devolución</label>
              <select
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                className="checkout-input"
              >
                <option value="incorrect_size">Talla / Ajuste incorrecto</option>
                <option value="defective">Defecto físico / No funciona</option>
                <option value="wrong_item">Artículo equivocado</option>
                <option value="not_satisfied">No cumple expectativas</option>
              </select>
            </div>
            <div>
              <label className="checkout-label">Mensaje / Detalles</label>
              <textarea
                rows={3}
                placeholder="Describe el estado del artículo..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`checkout-input resize-none ${errors.message ? 'border-rose-500/50' : ''}`}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-accent-600/10"
            >
              Enviar Solicitud
            </button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold flex items-center gap-2"
              >
                <CheckCircle2 size={16} /> ¡Solicitud enviada con éxito! Te contactaremos por correo.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;
