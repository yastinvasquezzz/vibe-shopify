import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { ShoppingBag, ArrowRight, ShieldCheck, Truck, RefreshCw, Zap, Star, Flame, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const { products, setActiveView, setFilterCategory, setSelectedProductId, addToCart, setCartDrawerOpen, dealSettings } = useStore();
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Deal of the Day stock progress simulation
  const [dealStockProgress, setDealStockProgress] = useState(82);

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

    // Slowly increase deal progress
    const progressTimer = setInterval(() => {
      setDealStockProgress((p) => (p < 96 ? p + 1 : 82));
    }, 15000);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, []);

  const trendingProducts = products.slice(0, 4); // Show 4 premium cards instead of 3 for a better grid layout
  
  const dealProduct = products.find(p => p.id === dealSettings.productId) || products[0];
  const dealDiscount = dealSettings.discountRate || 0.20;
  const dealDiscountPercent = Math.round(dealDiscount * 100);
  const discountedPrice = dealProduct ? Math.round(dealProduct.price * (1 - dealDiscount)) : 249;
  
  const handleCollectionClick = (catName: string) => {
    setFilterCategory(catName);
    setActiveView('catalog');
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setActiveView('pdp');
  };

  const handleQuickAdd = (e: React.MouseEvent, p: any) => {
    e.stopPropagation();
    const success = addToCart(p, p.colors[0], p.sizes[0], 1);
    if (success) {
      setCartDrawerOpen(true);
    }
  };

  const formatTime = (val: number) => String(val).padStart(2, '0');

  // Container motion presets for staggered entries
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-[#030303] text-white overflow-hidden space-y-24 pb-24 relative">
      
      {/* --- BACKGROUND GLOW MESH GRADIENTS (WOW FACTOR) --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-500/5 blur-[120px] pointer-events-none animate-pulse duration-[12000ms]" />
      <div className="absolute top-[40vh] right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none animate-pulse duration-[9000ms]" />
      <div className="absolute bottom-[20vh] left-1/3 w-[600px] h-[600px] rounded-full bg-accent-600/5 blur-[140px] pointer-events-none" />

      {/* --- SECTION: HERO SECTION WITH GRADIENT GLOW --- */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 md:px-8 py-12 border-b border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transition-transform duration-1000" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-black/70" />
        
        {/* Animated Radial Backdrop */}
        <div className="absolute w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-accent-600/10 to-blue-500/10 blur-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Column: Heading text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 text-[10px] font-extrabold uppercase tracking-widest mx-auto lg:mx-0 shadow-lg shadow-accent-500/5"
            >
              <Zap size={10} className="fill-accent-400" /> Nueva Colección 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-xl"
            >
              Diseño Minimalista. <br />
              <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-blue-400 bg-clip-text text-transparent">Sonido Sin Límites.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Explora nuestra línea de auriculares de audio espacial, wearables deportivos y accesorios de estilo diseñados para revolucionar tu día a día.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleCollectionClick('Todos')}
                className="px-8 py-4 rounded-xl bg-accent-600 hover:bg-accent-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-accent-600/20 flex items-center justify-center gap-2 group"
              >
                <ShoppingBag size={14} />
                Explorar Catálogo
              </button>
              <button
                onClick={() => handleCollectionClick('Audio')}
                className="px-8 py-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>Colección Audio</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Featured Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="glass border border-white/10 rounded-3xl p-5 w-full max-w-sm relative shadow-2xl bg-zinc-950/60 backdrop-blur-2xl"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/5 relative group mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&q=80" 
                  alt="Destacado" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <span className="absolute top-4 left-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-extrabold text-[8px] uppercase tracking-wider px-2 py-0.5 rounded">
                  Stock Disponible
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">Reloj Minimalist VIBE</h3>
                    <p className="text-[10px] text-zinc-500 mt-0.5">Accesorios de Precisión</p>
                  </div>
                  <span className="text-sm font-black text-accent-400">S/. 199.00</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={() => handleProductClick('prod-003')}
                    className="flex-1 py-2.5 rounded-xl border border-white/5 bg-zinc-900/60 hover:bg-zinc-800 text-[10px] font-bold text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1"
                  >
                    <Eye size={12} /> Detalles
                  </button>
                  <button 
                    onClick={(e) => {
                      const p = products.find(prod => prod.id === 'prod-003');
                      if (p) handleQuickAdd(e, p);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-[10px] font-bold transition-all"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION: BENEFITS BAR (STAGGERED ANIMATIONS) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Envío Garantizado', desc: 'Despacho express gratuito en compras superiores a S/. 500.', icon: Truck },
            { title: 'Garantía Extendida', desc: 'Todos nuestros productos oficiales cuentan con 2 años de cobertura.', icon: ShieldCheck },
            { title: 'Devolución de 30 Días', desc: 'Retorno simple y sin costos adicionales si el producto no te convence.', icon: RefreshCw }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="glass border border-white/5 p-6 rounded-2xl flex gap-4 items-start hover:border-white/10 transition-colors bg-zinc-950/20 hover:bg-zinc-950/30"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-550 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* --- SECTION: COLLECTIONS GRID (WOW HOVER LAYOUT) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-white flex justify-center md:justify-start items-center gap-2">
            Colecciones Seleccionadas <ArrowRight size={18} className="text-accent-500" />
          </h2>
          <p className="text-xs text-zinc-500 font-medium mt-1">Refinación estética y materiales técnicos de primera calidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'Audio', title: 'Audio de Estudio', subtitle: 'Auriculares & Sonido Espacial', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80' },
            { id: 'Moda', title: 'Prendas & Calzado', subtitle: 'Indumentaria Deportiva Premium', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80' },
            { id: 'Accesorios', title: 'Mochilas & Accesorios', subtitle: 'Estilo de Vida Urbano', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80' }
          ].map((col) => (
            <motion.div
              key={col.id}
              onClick={() => handleCollectionClick(col.id)}
              onMouseEnter={() => setHoveredCategory(col.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-zinc-950/60 shadow-lg hover:shadow-2xl hover:shadow-accent-500/5 transition-all"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-105" 
                style={{ backgroundImage: `url('${col.img}')` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 space-y-1">
                <span className="text-[9px] font-bold text-accent-400 bg-accent-500/10 px-2 py-0.5 rounded border border-accent-500/20 uppercase tracking-widest">
                  {col.id}
                </span>
                <h3 className="text-base font-extrabold text-white mt-1.5">{col.title}</h3>
                <p className="text-[10px] text-zinc-400 font-semibold">{col.subtitle}</p>
                <div className={`flex items-center gap-1 text-[9px] font-bold text-accent-400 uppercase tracking-wider pt-1 transition-all duration-300 ${
                  hoveredCategory === col.id ? 'opacity-100 translate-x-1' : 'opacity-0 translate-x-0'
                }`}>
                  Explorar Colección <ArrowRight size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION: DEAL OF THE DAY (IMMERSIVE INTERACTIVE LAYOUT) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="glass border border-white/5 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-zinc-950/40 relative overflow-hidden">
          
          {/* Animated Glow Spot */}
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-accent-500/5 blur-[90px] pointer-events-none" />

          {/* Left Column details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 text-[10px] font-extrabold uppercase tracking-widest shadow-lg shadow-rose-500/5 animate-pulse">
              <Flame size={10} className="fill-rose-500" /> Oferta Especial de la Semana
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
              {dealProduct?.name} <br />
              <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">Descuento Exclusivo del {dealDiscountPercent}%</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
              {dealProduct?.description}
            </p>

            {/* Countdown timers */}
            <div className="flex gap-4 items-center select-none pt-2">
              {[
                { val: timeLeft.hours, label: 'Horas' },
                { val: timeLeft.minutes, label: 'Minutos' },
                { val: timeLeft.seconds, label: 'Segundos', animated: true }
              ].map((timeUnit, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="text-xl font-black text-zinc-800">:</div>}
                  <div className="text-center">
                    <div className={`w-14 h-14 bg-zinc-950/90 border border-zinc-850 rounded-2xl flex items-center justify-center text-xl font-black text-white font-mono shadow-md ${
                      timeUnit.animated ? 'text-accent-400' : ''
                    }`}>
                      {formatTime(timeUnit.val)}
                    </div>
                    <span className="text-[8px] font-bold text-zinc-550 uppercase tracking-widest mt-2 block">{timeUnit.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Stock limited bar */}
            <div className="space-y-2 max-w-sm pt-2">
              <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                <span>Estado de Stock Limitado</span>
                <span className="text-accent-400">{dealStockProgress}% Vendido</span>
              </div>
              <div className="h-2 w-full bg-zinc-900 border border-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${dealStockProgress}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleProductClick(dealProduct?.id)}
                className="px-8 py-4 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 hover:shadow-xl hover:shadow-white/10"
              >
                <span>Comprar por S/. {discountedPrice}.00</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Hero image */}
          <div className="lg:col-span-5 aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl relative group">
            <img 
              src={dealProduct?.images[0]} 
              alt={dealProduct?.name} 
              className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-103" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* --- SECTION: TRENDING PRODUCTS (WOW LIST LIFT TRANSITIONS) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
              Productos Populares <Star size={18} className="text-yellow-500 fill-yellow-500" />
            </h2>
            <p className="text-xs text-zinc-550 mt-1">Los favoritos e imprescindibles de nuestra comunidad.</p>
          </div>
          <button
            onClick={() => handleCollectionClick('Todos')}
            className="text-xs font-bold text-accent-400 hover:text-accent-300 transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            Ver Todo <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((p) => {
            const totalStock = Object.values(p.stock).reduce((a, b) => a + b, 0);
            
            return (
              <motion.div
                key={p.id}
                onClick={() => handleProductClick(p.id)}
                whileHover={{ y: -8 }}
                className="group border border-white/5 bg-zinc-950/15 hover:bg-zinc-950/25 rounded-3xl p-4.5 cursor-pointer hover:border-white/10 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  {/* Image wrapper */}
                  <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 relative">
                    <img 
                      src={p.images[0]} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-3.5 py-2 rounded-xl bg-zinc-950/90 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                        <Eye size={12} /> Ver Ficha
                      </div>
                    </div>
                  </div>

                  {/* Info details */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-zinc-550 uppercase tracking-widest block">{p.category}</span>
                    <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white line-clamp-1 truncate">{p.name}</h4>
                  </div>
                </div>

                {/* Pricing & buy wrapper */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center border-t border-zinc-900/60 pt-3">
                    <div className="flex flex-col">
                      <span className="text-xs font-extrabold text-white">S/. {p.price}</span>
                      {p.originalPrice && (
                        <span className="text-[9px] text-zinc-550 line-through mt-0.5">S/. {p.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-0.5 text-xs font-bold text-zinc-400">
                      ★ <span className="text-zinc-200 font-semibold">{p.rating}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleQuickAdd(e, p)}
                    disabled={totalStock === 0}
                    className="w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black hover:border-white text-[10px] font-bold uppercase tracking-wider transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                  >
                    {totalStock === 0 ? 'Sin Stock' : 'Añadir al Carrito'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
