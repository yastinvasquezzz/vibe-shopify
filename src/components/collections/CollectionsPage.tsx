import React from 'react';
import { useStore } from '../../store/useStore';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const CollectionsPage: React.FC = () => {
  const { products, recentlyViewed, setActiveView, setSelectedProductId, setFilterCategory } = useStore();

  const categories = Array.from(new Set(products.map((p) => p.category))).filter((c) => c !== 'Todos');

  const getCategoryImage = (category: string) => {
    const firstProduct = products.find((p) => p.category === category);
    return firstProduct ? firstProduct.images[0] : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80';
  };

  const getCategoryCount = (category: string) => {
    return products.filter((p) => p.category === category).length;
  };

  const recentlyViewedProducts = recentlyViewed
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is typeof products[0] => p !== undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full text-accent-400 text-[10px] font-bold uppercase tracking-wider">
          <Sparkles size={10} /> Colecciones Curadas
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Explorar Colecciones</h1>
        <p className="text-xs text-zinc-500 font-medium">Encuentra productos diseñados para complementar tu estilo de vida.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              setFilterCategory(category);
              setActiveView('catalog');
            }}
            className="group relative aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-zinc-900"
          >
            <img
              src={getCategoryImage(category)}
              alt={category}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-bold text-accent-400 uppercase tracking-widest block mb-1">Colección</span>
                <h3 className="text-lg font-bold text-white leading-tight">{category}</h3>
                <span className="text-xs text-zinc-400 font-medium mt-1 block">{getCategoryCount(category)} Productos</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors">
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {recentlyViewedProducts.length > 0 && (
        <div className="border-t border-zinc-900 pt-10">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Vistos Recientemente</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {recentlyViewedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  setSelectedProductId(p.id);
                  setActiveView('pdp');
                }}
                className="group border border-white/5 bg-zinc-950/20 rounded-2xl p-3 cursor-pointer hover:border-white/10 transition-colors space-y-2.5"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-950">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[11px] font-semibold text-zinc-300 group-hover:text-white line-clamp-1 truncate">{p.name}</h4>
                  <span className="text-xs font-bold text-white block">S/. {p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center pt-6">
        <button
          onClick={() => {
            setFilterCategory('Todos');
            setActiveView('catalog');
          }}
          className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-bold text-white transition-colors"
        >
          Ver Todo el Catálogo
        </button>
      </div>
    </div>
  );
};

export default CollectionsPage;
