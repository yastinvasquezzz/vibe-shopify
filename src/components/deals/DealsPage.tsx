import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { Heart, Sparkles, Star, Tag, ShoppingCart, Clock } from 'lucide-react';

export const DealsPage: React.FC = () => {
  const { products, wishlist, toggleWishlist, setActiveView, setSelectedProductId, addToCart } = useStore();
  const [filter, setFilter] = useState<'Todos' | 'Audio' | 'Moda' | 'Accesorios'>('Todos');
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const filteredProducts = products.filter((p) => {
    return filter === 'Todos' || p.category === filter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
      {/* --- SECTION: HERO COUNTDOWN BANNER --- */}
      <div className="bg-gradient-to-r from-accent-700 via-accent-600 to-accent-950 rounded-3xl p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl">
        <div className="space-y-4 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
            <Sparkles size={10} /> Promociones Flash
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Ofertas Especiales</h1>
          <p className="text-sm text-zinc-200 font-medium max-w-sm">Descuentos exclusivos del día. Compra rápido antes de que se agote el stock disponible.</p>
        </div>

        <div className="glass border border-white/10 px-6 py-5 rounded-2xl flex flex-col items-center gap-2.5 z-10 min-w-[200px] select-none text-center">
          <span className="text-[10px] font-bold text-accent-300 uppercase tracking-widest flex items-center gap-1">
            <Clock size={12} /> Cierra en
          </span>
          <div className="flex gap-2 text-2xl font-mono font-extrabold text-white">
            <div>
              <span>{formatNumber(timeLeft.hours)}</span>
              <span className="text-[9px] text-zinc-550 block font-sans font-bold uppercase mt-0.5">hrs</span>
            </div>
            <span className="text-zinc-500 animate-pulse">:</span>
            <div>
              <span>{formatNumber(timeLeft.minutes)}</span>
              <span className="text-[9px] text-zinc-550 block font-sans font-bold uppercase mt-0.5">min</span>
            </div>
            <span className="text-zinc-500 animate-pulse">:</span>
            <div>
              <span>{formatNumber(timeLeft.seconds)}</span>
              <span className="text-[9px] text-zinc-550 block font-sans font-bold uppercase mt-0.5">seg</span>
            </div>
          </div>
        </div>

        <div className="absolute -top-16 -right-16 w-60 h-60 bg-accent-500/20 rounded-full blur-3xl z-0" />
      </div>

      <div className="flex flex-wrap gap-2 border-b border-zinc-900 pb-4">
        {(['Todos', 'Audio', 'Moda', 'Accesorios'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all uppercase tracking-wider ${
              filter === cat
                ? 'border-accent-500 bg-accent-500/10 text-accent-400 font-semibold'
                : 'border-zinc-800 bg-zinc-950/20 text-zinc-500 hover:border-zinc-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((p) => {
          const discountPct = 15;
          const originalPrice = p.originalPrice || Math.round(p.price * 1.18);
          const hasDiscount = true;
          const isFavorited = wishlist.includes(p.id);

          return (
            <div
              key={p.id}
              className="group relative border border-white/5 bg-zinc-950/20 rounded-3xl p-4 flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-950 relative cursor-pointer" onClick={() => { setSelectedProductId(p.id); setActiveView('pdp'); }}>
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" />
                  
                  {hasDiscount && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-rose-500 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-0.5">
                      <Tag size={10} /> -{discountPct}%
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(p.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full border bg-zinc-950/80 backdrop-blur transition-all ${
                      isFavorited ? 'border-rose-500/30 text-rose-500' : 'border-white/5 text-zinc-400 hover:text-white'
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart size={14} fill={isFavorited ? 'currentColor' : 'none'} />
                  </button>
                </div>

                <div className="space-y-1 cursor-pointer" onClick={() => { setSelectedProductId(p.id); setActiveView('pdp'); }}>
                  <span className="text-[10px] text-zinc-550 font-bold uppercase tracking-wider">{p.category}</span>
                  <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white line-clamp-1 truncate">{p.name}</h3>
                  <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold pt-1">
                    <Star size={11} fill="currentColor" /> {p.rating.toFixed(1)}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-900 flex justify-between items-center gap-4">
                <div>
                  <span className="text-xs text-zinc-500 line-through font-medium font-mono">S/. {originalPrice}</span>
                  <span className="text-base font-extrabold text-white block">S/. {p.price}</span>
                </div>
                <button
                  onClick={() => addToCart(p, p.colors[0], p.sizes[0], 1)}
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DealsPage;
