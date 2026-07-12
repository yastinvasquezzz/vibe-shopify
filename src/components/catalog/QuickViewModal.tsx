import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import type { ProductColor } from '../../types/store';
import { X, ShoppingBag, ArrowUpRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuickViewModal: React.FC = () => {
  const {
    products,
    quickViewProductId,
    setQuickViewProductId,
    addToCart,
    setCartDrawerOpen,
    setSelectedProductId,
    setActiveView
  } = useStore();

  const product = products.find((p) => p.id === quickViewProductId);

  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product || !selectedColor) return null;

  const stockKey = `${selectedSize}-${selectedColor.name}`;
  const availableStock = product.stock[stockKey] ?? 0;
  const isOutOfStock = availableStock <= 0;

  const handleAddToCart = () => {
    if (isOutOfStock || isAdding) return;

    setIsAdding(true);
    setTimeout(() => {
      const success = addToCart(product, selectedColor, selectedSize, 1);
      setIsAdding(false);
      if (success) {
        setQuickViewProductId(null);
        setCartDrawerOpen(true);
      }
    }, 600);
  };

  const handleFullDetails = () => {
    setSelectedProductId(product.id);
    setActiveView('pdp');
    setQuickViewProductId(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProductId(null)}
          className="fixed inset-0 bg-black"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden max-w-2xl w-full relative z-10 shadow-2xl flex flex-col md:flex-row h-fit max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={() => setQuickViewProductId(null)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white z-25 transition-colors"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>

          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-full bg-zinc-900 min-h-[250px]">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{product.category}</span>
              <h3 className="text-lg font-bold text-white tracking-tight leading-tight pr-6">{product.name}</h3>

              <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold">
                <Star size={12} fill="currentColor" />
                <span>{product.rating}</span>
                <span className="text-zinc-500 font-medium">({product.reviewCount} opiniones)</span>
              </div>

              <div className="text-lg font-extrabold text-white">S/. {product.price}</div>
              <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">{product.description}</p>
            </div>

            <div className="space-y-4 pt-3 border-t border-zinc-900">
              {product.colors.length > 1 && (
                <div>
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Color</span>
                  <div className="flex items-center gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                          selectedColor.name === color.name
                            ? 'border-accent-500 scale-110'
                            : 'border-white/5 hover:scale-105'
                        }`}
                        title={color.name}
                      >
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: color.hex }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes.length > 1 && product.sizes[0] !== 'Estándar' && product.sizes[0] !== 'Única' && (
                <div>
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Talla</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-all ${
                          selectedSize === size
                            ? 'border-accent-500 bg-accent-500/10 text-accent-400'
                            : 'border-zinc-800 bg-zinc-900/50 text-zinc-450 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-500">
                <span>Inventario:</span>
                <span className={isOutOfStock ? 'text-rose-500' : 'text-emerald-500'}>
                  {isOutOfStock ? 'Sin stock' : `${availableStock} unidades`}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-zinc-900">
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock || isAdding}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isOutOfStock
                    ? 'bg-zinc-900 border border-zinc-800 text-zinc-600 cursor-not-allowed'
                    : isAdding
                    ? 'bg-accent-600/50 text-white/50 cursor-wait'
                    : 'bg-accent-600 hover:bg-accent-500 text-white shadow-lg shadow-accent-600/10'
                }`}
              >
                {isAdding ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Añadiendo...</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={13} />
                    <span>Añadir al Carrito</span>
                  </>
                )}
              </button>

              <button
                onClick={handleFullDetails}
                className="w-full py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/20 hover:bg-zinc-900 transition-colors flex items-center justify-center gap-1"
              >
                <span>Detalles Completos</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
