import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { X, Trash2, Plus, Minus, CreditCard, Tag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartDrawerOpen,
    setCartDrawerOpen,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    couponCode,
    discountRate,
    applyCoupon,
    freeShippingThreshold,
    setActiveView
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const cartSubtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discountAmount = cartSubtotal * discountRate;
  const deliveryLimitDiff = freeShippingThreshold - (cartSubtotal - discountAmount);
  const isFreeDelivery = deliveryLimitDiff <= 0;
  const progressPercent = Math.min(100, Math.max(0, ((cartSubtotal - discountAmount) / freeShippingThreshold) * 100));

  const total = cartSubtotal - discountAmount;

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

  const handleCheckoutClick = () => {
    setCartDrawerOpen(false);
    setActiveView('checkout');
  };

  return (
    <AnimatePresence>
      {isCartDrawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartDrawerOpen(false)}
            className="fixed inset-0 bg-black z-50"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 bottom-0 right-0 w-full sm:max-w-md bg-zinc-950 border-l border-zinc-900 z-50 flex flex-col justify-between"
          >
            <div className="p-6 border-b border-zinc-900 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white">Tu Carrito</span>
                <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold px-2 py-0.5 rounded-full">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-[10px] uppercase font-bold text-zinc-500 hover:text-rose-500 transition-colors"
                  >
                    Vaciar todo
                  </button>
                )}
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-1 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close cart"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {cart.length > 0 && (
              <div className="p-5 bg-zinc-950/40 border-b border-zinc-900 space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-zinc-400">
                    {isFreeDelivery
                      ? '¡Felicidades! Tienes envío gratuito'
                      : `Faltan $${deliveryLimitDiff.toFixed(2)} USD para el envío GRATIS`}
                  </span>
                  <span className="text-accent-400 font-bold">{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-600 to-accent-400 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-650 mb-4">
                    <Trash2 size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-300 mb-1">Tu carrito está vacío</h3>
                  <p className="text-xs text-zinc-500 max-w-[240px] leading-relaxed">
                    Agrega productos de nuestro catálogo para comenzar a configurar tu pedido.
                  </p>
                  <button
                    onClick={() => setCartDrawerOpen(false)}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    Volver a comprar
                  </button>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {cart.map((item) => {
                    const maxStock = item.product.stock[`${item.selectedSize}-${item.selectedColor.name}`] ?? 0;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="flex gap-4 p-4 border border-zinc-900 bg-zinc-950/20 rounded-2xl relative"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0">
                          <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-xs font-semibold text-zinc-200 truncate pr-4">{item.product.name}</h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-zinc-600 hover:text-rose-500 p-0.5 rounded transition-colors absolute top-4 right-4"
                              aria-label="Remove item"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                            <span>Talla: {item.selectedSize}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              Color: 
                              <span className="w-2.5 h-2.5 rounded-full border border-white/10" style={{ backgroundColor: item.selectedColor.hex }} />
                              {item.selectedColor.name}
                            </span>
                          </div>

                          <div className="flex justify-between items-center pt-1.5">
                            <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 w-24 justify-between">
                              <button
                                onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="p-1 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
                              >
                                <Minus size={10} />
                              </button>
                              <span className="text-xs font-bold text-zinc-200">{item.quantity}</span>
                              <button
                                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                disabled={item.quantity >= maxStock}
                                className="p-1 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
                              >
                                <Plus size={10} />
                              </button>
                            </div>
                             <span className="text-sm font-bold text-white">S/. {item.product.price * item.quantity}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-zinc-900 bg-zinc-950 space-y-4">
                <form onSubmit={handleCouponSubmit} className="relative">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Código de descuento (ej: VIBE20)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-accent-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-bold text-zinc-300 hover:text-white rounded-xl transition-all"
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
                        className="absolute left-0 right-0 -bottom-5 text-[10px] text-emerald-400 font-bold flex items-center gap-1.5"
                      >
                        <Check size={10} /> ¡Cupón aplicado con éxito!
                      </motion.div>
                    )}
                    {couponStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 right-0 -bottom-5 text-[10px] text-rose-500 font-bold flex items-center gap-1.5"
                      >
                        <X size={10} /> Código inválido o no existe.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex justify-between text-zinc-500 font-medium">
                    <span>Subtotal</span>
                    <span className="text-zinc-300 font-semibold">S/. {cartSubtotal.toFixed(2)}</span>
                  </div>

                  {discountRate > 0 && (
                    <div className="flex justify-between text-zinc-500 font-medium items-center">
                      <span className="flex items-center gap-1 text-emerald-500 font-bold">
                        <Tag size={12} />
                        Descuento ({couponCode})
                      </span>
                      <span className="text-emerald-500 font-bold">-S/. {discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-zinc-500 font-medium">
                    <span>Envío</span>
                    <span className="text-zinc-350">
                      {isFreeDelivery ? (
                        <span className="text-emerald-500 font-bold">Gratis</span>
                      ) : (
                        'Calculado en el checkout'
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm font-bold pt-2 border-t border-zinc-900 text-white">
                     <span>Total Estimado</span>
                    <span className="text-accent-400">S/. {total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-600/10"
                >
                  <CreditCard size={14} />
                  Proceder al Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
