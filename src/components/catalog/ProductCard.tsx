import React, { useState } from 'react';
import type { Product, ProductColor } from '../../types/store';
import { useStore } from '../../store/useStore';
import { ShoppingBag, Star, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setCartDrawerOpen, setQuickViewProductId, setSelectedProductId, setActiveView } = useStore();

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const stockKey = `${selectedSize}-${selectedColor.name}`;
  const availableStock = product.stock[stockKey] ?? 0;
  const isOutOfStock = availableStock <= 0;

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOutOfStock || isAdding) return;

    setIsAdding(true);
    setTimeout(() => {
      const success = addToCart(product, selectedColor, selectedSize, 1);
      setIsAdding(false);
      if (success) {
        setCartDrawerOpen(true);
      }
    }, 600);
  };

  const handleCardClick = () => {
    setSelectedProductId(product.id);
    setActiveView('pdp');
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProductId(product.id);
  };

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between h-full relative"
    >
      <div>
        <div className="relative aspect-square overflow-hidden bg-zinc-950">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
            loading="lazy"
          />

          {discountPercent > 0 && (
            <span className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              -{discountPercent}%
            </span>
          )}

          {isOutOfStock && (
            <span className="absolute top-3 right-3 bg-zinc-900/90 text-zinc-400 border border-zinc-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Agotado
            </span>
          )}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              onClick={handleQuickViewClick}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white border border-white/10 transition-colors"
              title="Vista Rápida"
              aria-label="Quick view"
            >
              <Eye size={16} />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-amber-500 font-medium">
              <Star size={12} fill="currentColor" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white line-clamp-1 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-zinc-900">
            {product.colors.length > 1 && (
              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                      selectedColor.name === color.name
                        ? 'border-accent-500 scale-110'
                        : 'border-white/5 hover:scale-105'
                    }`}
                    title={color.name}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            )}

            {product.sizes.length > 1 && product.sizes[0] !== 'Estándar' && product.sizes[0] !== 'Única' && (
              <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-1.5 py-0.5 rounded text-[9px] font-bold border transition-all ${
                      selectedSize === size
                        ? 'border-accent-500 bg-accent-500/10 text-accent-400'
                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 pt-0">
        <button
          onClick={handleQuickAdd}
          disabled={isOutOfStock || isAdding}
          className={`w-full py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
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
              <span>Añadir Rápido</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};
