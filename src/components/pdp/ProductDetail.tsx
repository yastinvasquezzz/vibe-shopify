import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../../store/useStore';
import type { ProductColor } from '../../types/store';
import { ChevronLeft, ChevronRight, Plus, Minus, ShoppingBag, Star, Truck, RefreshCw, MessageSquare } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const {
    products,
    selectedProductId,
    setSelectedProductId,
    addToCart,
    setCartDrawerOpen,
    setActiveView
  } = useStore();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'shipping'>('details');

  const containerRef = useRef<HTMLDivElement>(null);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ display: 'none' });

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
      setQuantity(1);
      setActiveImageIdx(0);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [product]);

  const stockKey = `${selectedSize}-${selectedColor.name}`;
  const availableStock = product.stock[stockKey] ?? 0;
  const isOutOfStock = availableStock <= 0;

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') {
      setQuantity((q) => Math.min(q + 1, availableStock));
    } else {
      setQuantity((q) => Math.max(1, q - 1));
    }
  };

  const handleAddToCart = () => {
    if (isOutOfStock || isAdding) return;

    setIsAdding(true);
    setTimeout(() => {
      const success = addToCart(product, selectedColor, selectedSize, quantity);
      setIsAdding(false);
      if (success) {
        setCartDrawerOpen(true);
      }
    }, 650);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundImage: `url(${product.images[activeImageIdx]})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '220%'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveImageIdx((idx) => (idx + 1) % product.images.length);
      } else {
        setActiveImageIdx((idx) => (idx - 1 + product.images.length) % product.images.length);
      }
    }
    touchStartX.current = null;
  };

  const recommendedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const starCounts = [0, 0, 0, 0, 0];
  product.reviews.forEach((r) => {
    const idx = Math.floor(r.rating) - 1;
    if (idx >= 0 && idx < 5) starCounts[idx]++;
  });
  const totalReviews = product.reviews.length || 1;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10" ref={containerRef}>
      <button
        onClick={() => {
          setSelectedProductId(null);
          setActiveView('catalog');
        }}
        className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-wider mb-8 transition-colors"
      >
        <ChevronLeft size={14} /> Volver al catálogo
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-4">
          <div
            className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-950 border border-white/5 cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={product.images[activeImageIdx]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-no-repeat pointer-events-none transition-opacity duration-150"
              style={zoomStyle}
            />

            <button
              onClick={() => setActiveImageIdx((idx) => (idx - 1 + product.images.length) % product.images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white border border-white/10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setActiveImageIdx((idx) => (idx + 1) % product.images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white border border-white/10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 bg-zinc-950 flex-shrink-0 transition-all ${
                  idx === activeImageIdx ? 'border-accent-500 scale-95' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-amber-500 font-bold">
                <Star size={16} fill="currentColor" />
                <span>{product.rating}</span>
                <span className="text-zinc-500 font-medium">({product.reviewCount} opiniones)</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-850" />
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                SKU: {product.id}-{selectedSize}-{selectedColor.name.substring(0,2).toUpperCase()}
              </div>
            </div>

            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl font-extrabold text-white">${product.price} USD</span>
              {product.originalPrice && (
                <span className="text-base text-zinc-500 line-through">${product.originalPrice} USD</span>
              )}
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed pt-2">
              {product.description}
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-zinc-900">
            {product.colors.length > 1 && (
              <div>
                <span className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                  Color: <span className="text-white font-semibold">{selectedColor.name}</span>
                </span>
                <div className="flex items-center gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color);
                        setQuantity(1);
                      }}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor.name === color.name
                          ? 'border-accent-500 scale-110 shadow-lg shadow-accent-500/20'
                          : 'border-white/10 hover:scale-105'
                      }`}
                    >
                      <span className="w-5.5 h-5.5 rounded-full" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes.length > 1 && product.sizes[0] !== 'Estándar' && product.sizes[0] !== 'Única' && (
              <div>
                <span className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                  Talla / Tamaño: <span className="text-white font-semibold">{selectedSize}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setQuantity(1);
                      }}
                      className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all ${
                        selectedSize === size
                          ? 'border-accent-500 bg-accent-500/10 text-accent-400'
                          : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Cantidad
                </span>
                <span className={`text-xs font-bold ${
                  isOutOfStock
                    ? 'text-rose-500'
                    : availableStock <= 3
                    ? 'text-amber-500 animate-pulse'
                    : 'text-emerald-500'
                }`}>
                  {isOutOfStock
                    ? 'Agotado'
                    : availableStock <= 3
                    ? `¡Pocas unidades! Solo quedan ${availableStock}`
                    : `Disponible: ${availableStock} unidades`}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl p-1 w-32 justify-between">
                  <button
                    onClick={() => handleQuantityChange('dec')}
                    disabled={quantity <= 1 || isOutOfStock}
                    className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-bold text-zinc-100 w-8 text-center select-none">
                    {isOutOfStock ? 0 : quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('inc')}
                    disabled={quantity >= availableStock || isOutOfStock}
                    className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={isOutOfStock || isAdding}
                  className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 ${
                    isOutOfStock
                      ? 'bg-zinc-900 border border-zinc-800 text-zinc-650 cursor-not-allowed'
                      : isAdding
                      ? 'bg-accent-600/60 text-white/50 cursor-wait'
                      : 'bg-accent-600 hover:bg-accent-500 text-white shadow-xl shadow-accent-600/10'
                  }`}
                >
                  {isAdding ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Añadiendo al carrito...</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>Añadir al Carrito</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-900">
            <div className="flex border-b border-zinc-900 mb-4">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 text-xs font-bold uppercase tracking-wider border-b-2 px-1 transition-all mr-6 ${
                  activeTab === 'details'
                    ? 'border-accent-500 text-white font-extrabold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Especificaciones
              </button>
              <button
                onClick={() => setActiveTab('shipping')}
                className={`pb-2 text-xs font-bold uppercase tracking-wider border-b-2 px-1 transition-all ${
                  activeTab === 'shipping'
                    ? 'border-accent-500 text-white font-extrabold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Envíos y Cambios
              </button>
            </div>

            <div className="text-zinc-400 text-xs leading-relaxed min-h-24">
              {activeTab === 'details' ? (
                <ul className="list-disc pl-4 space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Truck size={14} className="text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-zinc-300">Entrega gratuita (sobre $150 USD)</p>
                      <p className="text-zinc-500">Envío estándar nacional tarda de 3 a 5 días hábiles.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <RefreshCw size={14} className="text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-zinc-300">Garantía de Devolución de 30 Días</p>
                      <p className="text-zinc-500">¿No te queda bien? Devuélvelo de forma gratuita e higiénica.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-zinc-900 pt-16 mb-20">
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <MessageSquare size={18} className="text-accent-500" /> opiniones del producto
          </h2>
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-extrabold text-white">{product.rating}</span>
              <div>
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className="text-amber-500" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1 block">
                  Promedio de opiniones
                </span>
              </div>
            </div>
            <div className="space-y-2">
              {starCounts.map((count, i) => {
                const percent = Math.round((count / totalReviews) * 100);
                return (
                  <div key={i} className="flex items-center text-xs text-zinc-400 gap-2">
                    <span className="w-3 text-right">{i + 1}</span>
                    <Star size={10} fill="currentColor" className="text-zinc-650" />
                    <div className="flex-1 h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-accent-500" style={{ width: `${percent}%` }} />
                    </div>
                    <span className="w-8 text-right text-zinc-500">{percent}%</span>
                  </div>
                );
              }).reverse()}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Reseñas de Clientes</h3>
          {product.reviews.length === 0 ? (
            <p className="text-sm text-zinc-500 italic">No hay reseñas para este producto todavía. ¡Sé el primero en opinar!</p>
          ) : (
            <div className="space-y-4">
              {product.reviews.map((rev) => (
                <div key={rev.id} className="p-5 border border-zinc-900 bg-zinc-950/20 rounded-2xl space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-zinc-200 text-sm">{rev.author}</div>
                      <div className="flex text-amber-500 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={10} fill={i < rev.rating ? 'currentColor' : 'none'} className="text-amber-500" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">{rev.date}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {recommendedProducts.length > 0 && (
        <div className="border-t border-zinc-900 pt-16">
          <h3 className="text-lg font-bold text-white tracking-tight mb-8">Te puede interesar</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  setSelectedProductId(p.id);
                  setActiveView('pdp');
                }}
                className="group border border-white/5 bg-zinc-950/20 rounded-2xl p-4 cursor-pointer hover:border-white/10 transition-colors space-y-3"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-950 relative">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-zinc-300 group-hover:text-white line-clamp-1 truncate">{p.name}</h4>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm font-bold text-white">${p.price}</span>
                    <span className="text-[10px] text-zinc-500 font-medium">{p.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
