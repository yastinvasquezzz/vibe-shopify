import React from 'react';
import type { ActiveView } from './types/store';
import { useStore } from './store/useStore';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FilterSidebar } from './components/catalog/FilterSidebar';
import { ProductGrid } from './components/catalog/ProductGrid';
import { ProductDetail } from './components/pdp/ProductDetail';
import { CheckoutFlow } from './components/checkout/CheckoutFlow';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { CartDrawer } from './components/cart/CartDrawer';
import { QuickViewModal } from './components/catalog/QuickViewModal';
import { ErrorBoundary } from './components/common/ErrorBoundary';

import { HomePage } from './components/home/HomePage';
import { CartPage } from './components/cart/CartPage';
import { HelpPage } from './components/help/HelpPage';
import { BlogPage } from './components/blog/BlogPage';
import { TrackOrderPage } from './components/track/TrackOrderPage';

import { WishlistPage } from './components/wishlist/WishlistPage';
import { AuthPage } from './components/auth/AuthPage';
import { AboutPage } from './components/about/AboutPage';
import { DealsPage } from './components/deals/DealsPage';
import { CollectionsPage } from './components/collections/CollectionsPage';
import { SizeGuidePage } from './components/sizeguide/SizeGuidePage';
import { ReturnsPage } from './components/returns/ReturnsPage';
import { NotFoundPage } from './components/common/NotFoundPage';

import { ShoppingBag, LayoutGrid, User, Home, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const App: React.FC = () => {
  const {
    activeView,
    setActiveView,
    setSelectedProductId,
    selectedProductId,
    isFilterSidebarOpen,
    setFilterSidebarOpen,
    cart,
    isLoggedIn,
    wishlist,
    user,
    fetchProducts,
    fetchCoupons,
    fetchOrders
  } = useStore();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Load data from Supabase on mount
  React.useEffect(() => {
    fetchProducts();
    fetchCoupons();
    fetchOrders();
  }, [fetchProducts, fetchCoupons, fetchOrders]);

  // Synchronize state to URL Hash
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#home') {
        setActiveView('home');
        setSelectedProductId(null);
      } else if (hash.startsWith('#product/')) {
        const prodId = hash.replace('#product/', '');
        setSelectedProductId(prodId);
        setActiveView('pdp');
      } else {
        const view = hash.replace('#', '') as ActiveView;
        const validViews: ActiveView[] = [
          'home', 'catalog', 'pdp', 'cart', 'checkout', 'profile', 'admin',
          'help', 'blog', 'track', 'wishlist', 'auth', 'about', 'deals',
          'collections', 'sizeguide', 'returns', 'notfound'
        ];
        if (validViews.includes(view)) {
          setActiveView(view);
          if (view !== 'pdp') setSelectedProductId(null);
        } else {
          setActiveView('notfound');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActiveView, setSelectedProductId]);

  // Synchronize URL Hash from State changes
  React.useEffect(() => {
    if (activeView === 'pdp' && selectedProductId) {
      if (window.location.hash !== `#product/${selectedProductId}`) {
        window.location.hash = `#product/${selectedProductId}`;
      }
    } else {
      if (window.location.hash !== `#${activeView}`) {
        window.location.hash = `#${activeView}`;
      }
    }
  }, [activeView, selectedProductId]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col justify-between pb-16 md:pb-0">
        <Navbar />

        <main className="flex-1 w-full bg-[#030303]">
          <AnimatePresence mode="wait">
            {activeView === 'home' && (
              <motion.div
                key="home-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <HomePage />
              </motion.div>
            )}

            {activeView === 'catalog' && (
              <motion.div
                key="catalog-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex gap-8"
              >
                <FilterSidebar />
                <div className="flex-1">
                  <ProductGrid />
                </div>

                {isFilterSidebarOpen && (
                  <div
                    onClick={() => setFilterSidebarOpen(false)}
                    className="fixed inset-0 bg-black/60 z-45 md:hidden"
                  />
                )}
              </motion.div>
            )}

            {activeView === 'pdp' && (
              <motion.div
                key="pdp-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProductDetail />
              </motion.div>
            )}

            {activeView === 'cart' && (
              <motion.div
                key="cart-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CartPage />
              </motion.div>
            )}

            {activeView === 'checkout' && (
              <motion.div
                key="checkout-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CheckoutFlow />
              </motion.div>
            )}

            {activeView === 'profile' && (
              <motion.div
                key="profile-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {isLoggedIn ? <AdminDashboard /> : <AuthPage />}
              </motion.div>
            )}

            {activeView === 'admin' && (
              <motion.div
                key="admin-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {isLoggedIn && user.role === 'admin' ? <AdminDashboard /> : <NotFoundPage />}
              </motion.div>
            )}

            {activeView === 'help' && (
              <motion.div
                key="help-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <HelpPage />
              </motion.div>
            )}

            {activeView === 'blog' && (
              <motion.div
                key="blog-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <BlogPage />
              </motion.div>
            )}

            {activeView === 'track' && (
              <motion.div
                key="track-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TrackOrderPage />
              </motion.div>
            )}

            {activeView === 'wishlist' && (
              <motion.div
                key="wishlist-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <WishlistPage />
              </motion.div>
            )}

            {activeView === 'auth' && (
              <motion.div
                key="auth-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AuthPage />
              </motion.div>
            )}

            {activeView === 'about' && (
              <motion.div
                key="about-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AboutPage />
              </motion.div>
            )}

            {activeView === 'deals' && (
              <motion.div
                key="deals-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <DealsPage />
              </motion.div>
            )}

            {activeView === 'collections' && (
              <motion.div
                key="collections-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CollectionsPage />
              </motion.div>
            )}

            {activeView === 'sizeguide' && (
              <motion.div
                key="sizeguide-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SizeGuidePage />
              </motion.div>
            )}

            {activeView === 'returns' && (
              <motion.div
                key="returns-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReturnsPage />
              </motion.div>
            )}

            {activeView === 'notfound' && (
              <motion.div
                key="notfound-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <NotFoundPage />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />

        <CartDrawer />
        <QuickViewModal />

        {/* --- SECTION: PERSISTENT BOTTOM NAVIGATION FOR MOBILE --- */}
        <div className="fixed bottom-0 left-0 right-0 z-35 glass border-t border-white/5 py-2 px-4 flex justify-around md:hidden">
          <button
            onClick={() => {
              setActiveView('home');
              setSelectedProductId(null);
            }}
            className={`flex flex-col items-center gap-1.5 text-[9px] font-bold uppercase transition-colors ${
              activeView === 'home' ? 'text-accent-400' : 'text-zinc-500'
            }`}
          >
            <Home size={16} />
            <span>Inicio</span>
          </button>

          <button
            onClick={() => {
              setActiveView('catalog');
              setSelectedProductId(null);
            }}
            className={`flex flex-col items-center gap-1.5 text-[9px] font-bold uppercase transition-colors ${
              activeView === 'catalog' ? 'text-accent-400' : 'text-zinc-500'
            }`}
          >
            <LayoutGrid size={16} />
            <span>Tienda</span>
          </button>

          <button
            onClick={() => {
              setActiveView('cart');
              setSelectedProductId(null);
            }}
            className={`relative flex flex-col items-center gap-1.5 text-[9px] font-bold uppercase transition-colors ${
              activeView === 'cart' ? 'text-accent-400' : 'text-zinc-500'
            }`}
          >
            <ShoppingBag size={16} />
            <span>Carrito</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 right-2 flex h-4 min-w-4 px-0.5 items-center justify-center rounded-full bg-accent-600 text-[8px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              setActiveView('wishlist');
              setSelectedProductId(null);
            }}
            className={`relative flex flex-col items-center gap-1.5 text-[9px] font-bold uppercase transition-colors ${
              activeView === 'wishlist' ? 'text-accent-400' : 'text-zinc-500'
            }`}
          >
            <Heart size={16} />
            <span>Favoritos</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 right-3 flex h-4 min-w-4 px-0.5 items-center justify-center rounded-full bg-rose-500 text-[8px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              setActiveView('profile');
              setSelectedProductId(null);
            }}
            className={`flex flex-col items-center gap-1.5 text-[9px] font-bold uppercase transition-colors ${
              activeView === 'profile' || activeView === 'auth' ? 'text-accent-400' : 'text-zinc-500'
            }`}
          >
            <User size={16} />
            <span>Perfil</span>
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
