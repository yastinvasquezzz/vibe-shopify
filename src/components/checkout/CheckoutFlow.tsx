import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { ChevronLeft, CreditCard, Shield, Truck, CheckCircle2, Ticket, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CheckoutFlow: React.FC = () => {
  const {
    cart,
    checkoutStep,
    setCheckoutStep,
    checkoutShippingAddress,
    updateCheckoutAddress,
    checkoutShippingMethod,
    setCheckoutShippingMethod,
    checkoutCardInfo,
    updateCheckoutCard,
    couponCode,
    discountRate,
    applyCoupon,
    freeShippingThreshold,
    submitCheckout,
    setActiveView
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastPlacedOrder, setLastPlacedOrder] = useState<any>(null);

  const [addressErrors, setAddressErrors] = useState<{ [key: string]: boolean }>({});
  const [cardErrors, setCardErrors] = useState<{ [key: string]: boolean }>({});

  const cartSubtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discountAmount = cartSubtotal * discountRate;
  const currentSubtotal = cartSubtotal - discountAmount;
  const isFreeShipping = currentSubtotal >= freeShippingThreshold;

  const shippingCost = isFreeShipping
    ? 0
    : checkoutShippingMethod === 'express' ? 15 : 5;

  const tax = parseFloat((currentSubtotal * 0.18).toFixed(2));
  const finalTotal = parseFloat((currentSubtotal + tax + shippingCost).toFixed(2));

  const handleAutofill = () => {
    updateCheckoutAddress({
      fullName: 'Javier Vasquez',
      email: 'javier.vasquez@vibecommerce.com',
      phone: '+51 987 654 321',
      address: 'Av. Diagonal 450, Dpto 802',
      city: 'Lima',
      postalCode: '15074',
      country: 'Perú',
    });
    setAddressErrors({});
  };

  const validateStep1 = () => {
    const errors: { [key: string]: boolean } = {};
    const fields: (keyof typeof checkoutShippingAddress)[] = ['fullName', 'email', 'phone', 'address', 'city', 'postalCode', 'country'];
    fields.forEach((f) => {
      if (!checkoutShippingAddress[f].trim()) {
        errors[f] = true;
      }
    });
    
    if (checkoutShippingAddress.email && !checkoutShippingAddress.email.includes('@')) {
      errors.email = true;
    }

    setAddressErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep3 = () => {
    const errors: { [key: string]: boolean } = {};
    const cleanNum = checkoutCardInfo.number.replace(/\s/g, '');
    
    if (cleanNum.length !== 16) errors.number = true;
    if (!checkoutCardInfo.name.trim()) errors.name = true;
    
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryRegex.test(checkoutCardInfo.expiry)) errors.expiry = true;
    
    if (checkoutCardInfo.cvv.length !== 3) errors.cvv = true;

    setCardErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleStep1Next = () => {
    if (validateStep1()) {
      setCheckoutStep(2);
    }
  };

  const handleStep2Next = () => {
    setCheckoutStep(3);
  };

  const handlePlaceOrder = () => {
    if (!validateStep3() || isProcessing) return;

    setIsProcessing(true);
    setTimeout(() => {
      const order = submitCheckout();
      setIsProcessing(false);
      if (order) {
        setLastPlacedOrder(order);
      }
    }, 1800);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const clean = value.replace(/[^0-9]/g, '');
    if (clean.length >= 2) {
      return `${clean.slice(0, 2)}/${clean.slice(2, 4)}`;
    }
    return clean;
  };

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

  if (checkoutStep === 4 && lastPlacedOrder) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="space-y-6"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
            <CheckCircle2 size={44} />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">¡Pedido Confirmado!</h1>
            <p className="text-sm text-zinc-400">Gracias por tu compra. Tu orden ha sido procesada con éxito.</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 text-left space-y-4 max-w-md mx-auto">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">ID de Orden</span>
              <span className="font-mono font-bold text-accent-400">{lastPlacedOrder.id}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Estado de envío</span>
              <span className="px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-400 font-semibold text-[10px] uppercase tracking-wide">
                Procesando
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Email de contacto</span>
              <span className="text-zinc-300 font-semibold">{lastPlacedOrder.items[0]?.id ? 'javier.vasquez@vibecommerce.com' : ''}</span>
            </div>
            <div className="flex justify-between items-center text-xs pt-4 border-t border-zinc-900">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Total debitado</span>
              <span className="text-sm font-extrabold text-white">${lastPlacedOrder.total.toFixed(2)} USD</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setActiveView('profile')}
              className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
            >
              Ver mis Pedidos
            </button>
            <button
              onClick={() => setActiveView('catalog')}
              className="px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white shadow-lg shadow-accent-600/10 transition-colors"
            >
              Seguir Comprando
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* --- SECTION: CHECKOUT FORM STEPS --- */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
            <span className={checkoutStep >= 1 ? 'text-white font-extrabold' : ''}>Información</span>
            <span>/</span>
            <span className={checkoutStep >= 2 ? 'text-white font-extrabold' : ''}>Envío</span>
            <span>/</span>
            <span className={checkoutStep >= 3 ? 'text-white font-extrabold' : ''}>Pago</span>
          </div>

          <AnimatePresence mode="wait">
            {checkoutStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white tracking-tight">Dirección de Entrega</h2>
                  <button
                    onClick={handleAutofill}
                    className="text-[10px] uppercase font-bold text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    Simular Autofill
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="checkout-label">Nombre Completo</label>
                    <input
                      type="text"
                      value={checkoutShippingAddress.fullName}
                      onChange={(e) => updateCheckoutAddress({ fullName: e.target.value })}
                      placeholder="Javier Vasquez"
                      className={`checkout-input ${addressErrors.fullName ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                    />
                  </div>

                  <div>
                    <label className="checkout-label">Email de contacto</label>
                    <input
                      type="email"
                      value={checkoutShippingAddress.email}
                      onChange={(e) => updateCheckoutAddress({ email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className={`checkout-input ${addressErrors.email ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                    />
                  </div>

                  <div>
                    <label className="checkout-label">Teléfono</label>
                    <input
                      type="tel"
                      value={checkoutShippingAddress.phone}
                      onChange={(e) => updateCheckoutAddress({ phone: e.target.value })}
                      placeholder="+51 987 654 321"
                      className={`checkout-input ${addressErrors.phone ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="checkout-label">Dirección</label>
                    <input
                      type="text"
                      value={checkoutShippingAddress.address}
                      onChange={(e) => updateCheckoutAddress({ address: e.target.value })}
                      placeholder="Av. Diagonal 450, Dpto 802"
                      className={`checkout-input ${addressErrors.address ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                    />
                  </div>

                  <div>
                    <label className="checkout-label">Ciudad</label>
                    <input
                      type="text"
                      value={checkoutShippingAddress.city}
                      onChange={(e) => updateCheckoutAddress({ city: e.target.value })}
                      placeholder="Lima"
                      className={`checkout-input ${addressErrors.city ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                    />
                  </div>

                  <div>
                    <label className="checkout-label">Código Postal</label>
                    <input
                      type="text"
                      value={checkoutShippingAddress.postalCode}
                      onChange={(e) => updateCheckoutAddress({ postalCode: e.target.value })}
                      placeholder="15074"
                      className={`checkout-input ${addressErrors.postalCode ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="checkout-label">País</label>
                    <input
                      type="text"
                      value={checkoutShippingAddress.country}
                      onChange={(e) => updateCheckoutAddress({ country: e.target.value })}
                      placeholder="Perú"
                      className={`checkout-input ${addressErrors.country ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                    />
                  </div>
                </div>

                <button
                  onClick={handleStep1Next}
                  className="w-full py-3.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-accent-600/10"
                >
                  <span>Continuar con Envíos</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {checkoutStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white tracking-tight">Método de Envío</h2>
                  <button
                    onClick={() => setCheckoutStep(1)}
                    className="flex items-center gap-1 text-[10px] uppercase font-bold text-zinc-500 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={12} /> Editar Dirección
                  </button>
                </div>

                <div className="space-y-4">
                  <div
                    onClick={() => setCheckoutShippingMethod('standard')}
                    className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all ${
                      checkoutShippingMethod === 'standard'
                        ? 'border-accent-500 bg-accent-500/5'
                        : 'border-zinc-800 bg-zinc-950/20 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${checkoutShippingMethod === 'standard' ? 'border-accent-500' : 'border-zinc-700'}`}>
                        {checkoutShippingMethod === 'standard' && <div className="w-2 h-2 rounded-full bg-accent-500" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
                          <Truck size={14} className="text-zinc-500" /> Envío Estándar
                        </div>
                        <p className="text-xs text-zinc-550 mt-1">Entrega estimada de 3 a 5 días hábiles</p>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-white">
                      {isFreeShipping ? 'Gratis' : '$5.00 USD'}
                    </div>
                  </div>

                  <div
                    onClick={() => setCheckoutShippingMethod('express')}
                    className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all ${
                      checkoutShippingMethod === 'express'
                        ? 'border-accent-500 bg-accent-500/5'
                        : 'border-zinc-800 bg-zinc-950/20 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${checkoutShippingMethod === 'express' ? 'border-accent-500' : 'border-zinc-700'}`}>
                        {checkoutShippingMethod === 'express' && <div className="w-2 h-2 rounded-full bg-accent-500" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
                          <Truck size={14} className="text-zinc-500" /> Envío Express Premium
                        </div>
                        <p className="text-xs text-zinc-550 mt-1">Entrega garantizada de 1 a 2 días hábiles</p>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-white">
                      {isFreeShipping ? 'Gratis' : '$15.00 USD'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleStep2Next}
                  className="w-full py-3.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-accent-600/10"
                >
                  <span>Continuar con el Pago</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {checkoutStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white tracking-tight">Formulario de Pago</h2>
                  <button
                    onClick={() => setCheckoutStep(2)}
                    className="flex items-center gap-1 text-[10px] uppercase font-bold text-zinc-500 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={12} /> Editar Envío
                  </button>
                </div>

                <div className="p-5 border border-zinc-900 bg-zinc-950/40 rounded-3xl space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-500 pb-2 border-b border-zinc-900">
                    <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                      <CreditCard size={14} /> Pago con Tarjeta
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-500">
                      <Shield size={12} /> Conexión SSL
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="checkout-label">Número de Tarjeta</label>
                      <input
                        type="text"
                        maxLength={19}
                        value={checkoutCardInfo.number}
                        onChange={(e) => updateCheckoutCard({ number: formatCardNumber(e.target.value) })}
                        placeholder="4152 7394 2841 8402"
                        className={`checkout-input ${cardErrors.number ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="checkout-label">Nombre del Titular</label>
                      <input
                        type="text"
                        value={checkoutCardInfo.name}
                        onChange={(e) => updateCheckoutCard({ name: e.target.value })}
                        placeholder="Javier Vasquez"
                        className={`checkout-input ${cardErrors.name ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                      />
                    </div>

                    <div>
                      <label className="checkout-label">Fecha de Expiración</label>
                      <input
                        type="text"
                        maxLength={5}
                        value={checkoutCardInfo.expiry}
                        onChange={(e) => updateCheckoutCard({ expiry: formatExpiry(e.target.value) })}
                        placeholder="MM/YY"
                        className={`checkout-input ${cardErrors.expiry ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                      />
                    </div>

                    <div>
                      <label className="checkout-label">CVV</label>
                      <input
                        type="text"
                        maxLength={3}
                        value={checkoutCardInfo.cvv}
                        onChange={(e) => updateCheckoutCard({ cvv: e.target.value.replace(/[^0-9]/g, '') })}
                        placeholder="123"
                        className={`checkout-input ${cardErrors.cvv ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500' : ''}`}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className={`w-full py-3.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-600/10 ${
                    isProcessing ? 'cursor-wait bg-accent-600/60 text-white/50' : ''
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Procesando pago...</span>
                    </>
                  ) : (
                    <>
                      <Shield size={14} />
                      <span>Confirmar y Pagar S/. {finalTotal.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- SECTION: STICKY ORDER SUMMARY PANEL --- */}
        <div className="lg:col-span-5">
          <div className="glass border border-white/5 p-6 rounded-3xl sticky top-28 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest pb-3 border-b border-zinc-900">
              Resumen de Compra
            </h3>

            <div className="space-y-4 max-h-56 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 items-center text-xs">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-zinc-300 truncate">{item.product.name}</h4>
                    <p className="text-zinc-550 mt-0.5">Talla: {item.selectedSize} | Color: {item.selectedColor.name}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white">S/. {item.product.price * item.quantity}</div>
                    <div className="text-[10px] text-zinc-500 font-medium">Cant: {item.quantity}</div>
                  </div>
                </div>
              ))}
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
                  className="px-3 py-2 bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-xs font-bold text-zinc-300 hover:text-white rounded-xl transition-all"
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
                    className="absolute left-0 right-0 -bottom-5 text-[10px] text-emerald-450 font-bold flex items-center gap-1"
                  >
                    <CheckCircle2 size={10} /> Cupón aplicado
                  </motion.div>
                )}
                {couponStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 right-0 -bottom-5 text-[10px] text-rose-500 font-bold"
                  >
                    Código inválido
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <div className="space-y-2 pt-4 border-t border-zinc-900 text-xs">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal</span>
                <span className="text-zinc-300 font-semibold">S/. {cartSubtotal.toFixed(2)}</span>
              </div>

              {discountRate > 0 && (
                <div className="flex justify-between text-zinc-500 items-center">
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <Ticket size={12} /> Descuento ({couponCode})
                  </span>
                  <span className="text-emerald-500 font-bold">-S/. {discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-zinc-500">
                <span>Costo de Envío</span>
                <span className="text-zinc-300 font-semibold">
                  {isFreeShipping ? (
                    <span className="text-emerald-500 font-bold">Gratis</span>
                  ) : checkoutStep === 1 ? (
                    'Calculado en paso 2'
                  ) : (
                    `S/. ${shippingCost.toFixed(2)}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-zinc-500">
                <span>Impuestos (18% IGV)</span>
                <span className="text-zinc-300 font-semibold">S/. {tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm font-bold pt-3 border-t border-zinc-900 text-white">
                <span>Total Final</span>
                <span className="text-accent-400">S/. {finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
