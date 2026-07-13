import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import type { User, Product, Coupon, Order, Article, Collection } from '../../types/store';
import { 
  UserCheck, Package, ShoppingCart, DollarSign, Edit3, 
  Truck, Trash2, Plus, Percent, Clock, Users, BarChart3, 
  AlertCircle, FileText, Printer, X, BookOpen, Tag, Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type DashboardTab = 'metrics' | 'catalog' | 'orders' | 'users' | 'coupons' | 'blog';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    user,
    updateUser,
    orders,
    activeView,
    addNewProduct,
    deleteProduct,
    coupons,
    addCoupon,
    deleteCoupon,
    toggleCoupon,
    updateOrderStatus,
    logout,
    allUsers,
    fetchAllUsers,
    updateUserRole,
    updateProductDetails,

    // CMS Store variables & methods
    articles,
    collections,
    dealSettings,
    fetchArticles,
    addArticle,
    deleteArticle,
    updateArticle,
    fetchCollections,
    addCollection,
    deleteCollection,
    updateCollection,
    fetchDealSettings,
    updateDealSettings
  } = useStore();

  const [activeTab, setActiveTab] = useState<DashboardTab>('metrics');

  // --- STATE FOR MODALS & EDITING ---
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState<User>({ ...user });

  const [selectedOrderForInvoice, setSelectedOrderForInvoice] = useState<Order | null>(null);
  const [selectedProductForEdit, setSelectedProductForEdit] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  // CMS Edit modals
  const [selectedArticleForEdit, setSelectedArticleForEdit] = useState<Article | null>(null);
  const [selectedCollectionForEdit, setSelectedCollectionForEdit] = useState<Collection | null>(null);

  // --- LOCAL FORM STATES ---
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponRate, setNewCouponRate] = useState(10);

  // Deal of the Day Settings Local Form State
  const [dealProdId, setDealProdId] = useState(dealSettings?.productId || 'prod-001');
  const [dealDiscount, setDealDiscount] = useState(Math.round((dealSettings?.discountRate || 0.20) * 100));

  // Sync Deal Settings form state when loaded from store
  useEffect(() => {
    if (dealSettings) {
      setDealProdId(dealSettings.productId);
      setDealDiscount(Math.round(dealSettings.discountRate * 100));
    }
  }, [dealSettings]);

  // New Product Form States
  const [newProdName, setNewProdName] = useState('');
  const [newProdCategory, setNewProdCategory] = useState('Audio');
  const [newProdPrice, setNewProdPrice] = useState(99);
  const [newProdStock, setNewProdStock] = useState(20);
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImg, setNewProdImg] = useState('https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80');

  // Edit Product Form States
  const [editProdName, setEditProdName] = useState('');
  const [editProdCategory, setEditProdCategory] = useState('');
  const [editProdPrice, setEditProdPrice] = useState(0);
  const [editProdDesc, setEditProdDesc] = useState('');
  const [editProdImg, setEditProdImg] = useState('');
  const [editProdStock, setEditProdStock] = useState<{ [key: string]: number }>({});

  // New Collection Form States
  const [newColName, setNewColName] = useState('');
  const [newColDesc, setNewColDesc] = useState('');
  const [newColImg, setNewColImg] = useState('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80');

  // Edit Collection Form States
  const [editColName, setEditColName] = useState('');
  const [editColDesc, setEditColDesc] = useState('');
  const [editColImg, setEditColImg] = useState('');

  // New Article Form States
  const [newArtTitle, setNewArtTitle] = useState('');
  const [newArtExcerpt, setNewArtExcerpt] = useState('');
  const [newArtContent, setNewArtContent] = useState('');
  const [newArtImg, setNewArtImg] = useState('https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80');
  const [newArtReadTime, setNewArtReadTime] = useState('3 min');

  // Edit Article Form States
  const [editArtTitle, setEditArtTitle] = useState('');
  const [editArtExcerpt, setEditArtExcerpt] = useState('');
  const [editArtContent, setEditArtContent] = useState('');
  const [editArtImg, setEditArtImg] = useState('');
  const [editArtReadTime, setEditArtReadTime] = useState('');

  // --- FETCH DATA ON MOUNT ---
  useEffect(() => {
    fetchAllUsers();
    fetchArticles();
    fetchCollections();
    fetchDealSettings();
  }, [fetchAllUsers, fetchArticles, fetchCollections, fetchDealSettings]);

  // --- UTILS & CALCULATIONS ---
  const salesTotal = orders.reduce((acc, o) => acc + o.total, 0);
  
  const lowStockProducts = products.filter((p) => 
    Object.values(p.stock).some((qty) => qty <= 5)
  );

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(profileForm);
    setEditingProfile(false);
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

  // --- DEAL OF THE DAY UPDATE ---
  const handleSaveDealSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateDealSettings(dealProdId, parseFloat((dealDiscount / 100).toFixed(2)));
  };

  // --- CATALOG CRUD ACTIONS ---
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
    setIsAddingProduct(false);
    setNewProdName('');
    setNewProdDesc('');
    setNewProdPrice(99);
    setNewProdStock(20);
  };

  const handleStartEditProduct = (prod: Product) => {
    setSelectedProductForEdit(prod);
    setEditProdName(prod.name);
    setEditProdCategory(prod.category);
    setEditProdPrice(prod.price);
    setEditProdDesc(prod.description);
    setEditProdImg(prod.images[0]);
    setEditProdStock({ ...prod.stock });
  };

  const handleSaveProductEdits = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProductForEdit) return;

    updateProductDetails(selectedProductForEdit.id, {
      name: editProdName,
      category: editProdCategory,
      price: editProdPrice,
      description: editProdDesc,
      images: [editProdImg],
      stock: editProdStock
    });

    setSelectedProductForEdit(null);
  };

  // --- COLLECTIONS CRUD ACTIONS ---
  const handleCreateCollection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newColName.trim()) return;

    const newCol: Collection = {
      id: `col-${Math.floor(100 + Math.random() * 900)}`,
      name: newColName.trim(),
      description: newColDesc || 'Nueva colección curada.',
      imageUrl: newColImg
    };

    addCollection(newCol);
    setNewColName('');
    setNewColDesc('');
  };

  const handleStartEditCollection = (col: Collection) => {
    setSelectedCollectionForEdit(col);
    setEditColName(col.name);
    setEditColDesc(col.description);
    setEditColImg(col.imageUrl);
  };

  const handleSaveCollectionEdits = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCollectionForEdit) return;

    updateCollection(selectedCollectionForEdit.id, {
      name: editColName,
      description: editColDesc,
      imageUrl: editColImg
    });

    setSelectedCollectionForEdit(null);
  };

  // --- BLOG CRUD ACTIONS ---
  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArtTitle.trim()) return;

    const newArt: Article = {
      id: `art-${Math.floor(100 + Math.random() * 900)}`,
      title: newArtTitle,
      excerpt: newArtExcerpt,
      content: newArtContent,
      image: newArtImg,
      date: new Date().toISOString().split('T')[0],
      readTime: newArtReadTime
    };

    addArticle(newArt);
    setNewArtTitle('');
    setNewArtExcerpt('');
    setNewArtContent('');
  };

  const handleStartEditArticle = (art: Article) => {
    setSelectedArticleForEdit(art);
    setEditArtTitle(art.title);
    setEditArtExcerpt(art.excerpt || '');
    setEditArtContent(art.content);
    setEditArtImg(art.image || '');
    setEditArtReadTime(art.readTime);
  };

  const handleSaveArticleEdits = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedArticleForEdit) return;

    updateArticle(selectedArticleForEdit.id, {
      title: editArtTitle,
      excerpt: editArtExcerpt,
      content: editArtContent,
      image: editArtImg,
      readTime: editArtReadTime
    });

    setSelectedArticleForEdit(null);
  };

  const handlePrint = () => {
    window.print();
  };

  // Render "Mi Perfil" when viewing profile tab (for backward compatibility)
  if (activeView === 'profile') {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-10">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">Mi Cuenta</h2>
          <p className="text-xs text-zinc-550 font-medium mt-1">Gestiona tu información y revisa tus pedidos.</p>
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
                  <span className="text-zinc-300 font-semibold">{user.phone || 'No registrado'}</span>
                </div>
                <div className="border-t border-zinc-900 pt-3">
                  <span className="text-zinc-500 font-bold block uppercase tracking-wider mb-0.5">Dirección</span>
                  <span className="text-zinc-300 font-semibold">{user.address || 'Sin dirección'}, {user.city || ''}</span>
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
                <button
                  onClick={logout}
                  className="w-full mt-2 py-2 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-xs font-bold text-red-400 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  Cerrar Sesión
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
                        <span className={`px-2.5 py-0.5 rounded-full font-semibold text-[10px] uppercase tracking-wide ${
                          order.status === 'delivered' ? 'bg-emerald-500/10 text-emerald-400' :
                          order.status === 'shipped' ? 'bg-blue-500/10 text-blue-400' :
                          'bg-amber-500/10 text-amber-400'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center text-xs">
                          <span className="text-zinc-400 font-medium">
                            {item.product.name} <span className="text-zinc-600 font-bold">x{item.quantity}</span>
                          </span>
                          <span className="text-zinc-200 font-semibold font-mono">
                            S/. {item.product.price * item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-1.5 text-zinc-550">
                        <Truck size={12} /> Envío: {order.shippingMethod === 'express' ? 'Express' : 'Estándar'}
                      </div>
                      <div className="text-zinc-550">
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

  // --- MAIN ADMIN PANEL ---
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-10 relative">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-900">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
            <UserCheck className="text-accent-500" size={24} /> Consola de Control de Negocio
          </h2>
          <p className="text-xs text-zinc-500 font-medium mt-1">Supervisa estadísticas, catálogo, pedidos y accesos.</p>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-xs font-bold text-red-400 rounded-xl transition-all self-start sm:self-center"
        >
          Cerrar Sesión
        </button>
      </div>

      {/* CRITICAL LOW STOCK WARNING BANNER */}
      {lowStockProducts.length > 0 && (
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-3.5 text-amber-400 shadow-xl shadow-amber-500/5">
          <AlertCircle size={20} className="shrink-0 animate-pulse" />
          <div className="text-xs font-medium">
            <span className="font-bold">Alerta de Inventario:</span> Hay <span className="underline font-bold">{lowStockProducts.length} producto(s)</span> con stock crítico (5 unidades o menos). Por favor revisa y reabastece las unidades.
          </div>
        </div>
      )}

      {/* TAB NAVIGATION BUTTONS */}
      <div className="flex overflow-x-auto gap-2 pb-1 border-b border-zinc-900 select-none no-scrollbar">
        {[
          { id: 'metrics', label: 'Métricas', icon: BarChart3 },
          { id: 'catalog', label: 'Catálogo', icon: Package },
          { id: 'orders', label: 'Pedidos', icon: ShoppingCart },
          { id: 'users', label: 'Usuarios', icon: Users },
          { id: 'coupons', label: 'Cupones', icon: Percent },
          { id: 'blog', label: 'Blog CMS', icon: BookOpen }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as DashboardTab)}
              className={`flex items-center gap-2 px-4.5 py-3 text-xs font-bold rounded-t-xl transition-all ${
                isActive
                  ? 'bg-zinc-900 border-t border-l border-r border-zinc-800 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* --- CONTENT TABS --- */}
      <div className="pt-2">

        {/* METRICS TAB */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            {/* STATS ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Ventas Totales', value: `S/. ${salesTotal.toFixed(2)}`, icon: DollarSign, colorClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' },
                { label: 'Órdenes Procesadas', value: orders.length.toString(), icon: ShoppingCart, colorClass: 'bg-accent-500/10 border-accent-500/30 text-accent-400' },
                { label: 'Productos Registrados', value: `${products.length} Artículos`, icon: Package, colorClass: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
                { label: 'Cupones Creados', value: `${coupons.length} Códigos`, icon: Percent, colorClass: 'bg-purple-500/10 border-purple-500/30 text-purple-400' }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="glass border border-white/5 p-5 rounded-2xl flex items-center justify-between">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                      <h3 className="text-2xl font-extrabold text-white">{stat.value}</h3>
                    </div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${stat.colorClass}`}>
                      <Icon size={18} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CHART ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 glass border border-white/5 p-6 rounded-3xl space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Evolución de Ingresos</h3>
                  <p className="text-xs text-zinc-550 mt-1">Gráfica acumulada de facturación total en la plataforma.</p>
                </div>
                <div className="h-44 w-full flex items-end justify-between gap-1 pt-6 pb-2 px-1 relative">
                  <div className="absolute left-0 top-0 text-[9px] text-zinc-650 font-bold uppercase">Ingresos Acumulados (S/.)</div>
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120">
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 100 Q 50 85 100 90 T 200 50 T 300 15"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0 100 Q 50 85 100 90 T 200 50 T 300 15 L 300 120 L 0 120 Z"
                      fill="url(#grad)"
                    />
                    <circle cx="100" cy="90" r="4.5" fill="#8b5cf6" stroke="#030303" strokeWidth="1.5" />
                    <circle cx="200" cy="50" r="4.5" fill="#8b5cf6" stroke="#030303" strokeWidth="1.5" />
                    <circle cx="300" cy="15" r="4.5" fill="#8b5cf6" stroke="#030303" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] text-zinc-550 font-bold uppercase tracking-wider border-t border-zinc-900 pt-3">
                  <span>Mayo (Simulación)</span>
                  <span>Junio (Sincronizado)</span>
                  <span>Julio (Actual)</span>
                </div>
              </div>

              {/* CATEGORY DONUT */}
              <div className="lg:col-span-5 glass border border-white/5 p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Ventas por Categoría</h3>
                  <p className="text-xs text-zinc-550 mt-1">Participación del catálogo en las preferencias de los usuarios.</p>
                </div>
                <div className="flex items-center justify-around gap-4 py-4">
                  <svg className="w-24 h-24 overflow-visible shrink-0" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#27272a" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#8b5cf6" strokeWidth="3.5" strokeDasharray="60 100" strokeDashoffset="25" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="3.5" strokeDasharray="25 100" strokeDashoffset="85" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#eab308" strokeWidth="3.5" strokeDasharray="15 100" strokeDashoffset="110" />
                  </svg>
                  <div className="space-y-2.5 text-[10px] font-bold text-zinc-450 uppercase tracking-wider">
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-accent-500" /> Audio (60%)</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Moda (25%)</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-yellow-500" /> Accesorios (15%)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CMS - DEAL OF THE DAY CONFIGURATION */}
            <div className="glass border border-white/5 p-6 rounded-3xl space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Settings size={16} className="text-accent-500" /> Ajustes: Oferta del Día en Portada
                </h3>
                <p className="text-xs text-zinc-550 mt-1">Configura cuál producto se muestra en la sección destacada de ofertas y su descuento.</p>
              </div>

              <form onSubmit={handleSaveDealSettings} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div>
                  <label className="checkout-label">Producto en Oferta</label>
                  <select
                    value={dealProdId}
                    onChange={(e) => setDealProdId(e.target.value)}
                    className="checkout-input py-2.5"
                  >
                    {products.map(p => (
                      <option key={p.id} value={p.id}>{p.name} (SKU: {p.id})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="checkout-label">Tasa de Descuento (%)</label>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={dealDiscount}
                    onChange={(e) => setDealDiscount(Math.max(1, Math.min(99, parseInt(e.target.value))))}
                    className="checkout-input py-2.5"
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all shadow-lg shadow-accent-600/10 h-11"
                >
                  Guardar Configuración de Oferta
                </button>
              </form>
            </div>
          </div>
        )}

        {/* CATALOG TAB */}
        {activeTab === 'catalog' && (
          <div className="space-y-12">
            
            {/* Products catalog list */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Catálogo de Productos</h3>
                  <p className="text-xs text-zinc-550 mt-1">Gestiona descripciones, variantes, precios y el inventario disponible.</p>
                </div>
                <button
                  onClick={() => setIsAddingProduct(true)}
                  className="py-2.5 px-4 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl flex items-center gap-1.5 transition-all shadow-lg shadow-accent-600/15"
                >
                  <Plus size={14} /> Nuevo Producto
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product) => {
                  const totalStock = Object.values(product.stock).reduce((a, b) => a + b, 0);
                  const isCriticallyLow = Object.values(product.stock).some(qty => qty <= 5);

                  return (
                    <div key={product.id} className="p-4.5 border border-zinc-900 bg-zinc-950/25 rounded-2xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded-xl bg-zinc-900 shrink-0" />
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-zinc-200 truncate max-w-[180px]">{product.name}</h4>
                          <p className="text-[10px] text-zinc-500 font-semibold mt-1">
                            Cat: {product.category} | SKU: <span className="font-mono text-zinc-400">{product.id}</span>
                          </p>
                          <div className="mt-1.5 flex gap-2">
                            <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                              isCriticallyLow 
                                ? 'bg-amber-500/10 text-amber-500 border border-amber-500/10' 
                                : 'bg-zinc-800 text-zinc-400'
                            }`}>
                              Stock: {totalStock} uds
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right">
                          <div className="text-xs font-black text-white">S/. {product.price}</div>
                          {product.originalPrice && (
                            <div className="text-[9px] text-zinc-500 line-through mt-0.5">S/. {product.originalPrice}</div>
                          )}
                        </div>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => handleStartEditProduct(product)}
                            className="p-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-900 rounded-xl text-zinc-450 hover:text-white transition-colors"
                            title="Editar Ficha"
                          >
                            <Edit3 size={13} />
                          </button>
                          <button
                            onClick={() => deleteProduct(product.id)}
                            className="p-2 border border-zinc-905 hover:border-rose-950 bg-zinc-900/60 hover:bg-rose-950/20 rounded-xl text-zinc-500 hover:text-rose-500 transition-colors"
                            title="Eliminar"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CMS - COLLECTIONS / CATEGORIES MANAGER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-zinc-900 pt-10">
              
              {/* Left Column: List existing collections */}
              <div className="lg:col-span-7 glass border border-white/5 p-6 rounded-3xl space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <Tag size={16} className="text-accent-500" /> Colecciones Habilitadas (CMS)
                  </h3>
                  <p className="text-xs text-zinc-550 mt-1">Configura portadas, descripciones y categorías para la página de Colecciones.</p>
                </div>

                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                  {collections.map((col) => (
                    <div key={col.id} className="p-3 border border-zinc-900 bg-zinc-950/20 rounded-2xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <img src={col.imageUrl} alt={col.name} className="w-10 h-10 object-cover rounded-lg bg-zinc-900 shrink-0" />
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-zinc-200">{col.name}</h4>
                          <p className="text-[10px] text-zinc-500 truncate max-w-[280px] mt-0.5">{col.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-1.5 shrink-0">
                        <button
                          onClick={() => handleStartEditCollection(col)}
                          className="p-1.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 rounded text-zinc-400 hover:text-white transition-colors"
                          title="Editar"
                        >
                          <Edit3 size={12} />
                        </button>
                        <button
                          onClick={() => deleteCollection(col.id)}
                          className="p-1.5 border border-zinc-800 hover:border-rose-950 bg-zinc-900 hover:bg-rose-950/20 rounded text-zinc-500 hover:text-rose-500 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Create Collection Form */}
              <div className="lg:col-span-5 glass border border-white/5 p-6 rounded-3xl space-y-6 h-fit">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                    <Plus size={16} className="text-accent-500" /> Crear Nueva Colección
                  </h3>
                  <p className="text-xs text-zinc-550 mt-1">Añade una categoría con portada al catálogo.</p>
                </div>

                <form onSubmit={handleCreateCollection} className="space-y-4">
                  <div>
                    <label className="checkout-label">Nombre de Colección / Categoría</label>
                    <input
                      type="text"
                      required
                      placeholder="ej: Wearables"
                      value={newColName}
                      onChange={(e) => setNewColName(e.target.value)}
                      className="checkout-input py-2 px-3"
                    />
                  </div>
                  <div>
                    <label className="checkout-label">Descripción</label>
                    <textarea
                      rows={2}
                      placeholder="ej: Dispositivos inteligentes para seguimiento..."
                      value={newColDesc}
                      onChange={(e) => setNewColDesc(e.target.value)}
                      className="checkout-input py-2 px-3 resize-none text-xs"
                    />
                  </div>
                  <div>
                    <label className="checkout-label">Imagen de Portada (URL)</label>
                    <input
                      type="text"
                      placeholder="URL de la imagen"
                      value={newColImg}
                      onChange={(e) => setNewColImg(e.target.value)}
                      className="checkout-input py-2 px-3 text-xs"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all shadow-lg shadow-accent-600/10"
                  >
                    Crear Colección
                  </button>
                </form>
              </div>

            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">Registro de Pedidos</h3>
              <p className="text-xs text-zinc-550 mt-1">Controla los estados de envío e imprime las boletas de tus ventas.</p>
            </div>

            {orders.length === 0 ? (
              <p className="text-xs text-zinc-550 italic py-6">No se han registrado órdenes en la plataforma todavía.</p>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-zinc-900 bg-zinc-950/10">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-900 bg-zinc-900/30 text-zinc-500 font-bold uppercase tracking-wider">
                      <th className="py-3.5 px-4.5">Pedido ID</th>
                      <th className="py-3.5 px-4.5">Cliente</th>
                      <th className="py-3.5 px-4.5">Fecha</th>
                      <th className="py-3.5 px-4.5">Total</th>
                      <th className="py-3.5 px-4.5">Estado</th>
                      <th className="py-3.5 px-4.5 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-zinc-900/20 transition-colors">
                        <td className="py-4 px-4.5 font-mono font-bold text-accent-400">{order.id}</td>
                        <td className="py-4 px-4.5">
                          <div className="font-bold text-zinc-200">{order.shippingAddress.fullName}</div>
                          <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{order.shippingAddress.email}</div>
                        </td>
                        <td className="py-4 px-4.5 text-zinc-400 font-medium">
                          <div className="flex items-center gap-1.5"><Clock size={12} /> {order.date}</div>
                        </td>
                        <td className="py-4 px-4.5 font-bold text-white">S/. {order.total}</td>
                        <td className="py-4 px-4.5">
                          <span className={`px-2.5 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wide border ${
                            order.status === 'delivered' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/10' :
                            order.status === 'shipped' ? 'bg-blue-500/10 text-blue-400 border-blue-500/10' :
                            'bg-amber-500/10 text-amber-400 border-amber-500/10'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-4.5 text-right">
                          <div className="flex justify-end items-center gap-2">
                            <button
                              onClick={() => setSelectedOrderForInvoice(order)}
                              className="p-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 rounded-xl text-zinc-400 hover:text-white transition-all"
                              title="Ver Factura"
                            >
                              <FileText size={13} />
                            </button>
                            <select
                              value={order.status}
                              onChange={(e) => updateOrderStatus(order.id, e.target.value as any)}
                              className="bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-300 py-1.5 px-2 rounded-xl focus:outline-none focus:border-accent-500"
                            >
                              <option value="processing">Preparar</option>
                              <option value="shipped">Enviar</option>
                              <option value="delivered">Entregar</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* USERS TAB */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">Directorio de Usuarios</h3>
              <p className="text-xs text-zinc-550 mt-1">Revisa las cuentas de clientes y gestiona accesos promocionando administradores.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-zinc-900 bg-zinc-950/10">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-zinc-900 bg-zinc-900/30 text-zinc-500 font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-4.5">Nombre</th>
                    <th className="py-3.5 px-4.5">Correo Electrónico</th>
                    <th className="py-3.5 px-4.5">Ubicación</th>
                    <th className="py-3.5 px-4.5">Rol Actual</th>
                    <th className="py-3.5 px-4.5 text-right">Modificar Rol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {allUsers.map((u) => (
                    <tr key={u.email} className="hover:bg-zinc-900/20 transition-colors">
                      <td className="py-4 px-4.5 font-bold text-zinc-200">{u.fullName}</td>
                      <td className="py-4 px-4.5 font-mono text-zinc-400">{u.email}</td>
                      <td className="py-4 px-4.5 text-zinc-450 font-semibold">{u.city || 'No registrada'}</td>
                      <td className="py-4 px-4.5">
                        <span className={`px-2.5 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wide border ${
                          u.role === 'admin' 
                            ? 'bg-purple-500/10 text-purple-400 border-purple-500/10' 
                            : 'bg-zinc-800 text-zinc-400 border-zinc-700/10'
                        }`}>
                          {u.role || 'customer'}
                        </span>
                      </td>
                      <td className="py-4 px-4.5 text-right">
                        <button
                          onClick={() => updateUserRole(u.email, u.role === 'admin' ? 'customer' : 'admin')}
                          className={`px-3 py-1.5 text-[10px] font-bold rounded-xl border transition-all ${
                            u.role === 'admin'
                              ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                              : 'bg-accent-500/10 border-accent-500/20 text-accent-400 hover:bg-accent-500/20'
                          }`}
                        >
                          {u.role === 'admin' ? 'Hacer Cliente' : 'Promover a Admin'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* COUPONS TAB */}
        {activeTab === 'coupons' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 glass border border-white/5 p-6 rounded-3xl space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Cupones Existentes</h3>
                <p className="text-xs text-zinc-550 mt-1">Códigos de descuento promocionales activos en la tienda.</p>
              </div>

              <div className="space-y-3.5 max-h-96 overflow-y-auto pr-1">
                {coupons.map((cp) => (
                  <div key={cp.code} className="p-3.5 border border-zinc-900 bg-zinc-950/20 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono font-bold text-accent-400 bg-accent-500/10 px-2 py-0.5 rounded border border-accent-500/25">
                        {cp.code}
                      </span>
                      <span className="text-zinc-400 font-bold ml-4">{Math.round(cp.discountRate * 100)}% de Descuento</span>
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
                        className="text-zinc-555 hover:text-rose-500 p-0.5 transition-colors"
                        title="Borrar Cupón"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 glass border border-white/5 p-6 rounded-3xl space-y-6 h-fit">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Plus size={16} className="text-accent-500" /> Crear Nuevo Cupón
                </h3>
                <p className="text-xs text-zinc-550 mt-1">Añade un código promocional nuevo al checkout.</p>
              </div>

              <form onSubmit={handleCreateCoupon} className="space-y-4">
                <div>
                  <label className="checkout-label">Código del Cupón</label>
                  <input
                    type="text"
                    required
                    placeholder="ej: NAVIDAD50"
                    value={newCouponCode}
                    onChange={(e) => setNewCouponCode(e.target.value)}
                    className="checkout-input py-2.5 px-3.5 uppercase"
                  />
                </div>
                <div>
                  <label className="checkout-label">Tasa de Descuento (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={newCouponRate}
                    onChange={(e) => setNewCouponRate(Math.max(0, Math.min(100, parseInt(e.target.value))))}
                    className="checkout-input py-2.5 px-3.5"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all shadow-lg shadow-accent-600/10"
                >
                  Crear Cupón
                </button>
              </form>
            </div>
          </div>
        )}

        {/* CMS BLOG TAB */}
        {activeTab === 'blog' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Articles List */}
            <div className="lg:col-span-7 glass border border-white/5 p-6 rounded-3xl space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <BookOpen size={16} className="text-accent-500" /> Entradas del Blog CMS
                </h3>
                <p className="text-xs text-zinc-550 mt-1">Agrega y edita noticias de estilo y lanzamientos técnicos.</p>
              </div>

              {articles.length === 0 ? (
                <p className="text-xs text-zinc-500 italic py-4">No hay artículos publicados en el blog todavía.</p>
              ) : (
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                  {articles.map((art) => (
                    <div key={art.id} className="p-4 border border-zinc-900 bg-zinc-950/20 rounded-2xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        {art.image && (
                          <img src={art.image} alt={art.title} className="w-12 h-12 object-cover rounded-xl bg-zinc-900 shrink-0" />
                        )}
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-zinc-200 truncate max-w-[240px]">{art.title}</h4>
                          <p className="text-[10px] text-zinc-500 mt-1">Fecha: {art.date} | Lectura: {art.readTime}</p>
                        </div>
                      </div>

                      <div className="flex gap-1.5 shrink-0">
                        <button
                          onClick={() => handleStartEditArticle(art)}
                          className="p-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 rounded-xl text-zinc-400 hover:text-white transition-colors"
                          title="Editar Ficha"
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          onClick={() => deleteArticle(art.id)}
                          className="p-2 border border-zinc-800 hover:border-rose-950 bg-zinc-900 hover:bg-rose-950/20 rounded-xl text-zinc-500 hover:text-rose-500 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: New Article Form */}
            <div className="lg:col-span-5 glass border border-white/5 p-6 rounded-3xl space-y-6 h-fit">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                  <Plus size={16} className="text-accent-500" /> Publicar Nuevo Artículo
                </h3>
                <p className="text-xs text-zinc-550 mt-1">Publica contenido de tendencia en el blog de la tienda.</p>
              </div>

              <form onSubmit={handleCreateArticle} className="space-y-4">
                <div>
                  <label className="checkout-label">Título del Artículo</label>
                  <input
                    type="text"
                    required
                    placeholder="ej: Lanzamiento VIBE Buds 2026"
                    value={newArtTitle}
                    onChange={(e) => setNewArtTitle(e.target.value)}
                    className="checkout-input py-2 px-3"
                  />
                </div>
                <div>
                  <label className="checkout-label">Extracto Breve</label>
                  <input
                    type="text"
                    placeholder="Resumen del artículo..."
                    value={newArtExcerpt}
                    onChange={(e) => setNewArtExcerpt(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>
                <div>
                  <label className="checkout-label">Tiempo de Lectura (ej: 4 min)</label>
                  <input
                    type="text"
                    value={newArtReadTime}
                    onChange={(e) => setNewArtReadTime(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>
                <div>
                  <label className="checkout-label">Imagen de Portada (URL)</label>
                  <input
                    type="text"
                    value={newArtImg}
                    onChange={(e) => setNewArtImg(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>
                <div>
                  <label className="checkout-label">Contenido del Artículo</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escribe el artículo aquí..."
                    value={newArtContent}
                    onChange={(e) => setNewArtContent(e.target.value)}
                    className="checkout-input py-2 px-3 resize-none text-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all shadow-lg shadow-accent-600/10"
                >
                  Publicar Entrada
                </button>
              </form>
            </div>

          </div>
        )}
      </div>

      {/* --- SECTION: EDIT PRODUCT MODAL --- */}
      <AnimatePresence>
        {selectedProductForEdit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="glass border border-white/5 max-w-lg w-full rounded-3xl p-6.5 max-h-[90vh] overflow-y-auto space-y-6"
            >
              <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Editar Ficha de Producto</h3>
                <button
                  onClick={() => setSelectedProductForEdit(null)}
                  className="text-zinc-550 hover:text-white p-1 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSaveProductEdits} className="space-y-4">
                <div>
                  <label className="checkout-label">Nombre del Producto</label>
                  <input
                    type="text"
                    required
                    value={editProdName}
                    onChange={(e) => setEditProdName(e.target.value)}
                    className="checkout-input py-2 px-3"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="checkout-label">Categoría</label>
                    <select
                      value={editProdCategory}
                      onChange={(e) => setEditProdCategory(e.target.value)}
                      className="checkout-input py-2 px-3"
                    >
                      <option value="Audio">Audio</option>
                      <option value="Moda">Moda</option>
                      <option value="Accesorios">Accesorios</option>
                    </select>
                  </div>
                  <div>
                    <label className="checkout-label">Precio (S/.)</label>
                    <input
                      type="number"
                      required
                      value={editProdPrice}
                      onChange={(e) => setEditProdPrice(Math.max(1, parseFloat(e.target.value)))}
                      className="checkout-input py-2 px-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="checkout-label">Imagen (URL)</label>
                  <input
                    type="text"
                    required
                    value={editProdImg}
                    onChange={(e) => setEditProdImg(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>

                <div>
                  <label className="checkout-label">Descripción</label>
                  <textarea
                    rows={3}
                    value={editProdDesc}
                    onChange={(e) => setEditProdDesc(e.target.value)}
                    className="checkout-input py-2 px-3 resize-none text-xs"
                  />
                </div>

                <div className="border-t border-zinc-900 pt-4 space-y-2">
                  <span className="text-[10px] text-zinc-555 font-bold uppercase tracking-wider">Inventario por Variantes:</span>
                  <div className="space-y-2.5">
                    {Object.entries(editProdStock).map(([key, qty]) => (
                      <div key={key} className="flex justify-between items-center gap-4 text-xs font-semibold">
                        <span className="text-zinc-400 font-mono truncate">{key}:</span>
                        <input
                          type="number"
                          value={qty}
                          onChange={(e) => setEditProdStock({ ...editProdStock, [key]: Math.max(0, parseInt(e.target.value)) })}
                          className="checkout-input py-1 px-2 text-right w-20"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProductForEdit(null)}
                    className="px-4.5 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs font-bold text-zinc-400 rounded-xl"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SECTION: ADD PRODUCT MODAL --- */}
      <AnimatePresence>
        {isAddingProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="glass border border-white/5 max-w-lg w-full rounded-3xl p-6.5 max-h-[90vh] overflow-y-auto space-y-6"
            >
              <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Plus size={16} className="text-accent-500" /> Añadir Nuevo Producto
                </h3>
                <button
                  onClick={() => setIsAddingProduct(false)}
                  className="text-zinc-555 hover:text-white p-1 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleCreateProduct} className="space-y-4">
                <div>
                  <label className="checkout-label">Nombre del Producto</label>
                  <input
                    type="text"
                    required
                    value={newProdName}
                    onChange={(e) => setNewProdName(e.target.value)}
                    placeholder="ej: Auriculares Espaciales VIBE Max"
                    className="checkout-input py-2 px-3"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="checkout-label">Categoría</label>
                    <select
                      value={newProdCategory}
                      onChange={(e) => setNewProdCategory(e.target.value)}
                      className="checkout-input py-2 px-3"
                    >
                      <option value="Audio">Audio</option>
                      <option value="Moda">Moda</option>
                      <option value="Accesorios">Accesorios</option>
                    </select>
                  </div>
                  <div>
                    <label className="checkout-label">Precio (S/.)</label>
                    <input
                      type="number"
                      required
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(Math.max(1, parseFloat(e.target.value)))}
                      className="checkout-input py-2 px-3"
                    />
                  </div>
                  <div>
                    <label className="checkout-label">Stock Inicial</label>
                    <input
                      type="number"
                      required
                      value={newProdStock}
                      onChange={(e) => setNewProdStock(Math.max(0, parseInt(e.target.value)))}
                      className="checkout-input py-2 px-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="checkout-label">Imagen (URL)</label>
                  <input
                    type="text"
                    required
                    value={newProdImg}
                    onChange={(e) => setNewProdImg(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>

                <div>
                  <label className="checkout-label">Descripción</label>
                  <textarea
                    rows={3}
                    value={newProdDesc}
                    placeholder="Escribe las especificaciones principales aquí..."
                    className="checkout-input py-2 px-3 resize-none text-xs"
                  />
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all shadow-lg shadow-accent-600/10"
                  >
                    Crear Producto
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddingProduct(false)}
                    className="px-4.5 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs font-bold text-zinc-400 rounded-xl"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SECTION: EDIT COLLECTION MODAL --- */}
      <AnimatePresence>
        {selectedCollectionForEdit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="glass border border-white/5 max-w-md w-full rounded-3xl p-6.5 max-h-[90vh] overflow-y-auto space-y-6"
            >
              <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Editar Colección</h3>
                <button
                  onClick={() => setSelectedCollectionForEdit(null)}
                  className="text-zinc-555 hover:text-white p-1 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSaveCollectionEdits} className="space-y-4">
                <div>
                  <label className="checkout-label">Nombre de Colección</label>
                  <input
                    type="text"
                    required
                    value={editColName}
                    onChange={(e) => setEditColName(e.target.value)}
                    className="checkout-input py-2 px-3"
                  />
                </div>
                <div>
                  <label className="checkout-label">Descripción</label>
                  <textarea
                    rows={2}
                    value={editColDesc}
                    onChange={(e) => setEditColDesc(e.target.value)}
                    className="checkout-input py-2 px-3 resize-none text-xs"
                  />
                </div>
                <div>
                  <label className="checkout-label">Imagen de Portada (URL)</label>
                  <input
                    type="text"
                    required
                    value={editColImg}
                    onChange={(e) => setEditColImg(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>
                <div className="flex gap-3 pt-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCollectionForEdit(null)}
                    className="px-4.5 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs font-bold text-zinc-400 rounded-xl"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SECTION: EDIT ARTICLE MODAL --- */}
      <AnimatePresence>
        {selectedArticleForEdit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="glass border border-white/5 max-w-lg w-full rounded-3xl p-6.5 max-h-[90vh] overflow-y-auto space-y-6"
            >
              <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Editar Artículo</h3>
                <button
                  onClick={() => setSelectedArticleForEdit(null)}
                  className="text-zinc-555 hover:text-white p-1 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSaveArticleEdits} className="space-y-4">
                <div>
                  <label className="checkout-label">Título del Artículo</label>
                  <input
                    type="text"
                    required
                    value={editArtTitle}
                    onChange={(e) => setEditArtTitle(e.target.value)}
                    className="checkout-input py-2 px-3"
                  />
                </div>
                <div>
                  <label className="checkout-label">Extracto Breve</label>
                  <input
                    type="text"
                    value={editArtExcerpt}
                    onChange={(e) => setEditArtExcerpt(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>
                <div>
                  <label className="checkout-label">Tiempo de Lectura</label>
                  <input
                    type="text"
                    value={editArtReadTime}
                    onChange={(e) => setEditArtReadTime(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>
                <div>
                  <label className="checkout-label">Imagen de Portada (URL)</label>
                  <input
                    type="text"
                    value={editArtImg}
                    onChange={(e) => setEditArtImg(e.target.value)}
                    className="checkout-input py-2 px-3 text-xs"
                  />
                </div>
                <div>
                  <label className="checkout-label">Contenido del Artículo</label>
                  <textarea
                    rows={6}
                    required
                    value={editArtContent}
                    onChange={(e) => setEditArtContent(e.target.value)}
                    className="checkout-input py-2 px-3 resize-none text-xs"
                  />
                </div>
                <div className="flex gap-3 pt-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white rounded-xl transition-all"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedArticleForEdit(null)}
                    className="px-4.5 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs font-bold text-zinc-400 rounded-xl"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SECTION: INVOICE / TICKET MODAL --- */}
      <AnimatePresence>
        {selectedOrderForInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm print:bg-white print:p-0 print:absolute print:inset-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="glass border border-white/5 max-w-xl w-full rounded-3xl p-8 max-h-[90vh] overflow-y-auto space-y-6 print:bg-white print:border-none print:shadow-none print:max-h-none print:w-full print:p-0 print:text-black"
            >
              {/* MODAL CONTROLS - HIDDEN DURING PRINTING */}
              <div className="flex justify-between items-center pb-3 border-b border-zinc-900 print:hidden">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                  <FileText size={14} className="text-accent-500" /> Boleta de Venta
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="py-1.5 px-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[10px] font-bold text-zinc-300 hover:text-white rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    <Printer size={12} /> Imprimir
                  </button>
                  <button
                    onClick={() => setSelectedOrderForInvoice(null)}
                    className="text-zinc-550 hover:text-white p-1 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* TICKET BODY */}
              <div className="space-y-6 print:text-black">
                {/* Brand Header */}
                <div className="text-center pb-4 border-b border-dashed border-zinc-800 print:border-zinc-300">
                  <h2 className="text-xl font-black tracking-tight text-white print:text-black">
                    VIBE<span className="text-accent-500">.shop</span>
                  </h2>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest font-bold">Comprobante de Pago Electrónico</p>
                  <p className="text-[9px] text-zinc-600 font-mono mt-1">R.U.C. 20601234567 | Lima, Perú</p>
                </div>

                {/* Metadata details */}
                <div className="grid grid-cols-2 gap-4 text-[10px]">
                  <div>
                    <span className="text-zinc-500 font-bold block uppercase tracking-wider">Detalles de Orden</span>
                    <span className="text-zinc-300 font-mono font-bold block print:text-black">ID: {selectedOrderForInvoice.id}</span>
                    <span className="text-zinc-400 block mt-0.5 print:text-black">Fecha: {selectedOrderForInvoice.date}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-bold block uppercase tracking-wider">Cliente Facturado</span>
                    <span className="text-zinc-300 font-bold block print:text-black">{selectedOrderForInvoice.shippingAddress.fullName}</span>
                    <span className="text-zinc-400 font-mono block mt-0.5 print:text-black">{selectedOrderForInvoice.shippingAddress.email}</span>
                  </div>
                </div>

                {/* Items list Table */}
                <div className="border-t border-b border-zinc-900 py-3 print:border-zinc-300">
                  <table className="w-full text-left text-[10px] border-collapse">
                    <thead>
                      <tr className="text-zinc-550 font-bold uppercase tracking-wider">
                        <th className="pb-2">Artículo</th>
                        <th className="pb-2 text-center">Cant</th>
                        <th className="pb-2 text-right">P. Unit</th>
                        <th className="pb-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900/50 print:divide-zinc-200">
                      {selectedOrderForInvoice.items.map((item) => (
                        <tr key={item.id} className="text-zinc-300 print:text-black">
                          <td className="py-2.5">
                            <div className="font-bold">{item.product.name}</div>
                            <div className="text-[8px] text-zinc-500 font-mono mt-0.5">{item.selectedSize} / {item.selectedColor.name}</div>
                          </td>
                          <td className="py-2.5 text-center font-bold">{item.quantity}</td>
                          <td className="py-2.5 text-right font-mono">S/. {item.product.price}</td>
                          <td className="py-2.5 text-right font-mono font-bold">S/. {item.product.price * item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Subtotals & total calculations */}
                <div className="w-2/3 ml-auto space-y-1.5 text-[10px] text-right">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Subtotal:</span>
                    <span className="text-zinc-300 font-mono print:text-black">S/. {selectedOrderForInvoice.subtotal.toFixed(2)}</span>
                  </div>
                  {selectedOrderForInvoice.discount > 0 && (
                    <div className="flex justify-between text-rose-450 print:text-black">
                      <span>Descuento Aplicado:</span>
                      <span className="font-mono">- S/. {selectedOrderForInvoice.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-zinc-500">IGV (18%):</span>
                    <span className="text-zinc-300 font-mono print:text-black">S/. {selectedOrderForInvoice.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Costo de Envío:</span>
                    <span className="text-zinc-300 font-mono print:text-black">
                      {selectedOrderForInvoice.shippingCost === 0 ? 'Gratis' : `S/. ${selectedOrderForInvoice.shippingCost}`}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2.5 border-t border-dashed border-zinc-800 print:border-zinc-300 text-xs">
                    <span className="text-white font-extrabold print:text-black uppercase tracking-wider">Importe Total:</span>
                    <span className="text-accent-400 font-black font-mono print:text-black">S/. {selectedOrderForInvoice.total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Delivery Information Footer */}
                <div className="pt-4 border-t border-zinc-900 text-[9px] text-zinc-500 space-y-1 leading-relaxed print:border-zinc-300 print:text-black">
                  <div><span className="font-bold uppercase tracking-wider text-[8px] text-zinc-550">Dirección de Despacho:</span></div>
                  <div>{selectedOrderForInvoice.shippingAddress.address}, {selectedOrderForInvoice.shippingAddress.city}, {selectedOrderForInvoice.shippingAddress.postalCode}, {selectedOrderForInvoice.shippingAddress.country}</div>
                  <div>Celular: {selectedOrderForInvoice.shippingAddress.phone} | Courier: {selectedOrderForInvoice.shippingMethod === 'express' ? 'Sérvulo Express (24h)' : 'Servicio Regular (3-5 días)'}</div>
                </div>

                {/* Printable thank you note */}
                <div className="text-center pt-4 border-t border-dashed border-zinc-800 text-[9px] text-zinc-650 print:border-zinc-300 print:text-black">
                  ¡Gracias por comprar en VIBE.shop!
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AdminDashboard;
