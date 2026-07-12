import React, { useState } from 'react';
import { Search, Mail, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
  category: 'envios' | 'pagos' | 'devoluciones' | 'general';
}

export const HelpPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeFAQCategory, setActiveFAQCategory] = useState<'todos' | 'envios' | 'pagos' | 'devoluciones' | 'general'>('todos');
  const [openFAQIdx, setOpenFAQIdx] = useState<number | null>(null);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [ticketCreated, setTicketCreated] = useState(false);

  const faqs: FAQ[] = [
    {
      question: '¿Cuánto tiempo tarda en llegar mi pedido?',
      answer: 'El envío estándar tarda de 3 a 5 días hábiles, mientras que el envío Express Premium tarda de 1 a 2 días hábiles en entregarse.',
      category: 'envios'
    },
    {
      question: '¿Qué métodos de pago son aceptados?',
      answer: 'Aceptamos tarjetas de crédito/débito Visa, Mastercard y American Express, además de pasarelas seguras como PayPal y Apple Pay.',
      category: 'pagos'
    },
    {
      question: '¿Cuál es la política de devoluciones?',
      answer: 'Ofrecemos una garantía de devolución de 30 días para todos nuestros productos. Los artículos deben devolverse en su empaque original sin daños higiénicos.',
      category: 'devoluciones'
    },
    {
      question: '¿Cómo puedo realizar el seguimiento de mi pedido?',
      answer: 'Puedes ingresar tu ID de Pedido directamente en nuestra página de seguimiento público ("Rastrear Pedido") para ver el estado de envío y logística en tiempo real.',
      category: 'envios'
    },
    {
      question: '¿Los productos tienen garantía?',
      answer: 'Sí. Todos nuestros dispositivos de audio y wearables deportivos cuentan con una garantía de fábrica del fabricante de 2 años contra defectos técnicos.',
      category: 'general'
    }
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(search.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeFAQCategory === 'todos' || faq.category === activeFAQCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFAQToggle = (idx: number) => {
    setOpenFAQIdx((prev) => (prev === idx ? null : idx));
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = true;
    if (!form.subject.trim()) newErrors.subject = true;
    if (!form.message.trim()) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setTicketCreated(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setTicketCreated(false), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-16">
      <div className="text-center max-w-xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Centro de Ayuda y FAQ</h1>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Encuentra respuestas rápidas sobre envíos, garantías y pagos, o ponte en contacto con nuestro soporte técnico.
        </p>

        <div className="relative max-w-md mx-auto pt-2">
          <input
            type="text"
            placeholder="Buscar en preguntas frecuentes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2.5 pl-4 pr-10 text-sm text-zinc-150 placeholder-zinc-500 focus:outline-none focus:border-accent-500"
          />
          <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap gap-2 pb-2">
            {(['todos', 'envios', 'pagos', 'devoluciones', 'general'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFAQCategory(cat);
                  setOpenFAQIdx(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all uppercase tracking-wider ${
                  activeFAQCategory === cat
                    ? 'border-accent-500 bg-accent-500/10 text-accent-400'
                    : 'border-zinc-800 bg-zinc-950/20 text-zinc-450 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <p className="text-xs text-zinc-550 italic">No se encontraron preguntas que coincidan con la búsqueda.</p>
            ) : (
              filteredFAQs.map((faq, idx) => {
                const isOpen = openFAQIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-zinc-900 bg-zinc-950/20 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => handleFAQToggle(idx)}
                      className="w-full p-5 flex justify-between items-center text-left text-sm font-bold text-zinc-200 hover:text-white"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle size={16} className="text-accent-500" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-zinc-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-950 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="glass border border-white/5 p-6 rounded-3xl space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Mail size={16} className="text-accent-500" /> Contactar Soporte
              </h3>
              <p className="text-xs text-zinc-550 mt-1">Envía una consulta y te responderemos en menos de 24 horas.</p>
            </div>

            <form onSubmit={handleSupportSubmit} className="space-y-4">
              <div>
                <label className="checkout-label">Nombre Completo</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  className={`checkout-input ${errors.name ? 'border-rose-500/50' : ''}`}
                />
              </div>

              <div>
                <label className="checkout-label">Correo Electrónico</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="correo@ejemplo.com"
                  className={`checkout-input ${errors.email ? 'border-rose-500/50' : ''}`}
                />
              </div>

              <div>
                <label className="checkout-label">Asunto</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Consulta técnica, envíos, etc."
                  className={`checkout-input ${errors.subject ? 'border-rose-500/50' : ''}`}
                />
              </div>

              <div>
                <label className="checkout-label">Mensaje</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe detalladamente tu caso..."
                  className={`checkout-input resize-none ${errors.message ? 'border-rose-500/50' : ''}`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-accent-600/10"
              >
                Enviar Ticket
              </button>
            </form>

            <AnimatePresence>
              {ticketCreated && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold flex items-center gap-2"
                >
                  <CheckCircle2 size={16} /> ¡Ticket creado con éxito! Te responderemos pronto.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpPage;
