import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import type { User, Product, Coupon } from '../../types/store';
import { UserCheck, Package, ShoppingCart, DollarSign, Edit3, Check, Truck, Trash2, Plus, Percent, Clock } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    user,
    updateUser,
    orders,
    activeView,
    updateProductStock,
    updateProductPrice,
    addNewProduct,
    deleteProduct,
    coupons,
    addCoupon,
    deleteCoupon,
    toggleCoupon,
    updateOrderStatus
  } = useStore();

  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState<User>({ ...user });

  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editPriceInput, setEditPriceInput] = useState<number>(0);
  const [editStockInputs, setEditStockInputs] = useState<{ [variantKey: string]: number }>({});

  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponRate, setNewCouponRate] = useState(10);

  const [newProdName, setNewProdName] = useState('');
  const [newProdCategory, setNewProdCategory] = useState('Audio');
  const [newProdPrice, setNewProdPrice] = useState(99);
  const [newProdStock, setNewProdStock] = useState(20);
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImg, setNewProdImg] = useState('https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80');

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(profileForm);
    setEditingProfile(false);
  };

  const handleStartEditProduct = (prodId: string) => {
    const prod = products.find((p) => p.id === prodId);
    if (prod) {
      setEditingProductId(prodId);
      setEditPriceInput(prod.price);
      setEditStockInputs({ ...prod.stock });
    }
  };

  const handleSaveProductEdits = (prodId: string) => {
    updateProductPrice(prodId, editPriceInput);
    Object.entries(editStockInputs).forEach(([key, qty]) => {
      updateProductStock(prodId, key, qty);
    });
    setEditingProductId(null);
  };

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouponCode.trim()) return;
    const newCp: Coupon = {
      code: newCouponCode.trim().toUpperCase(),
      discountRate: parseFloat((newCouponRate / 100).toFixed(2)),
      active: true
    };
    addCoupon(newCp);
    setNewCouponCode('');
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;

    const newPr: Product = {
      id: `prod-${Math.floor(100 + Math.random() * 900)}`,
      name: newProdName,
      description: newProdDesc || 'Descripción del nuevo artículo de catálogo.',
      price: newProdPrice,
      rating: 5.0,
      reviewCount: 0,
      images: [newProdImg],
      category: newProdCategory,
      tags: ['Nuevo'],
      colors: [{ name: 'Estándar', hex: '#8b5cf6' }],
      sizes: ['Estándar'],
      stock: { 'Estándar-Estándar': newProdStock },
      details: ['Garantía de fabricante de 2 años', 'Empaque reciclable'],
      reviews: []
    };

    addNewProduct(newPr);
    setNewProdName('');
    setNewProdDesc('');
    setNewProdPrice(99);
    setNewProdStock(20);
  };

  const salesTotal = orders.reduce((acc, o) => acc + o.total, 0);

  if (activeView === 'profile') {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-10">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">Mi Cuenta</h2>
          <p className="text-xs text-zinc-500 font-medium mt-1">Gestiona tu información y revisa tus pedidos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 glass border border-white/5 p-6 rounded-3xl h-fit space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400">
                <UserCheck size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{user.fullName}</h3>
                <p className="text-[10px] text-zinc-500 font-medium font-mono">{user.email}</p>
              </div>
            </div>

            {editingProfile ? (
              <form onSubmit={handleProfileSave} className="space-y-3 pt-2">
                <div>
                  <label className="checkout-label">Nombre</label>
                  <input
                    type="text"
                    value={profileForm.fullName}
                    onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                    className="checkout-input py-1.5 px-3"
                  />
                </div>
                <div>
                  <label className="checkout-label">Teléfono</label>
                  <input
                    type="text"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="checkout-input py-1.5 px-3"
                  />
                </div>
                <div>
                  <label className="checkout-label">Dirección</label>
                  <input
                    type="text"
                    value={profileForm.address}
                    onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                    className="checkout-input py-1.5 px-3"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingProfile(false)}
                    className="px-3 py-2 bg-zinc-900 border border-zinc-850 hover:bg-zinc-850 text-xs font-bold text-zinc-400 rounded-xl"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-3 pt-2 text-xs">
                <div className="border-t border-zinc-900 pt-3">
                  <span className="text-zinc-500 font-bold block uppercase tracking-wider mb-0.5">Teléfono</span>
                  <span className="text-zinc-300 font-semibold">{user.phone}</span>
                </div>
                <div className="border-t border-zinc-900 pt-3">
                  <span className="text-zinc-500 font-bold block uppercase tracking-wider mb-0.5">Dirección</span>
                  <span className="text-zinc-300 font-semibold">{user.address}, {user.city}</span>
                </div>
                <button
                  onClick={() => {
                    setProfileForm({ ...user });
                    setEditingProfile(true);
                  }}
                  className="w-full mt-2 py-2 bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 text-xs font-bold text-zinc-300 hover:text-white rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <Edit3 size={12} /> Editar Perfil
                </button>
              </div>
            )}
          </div>

          <div className="md:col-span-2 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Historial de Pedidos</h3>
            {orders.length === 0 ? (
              <div className="border border-zinc-900 bg-zinc-950/20 rounded-3xl p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-650 mx-auto mb-4">
                  <Package size={18} />
                </div>
                <h4 className="text-sm font-bold text-zinc-300 mb-1">Aún no has realizado pedidos</h4>
                <p className="text-xs text-zinc-550 max-w-[250px] mx-auto leading-relaxed">
                  Realiza tu primera compra en la tienda para ver tus registros de facturación aquí.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-zinc-900 bg-zinc-950/20 rounded-3xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pb-3 border-b border-zinc-900">
                      <div>
                        <div className="font-mono text-xs font-bold text-zinc-400">
                          Orden: <span className="text-accent-400">{order.id}</span>
                        </div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">{order.date}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-400 font-semibold text-[10px] uppercase tracking-wide">
                          {order.status}
                        </span>
                        <span className="text-xs font-extrabold text-white">${order.total} USD</span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center text-xs">
                          <span className="text-zinc-400 font-semibold truncate pr-4 max-w-sm">
                            {item.product.name} ({item.selectedSize} / {item.selectedColor.name})
                          </span>
                          <span className="text-zinc-500 font-mono">
                            Cant: {item.quantity} x ${item.product.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <Truck size={12} /> Envío: {order.shippingMethod === 'express' ? 'Express' : 'Estándar'}
                      </div>
                      <div className="text-zinc-500">
                        Dirección: {order.shippingAddress.address}, {order.shippingAddress.city}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">Consola de Control del Negocio</h2>
        <p className="text-xs text-zinc-500 font-medium mt-1">Monitorea ingresos, ventas, cupones y catálogo disponible.</p>
      </div>

      {/* --- SECTION: ADMIN STATS CARDS --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass border border-white/5 p-5 rounded-2xl flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Ventas Totales</span>
            <h3 className="text-2xl font-extrabold text-white">${salesTotal.toFixed(2)}</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
            <DollarSign size={18} />
          </div>
        </div>

        <div className="glass border border-white/5 p-5 rounded-2xl flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Órdenes Procesadas</span>
            <h3 className="text-2xl font-extrabold text-white">{orders.length}</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400">
            <ShoppingCart size={18} />
          </div>
        </div>

        <div className="glass border border-white/5 p-5 rounded-2xl flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Catálogo</span>
            <h3 className="text-2xl font-extrabold text-white">{products.length} Productos</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Package size={18} />
          </div>
        </div>

        <div className="glass border border-white/5 p-5 rounded-2xl flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Cupones de Descuento</span>
            <h3 className="text-2xl font-extrabold text-white">{coupons.length} Códigos</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Percent size={18} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- SECTION: ANALYTICS SVG CHARTS --- */}
        <div className="lg:col-span-5 glass border border-white/5 p-6 rounded-3xl space-y-6 flex flex-col justify-between h-fit">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Métricas de Ventas</h3>
            <p className="text-xs text-zinc-550 mt-1">Gráfica acumulada de ingresos ficticios</p>
          </div>

          <div className="h-40 w-full flex items-end justify-between gap-1 pt-6 pb-2 px-1 relative">
            <div className="absolute left-0 top-0 text-[9px] text-zinc-650 font-bold uppercase">Ingresos ($)</div>
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120">
              <defs>
                <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 100 Q 50 80 100 85 T 200 40 T 300 20"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 0 100 Q 50 80 100 85 T 200 40 T 300 20 L 300 120 L 0 120 Z"
                fill="url(#gradient-chart)"
              />
              <circle cx="100" cy="85" r="4.5" fill="#8b5cf6" stroke="#09090b" strokeWidth="1.5" />
              <circle cx="200" cy="40" r="4.5" fill="#8b5cf6" stroke="#09090b" strokeWidth="1.5" />
              <circle cx="300" cy="20" r="4.5" fill="#8b5cf6" stroke="#09090b" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="flex justify-between text-[9px] text-zinc-550 font-bold uppercase tracking-wider">
            <span>May</span>
            <span>Jun</span>
            <span>Jul (Hoy)</span>
          </div>

          <div className="border-t border-zinc-900 pt-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Proporción por Categorías</h4>
            <div className="flex items-center gap-8">
              <svg className="w-24 h-24 overflow-visible" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.91" fill="none" stroke="#27272a" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.91" fill="none" stroke="#8b5cf6" strokeWidth="3.5" strokeDasharray="60 100" strokeDashoffset="25" />
                <circle cx="18" cy="18" r="15.91" fill="none" stroke="#3b82f6" strokeWidth="3.5" strokeDasharray="25 100" strokeDashoffset="85" />
                <circle cx="18" cy="18" r="15.91" fill="none" stroke="#eab308" strokeWidth="3.5" strokeDasharray="15 100" strokeDashoffset="110" />
              </svg>
              <div className="space-y-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-accent-500" /> Audio (60%)</div>
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Moda (25%)</div>
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-yellow-550" /> Accesorios (15%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION: INVENTORY EDITOR --- */}
        <div className="lg:col-span-7 glass border border-white/5 p-6 rounded-3xl space-y-6">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Inventario de Productos</h3>
            <p className="text-xs text-zinc-550 mt-1">Edita precios y stock de variantes, o elimina productos.</p>
          </div>

          <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
            {products.map((product) => {
              const isEditing = editingProductId === product.id;
              return (
                <div key={product.id} className="p-4 border border-zinc-900 bg-zinc-950/20 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={product.images[0]} alt={product.name} className="w-10 h-10 object-cover rounded-lg bg-zinc-900 flex-shrink-0" />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-zinc-200 truncate max-w-[150px]">{product.name}</h4>
                      <p className="text-[10px] text-zinc-550 mt-0.5">Cat: {product.category} | SKU: {product.id}</p>
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="flex-1 flex flex-col gap-3 max-w-sm" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-2">
                        <label className="text-[10px] text-zinc-500 font-bold uppercase w-12">Precio:</label>
                        <input
                          type="number"
                          value={editPriceInput}
                          onChange={(e) => setEditPriceInput(Math.max(1, parseFloat(e.target.value)))}
                          className="checkout-input py-1 px-2.5 text-xs w-24"
                        />
                        <span className="text-[10px] text-zinc-500 font-bold">USD</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="text-[10px] text-zinc-500 font-bold uppercase">Stock:</div>
                        {Object.entries(editStockInputs).map(([key, qty]) => (
                          <div key={key} className="flex items-center gap-2">
                            <span className="text-[10px] text-zinc-400 font-mono w-28 truncate">{key}:</span>
                            <input
                              type="number"
                              value={qty}
                              onChange={(e) => setEditStockInputs({ ...editStockInputs, [key]: Math.max(0, parseInt(e.target.value)) })}
                              className="checkout-input py-0.5 px-2 text-[11px] w-20"
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => handleSaveProductEdits(product.id)}
                        className="py-1.5 bg-emerald-600 hover:bg-emerald-500 text-[10px] font-bold text-white rounded-lg flex items-center justify-center gap-1 transition-colors"
                      >
                        <Check size={12} /> Guardar Cambios
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <div className="text-right">
                        <div className="text-xs font-extrabold text-white">${product.price} USD</div>
                        <div className="text-[9px] text-zinc-500 font-bold uppercase mt-1">
                          Stock: {Object.values(product.stock).reduce((a, b) => a + b, 0)} uds
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStartEditProduct(product.id)}
                          className="p-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 rounded-xl text-zinc-450 hover:text-white transition-colors"
                          title="Editar"
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="p-2 border border-zinc-905 hover:border-rose-950 bg-zinc-900/45 hover:bg-rose-950/20 rounded-xl text-zinc-500 hover:text-rose-500 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- SECTION: PRODUCT CREATOR FORM --- */}
        <div className="lg:col-span-6 glass border border-white/5 p-6 rounded-3xl space-y-6">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Plus size={16} className="text-accent-500" /> Añadir Nuevo Producto
            </h3>
            <p className="text-xs text-zinc-550 mt-1">Inserta un nuevo artículo directamente al catálogo general.</p>
          </div>

          <form onSubmit={handleCreateProduct} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="checkout-label">Nombre del Producto</label>
                <input
                  type="text"
                  required
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  placeholder="ej: Altavoz Inteligente SoundCore"
                  className="checkout-input"
                />
              </div>

              <div>
                <label className="checkout-label">Categoría</label>
                <select
                  value={newProdCategory}
                  onChange={(e) => setNewProdCategory(e.target.value)}
                  className="checkout-input"
                >
                  <option value="Audio">Audio</option>
                  <option value="Moda">Moda</option>
                  <option value="Accesorios">Accesorios</option>
                </select>
              </div>

              <div>
                <label className="checkout-label">Precio (USD)</label>
                <input
                  type="number"
                  required
                  value={newProdPrice}
                  onChange={(e) => setNewProdPrice(Math.max(1, parseFloat(e.target.value)))}
                  className="checkout-input"
                />
              </div>

              <div>
                <label className="checkout-label">Stock Inicial</label>
                <input
                  type="number"
                  required
                  value={newProdStock}
                  onChange={(e) => setNewProdStock(Math.max(0, parseInt(e.target.value)))}
                  className="checkout-input"
                />
              </div>

              <div>
                <label className="checkout-label">Imagen (URL)</label>
                <input
                  type="text"
                  required
                  value={newProdImg}
                  onChange={(e) => setNewProdImg(e.target.value)}
                  className="checkout-input text-xs"
                />
              </div>
            </div>

            <div>
              <label className="checkout-label">Descripción</label>
              <textarea
                rows={3}
                value={newProdDesc}
                onChange={(e) => setNewProdDesc(e.target.value)}
                placeholder="Detalles sobre transductores, materiales..."
                className="checkout-input resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-accent-600/10"
            >
              <Plus size={14} /> Añadir Producto
            </button>
          </form>
        </div>

        {/* --- SECTION: COUPONS MANAGER --- */}
        <div className="lg:col-span-6 glass border border-white/5 p-6 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Percent size={16} className="text-accent-500" /> Cupones de Descuento
              </h3>
              <p className="text-xs text-zinc-550 mt-1">Administra códigos dinámicos y sus porcentajes de deducción.</p>
            </div>

            <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
              {coupons.map((cp) => (
                <div key={cp.code} className="p-3 border border-zinc-900 bg-zinc-950/20 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono font-bold text-accent-400 bg-accent-500/10 px-2 py-0.5 rounded border border-accent-500/20">
                      {cp.code}
                    </span>
                    <span className="text-zinc-400 font-semibold ml-3">{Math.round(cp.discountRate * 100)}% de descuento</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cp.active}
                        onChange={() => toggleCoupon(cp.code)}
                        className="sr-only"
                      />
                      <div className={`w-8 h-4.5 rounded-full transition-colors ${cp.active ? 'bg-accent-650' : 'bg-zinc-800'}`}>
                        <div className={`bg-white w-3.5 h-3.5 rounded-full mt-0.5 ml-0.5 transition-transform ${cp.active ? 'translate-x-3.5' : 'translate-x-0'}`} />
                      </div>
                    </label>

                    <button
                      onClick={() => deleteCoupon(cp.code)}
                      className="text-zinc-600 hover:text-rose-500 p-0.5 transition-colors"
                      title="Borrar Cupón"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleCreateCoupon} className="pt-4 border-t border-zinc-900 flex gap-3 items-end">
            <div className="flex-1">
              <label className="checkout-label">Código</label>
              <input
                type="text"
                placeholder="ej: VERANO50"
                value={newCouponCode}
                onChange={(e) => setNewCouponCode(e.target.value)}
                className="checkout-input py-2 px-3 text-xs uppercase"
              />
            </div>
            <div className="w-24">
              <label className="checkout-label">Descuento %</label>
              <input
                type="number"
                min="0"
                max="100"
                value={newCouponRate}
                onChange={(e) => setNewCouponRate(Math.max(0, Math.min(100, parseInt(e.target.value))))}
                className="checkout-input py-2 px-3 text-xs"
              />
            </div>
            <button
              type="submit"
              className="py-2.5 px-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-bold text-zinc-300 hover:text-white rounded-xl flex items-center justify-center gap-1 transition-all h-10"
            >
              <Plus size={14} /> Crear
            </button>
          </form>
        </div>
      </div>

      {/* --- SECTION: CLIENT ORDERS LOG AND STATUS UPDATES --- */}
      <div className="glass border border-white/5 p-6 rounded-3xl space-y-6">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <ShoppingCart size={16} className="text-accent-500" /> Registro de Pedidos Clientes
          </h3>
          <p className="text-xs text-zinc-550 mt-1">Consulta los datos de entrega y actualiza el estado logístico del envío.</p>
        </div>

        {orders.length === 0 ? (
          <p className="text-xs text-zinc-550 italic py-4">No se han registrado transacciones en esta sesión todavía.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-900 text-zinc-500 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Pedido ID</th>
                  <th className="py-3 px-4">Cliente</th>
                  <th className="py-3 px-4">Fecha</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Estado Logístico</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-zinc-950/20 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-accent-400">{order.id}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-zinc-200">{order.shippingAddress.fullName}</div>
                      <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{order.shippingAddress.email}</div>
                    </td>
                    <td className="py-3.5 px-4 text-zinc-450 flex items-center gap-1 mt-1"><Clock size={12} /> {order.date}</td>
                    <td className="py-3.5 px-4 font-bold text-white">${order.total} USD</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full font-semibold text-[9px] uppercase tracking-wide ${
                        order.status === 'delivered' ? 'bg-emerald-500/10 text-emerald-400' :
                        order.status === 'shipped' ? 'bg-blue-500/10 text-blue-400' :
                        'bg-amber-500/10 text-amber-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex justify-end gap-1.5">
                        <button
                          onClick={() => updateOrderStatus(order.id, 'processing')}
                          disabled={order.status === 'processing'}
                          className="px-2 py-1 bg-zinc-900 hover:bg-zinc-800 text-[10px] font-bold text-zinc-400 hover:text-white rounded border border-zinc-850 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Preparar
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order.id, 'shipped')}
                          disabled={order.status === 'shipped'}
                          className="px-2 py-1 bg-zinc-900 hover:bg-zinc-800 text-[10px] font-bold text-zinc-400 hover:text-white rounded border border-zinc-850 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Enviar
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order.id, 'delivered')}
                          disabled={order.status === 'delivered'}
                          className="px-2 py-1 bg-zinc-900 hover:bg-zinc-800 text-[10px] font-bold text-zinc-400 hover:text-white rounded border border-zinc-850 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Entregar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminDashboard;
