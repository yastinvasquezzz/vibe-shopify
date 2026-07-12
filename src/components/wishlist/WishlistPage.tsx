import React from 'react';
import { useStore } from '../../store/useStore';
import { Heart, Trash2, Star, ShoppingCart, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WishlistPage: React.FC = () => {
  const {
    wishlist,
    products,
    toggleWishlist,
    clearWishlist,
    addToCart,
    setActiveView,
    setSelectedProductId
  } = useStore();

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setActiveView('pdp');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'}
      />
    ));
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto"
        >
          <Heart size={32} className="text-zinc-600" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            Tu lista de deseos está vacía
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs mx-auto leading-relaxed">
            Explora nuestra tienda y guarda los productos que más te gusten para comprarlos después.
          </p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => setActiveView('catalog')}
          className="px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white shadow-lg shadow-accent-600/10 transition-all inline-flex items-center gap-1.5"
        >
          <ArrowLeft size={14} /> Explorar Tienda
        </motion.button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-10">
      {/* --- SECTION: HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <Sparkles size={18} className="text-accent-400" />
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Colección Personal
            </span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Mis Favoritos
          </h1>
          <p className="text-xs text-zinc-500 font-medium mt-1">
            {wishlistProducts.length} {wishlistProducts.length === 1 ? 'producto guardado' : 'productos guardados'}
          </p>
        </div>
        <button
          onClick={clearWishlist}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-rose-500/30 hover:bg-rose-500/5 text-xs font-bold text-zinc-400 hover:text-rose-400 transition-all self-start sm:self-auto"
        >
          <Trash2 size={13} /> Limpiar Lista
        </button>
      </div>

      {/* --- SECTION: PRODUCT GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence initial={false}>
          {wishlistProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="group glass border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors"
            >
              <div
                className="aspect-[4/3] overflow-hidden bg-zinc-950 cursor-pointer relative"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 space-y-3.5">
                <div className="flex justify-between items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3
                      className="text-sm font-bold text-zinc-200 hover:text-white truncate cursor-pointer mt-0.5"
                      onClick={() => handleProductClick(product.id)}
                    >
                      {product.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-rose-500/30 hover:bg-rose-500/10 text-zinc-500 hover:text-rose-400 transition-all flex-shrink-0"
                    aria-label="Quitar de favoritos"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-medium">
                    ({product.reviewCount})
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-lg font-extrabold text-white">
                      S/. {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-zinc-600 line-through ml-2 font-medium">
                        S/. {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product, product.colors[0], product.sizes[0], 1)}
                  className="w-full py-3 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-600/10"
                >
                  <ShoppingCart size={14} /> Añadir al Carrito
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WishlistPage;
