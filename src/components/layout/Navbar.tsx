import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../../store/useStore';
import { Search, ShoppingBag, User as UserIcon, Settings, X, Menu, ArrowRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const {
    cart,
    products,
    wishlist,
    setActiveView,
    setSelectedProductId,
    setCartDrawerOpen,
    activeView,
    isLoggedIn,
    user
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: 'Inicio', view: 'home' as const },
    { label: 'Tienda', view: 'catalog' as const },
    { label: 'Colecciones', view: 'collections' as const },
    { label: 'Ofertas', view: 'deals' as const },
    { label: 'Blog', view: 'blog' as const },
    { label: 'Soporte', view: 'help' as const }
  ];

  const filteredSuggestions = localSearch.trim() === ''
    ? []
    : products.filter(product =>
        product.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        product.category.toLowerCase().includes(localSearch.toLowerCase())
      ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveView('catalog');
    setSelectedProductId(null);
    setShowSearchSuggestions(false);
  };

  const handleSuggestionClick = (productId: string) => {
    setSelectedProductId(productId);
    setActiveView('pdp');
    setShowSearchSuggestions(false);
    setLocalSearch('');
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* --- SECTION: PROMO BAR --- */}
      <div className="bg-gradient-to-r from-accent-700 via-accent-600 to-accent-800 py-2 px-4 text-center text-xs font-semibold tracking-wider text-white select-none">
        <span className="inline-flex items-center gap-1.5">
          🎉 ENVÍO GRATIS EN PEDIDOS SUPERIORES A S/. 500 | USA EL CÓDIGO <span className="underline decoration-wavy">VIBE20</span> PARA 20% OFF
        </span>
      </div>

      {/* --- SECTION: MAIN NAVBAR --- */}
      <nav className="glass w-full border-b border-white/5 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-zinc-400 hover:text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
            <div
              onClick={() => {
                setActiveView('home');
                setSelectedProductId(null);
              }}
              className="text-xl font-extrabold tracking-tight cursor-pointer select-none bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
            >
              VIBE<span className="text-accent-500 font-medium">.shop</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => {
                  setActiveView(link.view);
                  setSelectedProductId(null);
                }}
                className={`text-sm font-medium transition-colors ${
                  activeView === link.view
                    ? 'text-accent-400 font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div ref={searchRef} className="relative flex-1 max-w-md hidden sm:block">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={localSearch}
                  onChange={(e) => {
                    setLocalSearch(e.target.value);
                    setShowSearchSuggestions(true);
                  }}
                  onFocus={() => setShowSearchSuggestions(true)}
                  className="w-full bg-zinc-950/60 border border-white/10 rounded-full py-1.5 pl-4 pr-10 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-accent-500/80 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>
              </div>
            </form>

            <AnimatePresence>
              {showSearchSuggestions && filteredSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 right-0 mt-2 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-50 max-h-80 overflow-y-auto"
                >
                  <div className="p-2 border-b border-zinc-900 text-[10px] font-bold text-zinc-500 uppercase tracking-wider px-3.5">
                    Sugerencias de búsqueda
                  </div>
                  {filteredSuggestions.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSuggestionClick(product.id)}
                      className="flex items-center gap-3 p-2.5 hover:bg-zinc-900 cursor-pointer transition-colors"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-lg bg-zinc-900"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-zinc-200 truncate">{product.name}</div>
                        <div className="text-[10px] text-zinc-500 font-medium">{product.category}</div>
                      </div>
                      <div className="text-xs font-bold text-accent-400 pr-1">S/. {product.price}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => {
                setActiveView('wishlist');
                setSelectedProductId(null);
              }}
              className={`relative p-2 rounded-full border transition-colors ${
                activeView === 'wishlist'
                  ? 'border-accent-500/50 bg-accent-500/10 text-accent-400'
                  : 'border-white/5 hover:border-white/10 text-zinc-400 hover:text-white'
              }`}
              aria-label="Wishlist"
            >
              <Heart size={18} />
              <AnimatePresence>
                {wishlist.length > 0 && (
                  <motion.span
                    key={wishlist.length}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    className="absolute -top-1 -right-1 flex h-4 min-w-4 px-0.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-lg"
                  >
                    {wishlist.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => {
                setActiveView('profile');
                setSelectedProductId(null);
              }}
              className={`p-2 rounded-full border transition-colors ${
                activeView === 'profile' || activeView === 'auth'
                  ? 'border-accent-500/50 bg-accent-500/10 text-accent-400'
                  : 'border-white/5 hover:border-white/10 text-zinc-400 hover:text-white'
              }`}
              aria-label="Profile"
            >
              <UserIcon size={18} />
            </button>

            {isLoggedIn && user.role === 'admin' && (
              <button
                onClick={() => {
                  setActiveView('admin');
                  setSelectedProductId(null);
                }}
                className={`p-2 rounded-full border transition-colors hidden md:flex ${
                  activeView === 'admin'
                    ? 'border-accent-500/50 bg-accent-500/10 text-accent-400'
                    : 'border-white/5 hover:border-white/10 text-zinc-400 hover:text-white'
                }`}
                aria-label="Admin settings"
              >
                <Settings size={18} />
              </button>
            )}

            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2 rounded-full border border-white/5 hover:border-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={18} />
              <AnimatePresence>
                {cartItemsCount > 0 && (
                  <motion.span
                    key={cartItemsCount}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 px-1 items-center justify-center rounded-full bg-accent-600 text-[10px] font-bold text-white shadow-lg"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* --- SECTION: MOBILE SIDE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 w-4/5 max-w-sm bg-zinc-950 border-r border-zinc-800 p-6 z-50 md:hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-lg font-bold tracking-tight text-white">
                    VIBE<span className="text-accent-500">.shop</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 text-zinc-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mb-6">
                  <form onSubmit={handleSearchSubmit}>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Buscar..."
                        value={localSearch}
                        onChange={(e) => setLocalSearch(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2 pl-4 pr-10 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-accent-500"
                      />
                      <button
                        type="submit"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        <Search size={16} />
                      </button>
                    </div>
                  </form>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    Navegación
                  </div>
                  {navLinks.map((link) => (
                    <button
                      key={link.view}
                      onClick={() => {
                        setActiveView(link.view);
                        setSelectedProductId(null);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left text-base font-semibold py-1 transition-colors ${
                        activeView === link.view
                          ? 'text-accent-400'
                          : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}

                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1 mt-4">
                    Más
                  </div>
                  {[
                    { label: 'Seguimiento', view: 'track' as const },
                    { label: 'Guía de Tallas', view: 'sizeguide' as const },
                    { label: 'Devoluciones', view: 'returns' as const },
                    { label: 'Sobre Nosotros', view: 'about' as const }
                  ].map((link) => (
                    <button
                      key={link.view}
                      onClick={() => {
                        setActiveView(link.view);
                        setSelectedProductId(null);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left text-sm font-medium py-1 transition-colors ${
                        activeView === link.view
                          ? 'text-accent-400'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-900 pt-6">
                <button
                  onClick={() => {
                    setActiveView('wishlist');
                    setSelectedProductId(null);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors mb-3"
                >
                  <div className="flex items-center gap-3">
                    <Heart size={18} className="text-zinc-400" />
                    <span className="text-sm font-semibold text-zinc-200">Favoritos ({wishlist.length})</span>
                  </div>
                  <ArrowRight size={16} className="text-zinc-500" />
                </button>
                <button
                  onClick={() => {
                    setActiveView('profile');
                    setSelectedProductId(null);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors mb-3"
                >
                  <div className="flex items-center gap-3">
                    <UserIcon size={18} className="text-zinc-400" />
                    <span className="text-sm font-semibold text-zinc-200">Mi Cuenta</span>
                  </div>
                  <ArrowRight size={16} className="text-zinc-500" />
                </button>
                {isLoggedIn && user.role === 'admin' && (
                  <button
                    onClick={() => {
                      setActiveView('admin');
                      setSelectedProductId(null);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between w-full p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Settings size={18} className="text-zinc-400" />
                      <span className="text-sm font-semibold text-zinc-200">Consola Admin</span>
                    </div>
                    <ArrowRight size={16} className="text-zinc-500" />
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
