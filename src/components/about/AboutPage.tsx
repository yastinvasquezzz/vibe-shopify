import React from 'react';
import { useStore } from '../../store/useStore';
import { Shield, Zap, Globe, Headphones, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Shield,
    title: 'Calidad Premium',
    description:
      'Cada producto pasa por rigurosos controles de calidad antes de llegar a tus manos. Solo trabajamos con las mejores marcas del mercado.',
  },
  {
    icon: Zap,
    title: 'Innovación Constante',
    description:
      'Buscamos las últimas tendencias y tecnologías para ofrecerte lo más avanzado en cada categoría de producto.',
  },
  {
    icon: Globe,
    title: 'Envío Global',
    description:
      'Realizamos envíos a más de 45 países con logística optimizada, tiempos de entrega competitivos y seguimiento en tiempo real.',
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    description:
      'Nuestro equipo de atención está disponible las 24 horas, los 7 días de la semana para resolver cualquier consulta.',
  },
];

const stats = [
  { value: '12,500+', label: 'Productos Vendidos' },
  { value: '8,200+', label: 'Clientes' },
  { value: '45+', label: 'Países' },
  { value: '99.8%', label: 'Satisfacción' },
];

const milestones = [
  {
    year: '2022',
    description:
      'Nace VIBE.shop como una tienda boutique online enfocada en accesorios de audio premium y tecnología personal.',
  },
  {
    year: '2023',
    description:
      'Expandimos nuestro catálogo a wearables deportivos y mochilas técnicas. Alcanzamos los primeros 2,000 clientes.',
  },
  {
    year: '2024',
    description:
      'Lanzamos envíos internacionales a más de 30 países y abrimos nuestro primer showroom físico en Ciudad de México.',
  },
  {
    year: '2025',
    description:
      'Superamos los 12,000 productos vendidos. Introducimos nuestro programa de garantía extendida y fidelización VIP.',
  },
];

export const AboutPage: React.FC = () => {
  const { setActiveView } = useStore();

  return (
    <div className="w-full space-y-20 pb-20">
      {/* --- SECTION: HERO --- */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-950/40 via-transparent to-[#030303]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10 py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest"
          >
            Conócenos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none"
          >
            Sobre{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              VIBE.shop
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Somos una marca de estilo de vida tecnológico premium. Curamos
            productos excepcionales para quienes exigen lo mejor en diseño,
            rendimiento y experiencia.
          </motion.p>
        </div>
      </section>

      {/* --- SECTION: MISIÓN --- */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 space-y-4">
        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
          Propósito
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Nuestra Misión
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
          En VIBE.shop creemos que la tecnología debe integrarse de forma
          natural en tu vida diaria. Nuestra misión es democratizar el acceso a
          productos de ingeniería superior — desde audio espacial hasta
          wearables de última generación — ofreciendo una experiencia de compra
          impecable, envíos rápidos y un soporte humano que realmente escucha.
          Queremos ser tu destino de confianza cada vez que busques lo mejor en
          tecnología personal.
        </p>
      </section>

      {/* --- SECTION: VALORES --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Lo que nos define
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
            Nuestros Valores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-5 items-start"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400 flex-shrink-0">
                <item.icon size={20} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION: ESTADÍSTICAS --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="glass rounded-2xl p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center space-y-1"
            >
              <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION: TIMELINE --- */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
        <div>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Nuestra trayectoria
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
            Nuestra Historia
          </h2>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-accent-500/20 to-transparent" />

          <div className="space-y-10">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative"
              >
                <div className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent-500 bg-[#030303]" />
                <p className="text-xs font-bold text-accent-400 uppercase tracking-widest">
                  {milestone.year}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: CTA --- */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          ¿Listo para descubrir lo mejor?
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
          Explora nuestro catálogo completo con los productos más innovadores
          del mercado, seleccionados especialmente para ti.
        </p>
        <button
          onClick={() => setActiveView('catalog')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-600 hover:bg-accent-500 text-white font-bold text-sm transition-all shadow-xl shadow-accent-600/10"
        >
          Explora Nuestra Tienda
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
