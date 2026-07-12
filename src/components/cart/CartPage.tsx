import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { Minus, Plus, Trash2, Tag, CreditCard, ShoppingBag, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartPage: React.FC = () => {
  const {
    cart,
    updateCartQuantity,
    removeFromCart,
    couponCode,
    discountRate,
    applyCoupon,
    freeShippingThreshold,
    setActiveView,
    setSelectedProductId,
    products
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const cartSubtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discountAmount = cartSubtotal * discountRate;
  const currentSubtotal = cartSubtotal - discountAmount;
  const isFreeShipping = currentSubtotal >= freeShippingThreshold;
  const shippingCost = isFreeShipping ? 0 : 5;
  const tax = parseFloat((currentSubtotal * 0.18).toFixed(2));
  const finalTotal = currentSubtotal + tax + shippingCost;

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;

    const success = applyCoupon(couponInput);
    if (success) {
      setCouponStatus('success');
      setCouponInput('');
    } else {
      setCouponStatus('error');
      setTimeout(() => setCouponStatus('idle'), 3000);
    }
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setActiveView('pdp');
  };

  const recommendedProducts = products
    .filter((p) => !cart.some((item) => item.product.id === p.id))
    .slice(0, 4);

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-550 mx-auto">
          <ShoppingBag size={24} />
        </div>
        <h2 className="text-2xl font-extrabold text-white">Tu carrito está vacío</h2>
        <p className="text-zinc-500 text-sm max-w-xs mx-auto leading-relaxed">
          Explora nuestra tienda para agregar productos y continuar con tu pedido.
        </p>
        <button
          onClick={() => setActiveView('catalog')}
          className="px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white shadow-lg transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft size={14} /> Volver a la Tienda
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Carrito de Compras</h1>
        <p className="text-xs text-zinc-500 font-medium mt-1">Revisa tus artículos antes de realizar el pago.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          <AnimatePresence initial={false}>
            {cart.map((item) => {
              const maxStock = item.product.stock[`${item.selectedSize}-${item.selectedColor.name}`] ?? 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex gap-4 p-5 border border-zinc-900 bg-zinc-950/20 rounded-3xl relative"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-900 flex-shrink-0 cursor-pointer" onClick={() => handleProductClick(item.product.id)}>
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-200 hover:text-white truncate cursor-pointer pr-4" onClick={() => handleProductClick(item.product.id)}>
                          {item.product.name}
                        </h4>
                        <div className="flex flex-wrap gap-2.5 text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-1">
                          <span>Talla: {item.selectedSize}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            Color:
                            <span className="w-2.5 h-2.5 rounded-full border border-white/10" style={{ backgroundColor: item.selectedColor.hex }} />
                            {item.selectedColor.name}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-650 hover:text-rose-500 p-1 rounded transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="flex justify-between items-center pt-1">
                      <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl p-1 w-28 justify-between">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-zinc-250">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= maxStock}
                          className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
                          aria-label="Increase"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-extrabold text-white">${item.product.price * item.quantity} USD</span>
                        <div className="text-[10px] text-zinc-550 font-medium mt-0.5">${item.product.price} c/u</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4">
          <div className="glass border border-white/5 p-6 rounded-3xl space-y-6 sticky top-28">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest pb-3 border-b border-zinc-900">
              Resumen del Pedido
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal</span>
                <span className="text-zinc-300 font-semibold">${cartSubtotal.toFixed(2)}</span>
              </div>

              {discountRate > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <Tag size={12} /> Descuento ({couponCode})
                  </span>
                  <span className="text-emerald-500 font-bold">-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-zinc-500">
                <span>Envío estimado</span>
                <span className="text-zinc-300 font-semibold">
                  {isFreeShipping ? (
                    <span className="text-emerald-500 font-bold">Gratis</span>
                  ) : (
                    `$${shippingCost.toFixed(2)}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-zinc-500">
                <span>Impuestos (18% IGV)</span>
                <span className="text-zinc-300 font-semibold">${tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm font-bold pt-3 border-t border-zinc-900 text-white">
                <span>Total Estimado</span>
                <span className="text-accent-400">${finalTotal.toFixed(2)} USD</span>
              </div>
            </div>

            <form onSubmit={handleCouponSubmit} className="relative pt-4 border-t border-zinc-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Código de cupón"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-accent-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-xs font-bold text-zinc-300 hover:text-white rounded-xl transition-all"
                >
                  Aplicar
                </button>
              </div>

              <AnimatePresence>
                {couponStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 right-0 -bottom-5 text-[10px] text-emerald-400 font-bold"
                  >
                    Cupón aplicado con éxito
                  </motion.div>
                )}
                {couponStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 right-0 -bottom-5 text-[10px] text-rose-500 font-bold"
                  >
                    Código inválido o inactivo
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <button
              onClick={() => setActiveView('checkout')}
              className="w-full py-3.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-600/10 pt-4"
            >
              <CreditCard size={14} />
              Iniciar Checkout Seguro
            </button>
          </div>
        </div>
      </div>

      {recommendedProducts.length > 0 && (
        <div className="border-t border-zinc-900 pt-16">
          <h3 className="text-lg font-bold text-white tracking-tight mb-8">Productos recomendados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => handleProductClick(p.id)}
                className="group border border-white/5 bg-zinc-950/20 rounded-2xl p-4 cursor-pointer hover:border-white/10 transition-colors space-y-3"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-950 relative">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-zinc-300 group-hover:text-white line-clamp-1 truncate">{p.name}</h4>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm font-bold text-white">${p.price}</span>
                    <span className="text-[10px] text-zinc-500 font-medium flex items-center gap-0.5">
                      Ver <ArrowUpRight size={10} />
                    </span>
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
export default CartPage;
