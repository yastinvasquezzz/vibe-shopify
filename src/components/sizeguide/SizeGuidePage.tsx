import React, { useState } from 'react';
import { Ruler, Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SizeGuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audio' | 'moda' | 'acc'>('audio');

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-12">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full text-accent-400 text-[10px] font-bold uppercase tracking-wider">
          <Ruler size={12} /> Guías oficiales
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Guía de Tallas</h1>
        <p className="text-xs text-zinc-500 font-medium">Consulta las medidas detalladas para asegurar el ajuste perfecto de tu compra.</p>
      </div>

      <div className="flex justify-center border-b border-zinc-900 pb-2">
        <div className="flex gap-2 bg-zinc-950/60 p-1.5 border border-zinc-900 rounded-2xl">
          {(['audio', 'moda', 'acc'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                activeTab === tab
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/20'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              {tab === 'audio' ? 'Audio' : tab === 'moda' ? 'Moda / Ropa' : 'Accesorios'}
            </button>
          ))}
        </div>
      </div>

      <div className="glass border border-white/5 p-6 md:p-8 rounded-3xl">
        <AnimatePresence mode="wait">
          {activeTab === 'audio' && (
            <motion.div
              key="audio-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Ajuste de Almohadillas y Diámetro</h3>
                <p className="text-xs text-zinc-400">Nuestros dispositivos de audio cuentan con almohadillas intercambiables ergonómicas.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500 font-bold uppercase tracking-wider">
                      <th className="py-3 pr-4">Modelo / Talla</th>
                      <th className="py-3 px-4">Diámetro Interno</th>
                      <th className="py-3 px-4">Ancho de Ajuste</th>
                      <th className="py-3 px-4">Compatibilidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900 text-zinc-300">
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">S (Small)</td>
                      <td className="py-3 px-4">8.5 mm</td>
                      <td className="py-3 px-4 font-mono">11 mm</td>
                      <td className="py-3 px-4">Canales auditivos estrechos / Deportivos</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">M (Medium)</td>
                      <td className="py-3 px-4">10.0 mm</td>
                      <td className="py-3 px-4 font-mono">12 mm</td>
                      <td className="py-3 px-4">Estándar universal (por defecto)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">L (Large)</td>
                      <td className="py-3 px-4">11.5 mm</td>
                      <td className="py-3 px-4 font-mono">13.5 mm</td>
                      <td className="py-3 px-4">Canales auditivos anchos / Aislamiento pasivo máximo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 border border-zinc-900 bg-zinc-950/20 rounded-2xl flex gap-3 text-xs leading-relaxed text-zinc-400">
                <Info size={16} className="text-accent-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-zinc-300">Consejo de uso:</span>
                  <p className="text-zinc-500 mt-1">
                    Para obtener la mejor cancelación activa de ruido (ANC) y respuesta de bajos profundos, prueba los 3 tamaños en tus oídos. Un sellado hermético es fundamental.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'moda' && (
            <motion.div
              key="moda-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Conversión de Tallas de Ropa</h3>
                <p className="text-xs text-zinc-400">Medidas de referencia corporal expresadas en centímetros para prendas superiores.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500 font-bold uppercase tracking-wider">
                      <th className="py-3 pr-4">Talla</th>
                      <th className="py-3 px-4">US / INT</th>
                      <th className="py-3 px-4">EU / Europa</th>
                      <th className="py-3 px-4">Pecho (cm)</th>
                      <th className="py-3 px-4">Cintura (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900 text-zinc-300">
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">XS</td>
                      <td className="py-3 px-4 font-mono">34</td>
                      <td className="py-3 px-4 font-mono">44</td>
                      <td className="py-3 px-4">80 - 86 cm</td>
                      <td className="py-3 px-4">70 - 75 cm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">S</td>
                      <td className="py-3 px-4 font-mono">36</td>
                      <td className="py-3 px-4 font-mono">46</td>
                      <td className="py-3 px-4">86 - 94 cm</td>
                      <td className="py-3 px-4">75 - 82 cm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">M</td>
                      <td className="py-3 px-4 font-mono">38 - 40</td>
                      <td className="py-3 px-4 font-mono">48 - 50</td>
                      <td className="py-3 px-4">94 - 102 cm</td>
                      <td className="py-3 px-4">82 - 90 cm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">L</td>
                      <td className="py-3 px-4 font-mono">42 - 44</td>
                      <td className="py-3 px-4 font-mono">52 - 54</td>
                      <td className="py-3 px-4">102 - 110 cm</td>
                      <td className="py-3 px-4">90 - 98 cm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">XL</td>
                      <td className="py-3 px-4 font-mono">46</td>
                      <td className="py-3 px-4 font-mono">56</td>
                      <td className="py-3 px-4">110 - 118 cm</td>
                      <td className="py-3 px-4">98 - 106 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cómo medir tu cuerpo:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 border border-zinc-900 bg-zinc-950/20 rounded-2xl space-y-1">
                    <span className="font-bold text-zinc-300">1. Pecho</span>
                    <p className="text-zinc-500">Pasa una cinta métrica flexible debajo de los brazos y alrededor de la parte más sobresaliente del pecho horizontalmente.</p>
                  </div>
                  <div className="p-4 border border-zinc-900 bg-zinc-950/20 rounded-2xl space-y-1">
                    <span className="font-bold text-zinc-300">2. Cintura</span>
                    <p className="text-zinc-500">Mide la circunferencia alrededor de tu cintura natural (donde la espalda se dobla lateralmente), manteniendo la cinta holgada.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'acc' && (
            <motion.div
              key="acc-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Ajuste de Correas y Pulseras</h3>
                <p className="text-xs text-zinc-400">Circunferencias de muñeca soportadas por nuestros relojes y pulseras inteligentes.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500 font-bold uppercase tracking-wider">
                      <th className="py-3 pr-4">Medida Correa</th>
                      <th className="py-3 px-4">Circunferencia Muñeca</th>
                      <th className="py-3 px-4">Pasadores de Ajuste</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900 text-zinc-300">
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">S / M (Estándar)</td>
                      <td className="py-3 px-4">130 - 180 mm</td>
                      <td className="py-3 px-4">8 posiciones</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-white">M / L (Grande)</td>
                      <td className="py-3 px-4">160 - 210 mm</td>
                      <td className="py-3 px-4">10 posiciones</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-3.5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Verificación de Ajuste:</h4>
                <div className="space-y-2 text-xs text-zinc-400">
                  <div className="flex gap-2 items-start">
                    <Check size={14} className="text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>La correa no debe estrangular la muñeca ni dejar marcas profundas en la piel al retirarla.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Check size={14} className="text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Para sensores ópticos de pulso, es aconsejable ubicar el reloj a un dedo de distancia del hueso cubital.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SizeGuidePage;
