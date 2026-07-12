import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { Mail, Check, ShieldCheck, Globe, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer: React.FC = () => {
  const { setActiveView } = useStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="text-xl font-bold tracking-tight text-white mb-4">
            VIBE<span className="text-accent-500">.shop</span>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed">
            Plataforma de e-commerce de próxima generación. Diseñada para ofrecer rendimiento extremo, estética impecable y conversiones ultra-fluidas.
          </p>
          <div className="text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">
            Únete al Newsletter
          </div>
          <form onSubmit={handleSubscribe} className="relative max-w-sm">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribed}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 pl-4 pr-12 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-accent-500 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={subscribed}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors disabled:bg-accent-600 disabled:text-white"
              aria-label="Subscribe"
            >
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check size={14} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="mail"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Mail size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
          <AnimatePresence>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2 text-xs text-accent-400 font-medium flex items-center gap-1.5"
              >
                <ShieldCheck size={14} /> ¡Gracias por suscribirte!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Soporte</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
            <li>
              <button onClick={() => setActiveView('help')} className="hover:text-white transition-colors text-left">
                Centro de Ayuda
              </button>
            </li>
            <li>
              <button onClick={() => setActiveView('track')} className="hover:text-white transition-colors text-left">
                Seguimiento de Envíos
              </button>
            </li>
            <li>
              <button onClick={() => setActiveView('returns')} className="hover:text-white transition-colors text-left">
                Devoluciones y Garantía
              </button>
            </li>
            <li>
              <button onClick={() => setActiveView('sizeguide')} className="hover:text-white transition-colors text-left">
                Guía de Tallas
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Institucional</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
            <li>
              <button onClick={() => setActiveView('about')} className="hover:text-white transition-colors text-left">
                Sobre Nosotros
              </button>
            </li>
            <li>
              <button onClick={() => setActiveView('blog')} className="hover:text-white transition-colors text-left">
                Blog Editorial
              </button>
            </li>
            <li>
              <button onClick={() => setActiveView('catalog')} className="hover:text-white transition-colors text-left">
                Ver Catálogo
              </button>
            </li>
            <li>
              <button onClick={() => setActiveView('deals')} className="hover:text-white transition-colors text-left">
                Ofertas Especiales
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Ajustes</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-xs text-zinc-300 w-fit select-none">
              <Globe size={14} className="text-zinc-500" />
              <span>Español / PEN (S/.)</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500 mt-2">
              <CreditCard size={14} />
              <span className="text-[10px] uppercase font-bold tracking-wider">Pago Seguro</span>
            </div>
            <div className="flex flex-wrap gap-2 text-zinc-400 opacity-60">
              <span className="text-xs border border-zinc-800 px-1.5 py-0.5 rounded font-mono font-bold">VISA</span>
              <span className="text-xs border border-zinc-800 px-1.5 py-0.5 rounded font-mono font-bold">MC</span>
              <span className="text-xs border border-zinc-800 px-1.5 py-0.5 rounded font-mono font-bold">AMEX</span>
              <span className="text-xs border border-zinc-800 px-1.5 py-0.5 rounded font-mono font-bold">PP</span>
              <span className="text-xs border border-zinc-800 px-1.5 py-0.5 rounded font-mono font-bold">APAY</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION: FOOTER BOTTOM --- */}
      <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Vibe E-Commerce. Todos los derechos reservados.
        </div>
        <div className="text-[10px] text-zinc-600 font-mono tracking-tight select-none">
          ENGINEERED WITH VIBE CODING METRICS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
