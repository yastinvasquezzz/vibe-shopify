import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';

import type { ActiveView } from '../../types/store';

/* ─────────────────────────── Navigation Pills ─────────────────────────── */

const NAV_SUGGESTIONS: { label: string; view: ActiveView }[] = [
  { label: 'Inicio', view: 'home' },
  { label: 'Tienda', view: 'catalog' },
  { label: 'Ofertas', view: 'deals' },
  { label: 'Soporte', view: 'help' },
];

/* ─────────────────────────── Component ─────────────────────────── */

export const NotFoundPage = () => {
  const { setActiveView } = useStore();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 text-center max-w-lg">

        {/* ─────────────── Animated 404 ─────────────── */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-9xl font-extrabold leading-none bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent select-none">
            404
          </span>
        </motion.div>

        {/* ─────────────── SVG Illustration ─────────────── */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="opacity-60"
        >
          <circle cx="60" cy="60" r="50" className="stroke-accent-500" strokeWidth="2" strokeDasharray="8 6" />
          <circle cx="60" cy="60" r="30" className="fill-accent-600/20 stroke-accent-400" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="10" className="fill-accent-500/40" />
        </motion.svg>

        {/* ─────────────── Text ─────────────── */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-zinc-100">
            Página No Encontrada
          </h1>
          <p className="text-zinc-400 leading-relaxed">
            La página que buscas no existe o ha sido movida. Prueba navegar a otra sección.
          </p>
        </div>

        {/* ─────────────── Navigation Suggestions ─────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {NAV_SUGGESTIONS.map((item) => (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              className="glass px-4 py-1.5 rounded-full text-sm text-zinc-300 hover:text-accent-400 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ─────────────── Main CTA ─────────────── */}
        <button
          onClick={() => setActiveView('home')}
          className="mt-2 px-8 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold text-lg shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
