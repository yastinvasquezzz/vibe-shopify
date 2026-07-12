import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, CartItem, Order, User, ShippingAddress, ProductColor, Article, Coupon, ActiveView } from '../types/store';
import { mockProducts, mockUser } from '../data/mockData';

interface FiltersState {
  category: string;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  selectedColors: string[];
  selectedSizes: string[];
  sortBy: string;
  onlyInStock: boolean;
}

interface StoreState {
  products: Product[];
  user: User;
  orders: Order[];
  cart: CartItem[];
  couponCode: string;
  discountRate: number;
  freeShippingThreshold: number;
  
  filters: FiltersState;
  
  checkoutStep: number;
  checkoutShippingAddress: ShippingAddress;
  checkoutShippingMethod: 'standard' | 'express';
  checkoutCardInfo: {
    number: string;
    name: string;
    expiry: string;
    cvv: string;
  };
  
  activeView: ActiveView;
  selectedProductId: string | null;
  isCartDrawerOpen: boolean;
  isFilterSidebarOpen: boolean;
  quickViewProductId: string | null;

  articles: Article[];
  coupons: Coupon[];
  trackingOrderId: string;

  wishlist: string[];
  recentlyViewed: string[];
  isLoggedIn: boolean;

  setProducts: (products: Product[]) => void;
  updateProductStock: (productId: string, variantKey: string, newStock: number) => void;
  updateProductPrice: (productId: string, newPrice: number) => void;
  
  updateUser: (user: User) => void;
  addOrder: (order: Order) => void;
  
  addToCart: (product: Product, color: ProductColor, size: string, quantity: number) => boolean;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  applyCoupon: (code: string) => boolean;
  clearCart: () => void;
  
  setFilterCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setPriceRange: (min: number, max: number) => void;
  toggleColorFilter: (colorName: string) => void;
  toggleSizeFilter: (size: string) => void;
  setSortBy: (sortBy: string) => void;
  toggleStockFilter: () => void;
  resetFilters: () => void;
  
  setCheckoutStep: (step: number) => void;
  updateCheckoutAddress: (address: Partial<ShippingAddress>) => void;
  setCheckoutShippingMethod: (method: 'standard' | 'express') => void;
  updateCheckoutCard: (card: Partial<{ number: string; name: string; expiry: string; cvv: string }>) => void;
  submitCheckout: () => Order | null;
  
  setActiveView: (view: ActiveView) => void;
  setSelectedProductId: (id: string | null) => void;
  setCartDrawerOpen: (isOpen: boolean) => void;
  setFilterSidebarOpen: (isOpen: boolean) => void;
  setQuickViewProductId: (id: string | null) => void;

  setTrackingOrderId: (id: string) => void;
  addCoupon: (coupon: Coupon) => void;
  deleteCoupon: (code: string) => void;
  toggleCoupon: (code: string) => void;
  addNewProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  updateOrderStatus: (orderId: string, status: 'processing' | 'shipped' | 'delivered') => void;

  toggleWishlist: (productId: string) => void;
  clearWishlist: () => void;
  addToRecentlyViewed: (productId: string) => void;
  login: () => void;
  logout: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      products: mockProducts,
  user: mockUser,
  orders: [],
  cart: [],
  couponCode: '',
  discountRate: 0,
  freeShippingThreshold: 150,
  
  filters: {
    category: 'Todos',
    searchQuery: '',
    minPrice: 0,
    maxPrice: 300,
    selectedColors: [],
    selectedSizes: [],
    sortBy: 'relevance',
    onlyInStock: false,
  },
  
  checkoutStep: 1,
  checkoutShippingAddress: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  },
  checkoutShippingMethod: 'standard',
  checkoutCardInfo: {
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  },
  
  activeView: 'home',
  selectedProductId: null,
  isCartDrawerOpen: false,
  isFilterSidebarOpen: false,
  quickViewProductId: null,

  trackingOrderId: '',
  coupons: [
    { code: 'VIBE20', discountRate: 0.20, active: true },
    { code: 'SHOPIFY10', discountRate: 0.10, active: true },
    { code: 'FREESHIP', discountRate: 0.00, active: true }
  ],
  articles: [
    {
      id: 'art-001',
      title: 'El Futuro del Audio Inalámbrico: Lo que debes saber',
      excerpt: '¿Es el sonido espacial el próximo paso evolutivo? Analizamos la cancelación de ruido híbrida y los transductores viscoelásticos en auriculares premium.',
      content: 'El mercado del audio inalámbrico ha crecido exponencialmente en los últimos años. Lo que antes era una característica opcional, hoy es un estándar absoluto: la Cancelación Activa de Ruido (ANC). Los transductores acústicos modernos son capaces de anular hasta 48dB de sonido ambiental a través de micrófonos duales de nivel híbrido. Además, la transmisión de audio espacial y las conexiones Bluetooth 5.3 con codecs de baja latencia permiten una inmersión completa sin distorsiones en cualquier entorno. Pero no todo es software; la comodidad física es vital. Las espumas viscoelásticas termo-sensibles se adaptan a la presión craneal reduciendo la fatiga tras largas horas de uso.',
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      date: '2026-07-10',
      readTime: '4 min'
    },
    {
      id: 'art-002',
      title: 'Diseño Minimalista en la Moda y Accesorios de Viaje',
      excerpt: '¿Cómo influye la estética limpia y el uso de materiales de alta durabilidad en nuestro día a día?',
      content: 'El diseño minimalista no consiste simplemente en quitar elementos superfluos; se trata de potenciar al máximo la funcionalidad esencial. La mochila UrbanPack es el ejemplo idóneo: construida con fibras de Cordura Ballistic impermeable, ofrece protección extrema contra los elementos manteniendo una silueta aerodinámica y estilizada. Este enfoque minimalista nos libera del ruido visual y nos permite enfocarnos en el trayecto. Desde bolsillos magnéticos ocultos hasta correas ergonómicas de espuma EVA transpirable, cada detalle cuenta en el desarrollo de accesorios modernos.',
      image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
      date: '2026-07-05',
      readTime: '3 min'
    }
  ],

  wishlist: [],
  recentlyViewed: [],
  isLoggedIn: false,

  setProducts: (products) => set({ products }),
  
  updateProductStock: (productId, variantKey, newStock) => {
    set((state) => {
      const updatedProducts = state.products.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            stock: { ...p.stock, [variantKey]: newStock }
          };
        }
        return p;
      });
      
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === productId) {
          const itemKey = `${item.selectedSize}-${item.selectedColor.name}`;
          if (itemKey === variantKey && item.quantity > newStock) {
            return { ...item, quantity: Math.max(0, newStock) };
          }
        }
        return item;
      }).filter((item) => item.quantity > 0);

      return {
        products: updatedProducts,
        cart: updatedCart
      };
    });
  },

  updateProductPrice: (productId, newPrice) => {
    set((state) => {
      const updatedProducts = state.products.map((p) => {
        if (p.id === productId) {
          return { ...p, price: newPrice };
        }
        return p;
      });

      const updatedCart = state.cart.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            product: { ...item.product, price: newPrice }
          };
        }
        return item;
      });

      return {
        products: updatedProducts,
        cart: updatedCart
      };
    });
  },

  updateUser: (user) => set({ user }),
  
  addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
  
  addToCart: (product, color, size, quantity) => {
    const state = get();
    const stockKey = `${size}-${color.name}`;
    const availableStock = product.stock[stockKey] ?? 0;
    
    const existingIndex = state.cart.findIndex(
      (item) => item.product.id === product.id && 
                item.selectedColor.name === color.name && 
                item.selectedSize === size
    );

    if (existingIndex > -1) {
      const existingItem = state.cart[existingIndex];
      const newQuantity = existingItem.quantity + quantity;
      
      if (newQuantity <= availableStock) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex] = { ...existingItem, quantity: newQuantity };
        set({ cart: updatedCart });
        return true;
      }
      return false;
    } else {
      if (quantity <= availableStock) {
        const newItem: CartItem = {
          id: `${product.id}-${color.name}-${size}`,
          product,
          quantity,
          selectedColor: color,
          selectedSize: size
        };
        set({ cart: [...state.cart, newItem] });
        return true;
      }
      return false;
    }
  },

  updateCartQuantity: (itemId, quantity) => {
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === itemId) {
          const stockKey = `${item.selectedSize}-${item.selectedColor.name}`;
          const maxStock = item.product.stock[stockKey] ?? 0;
          const cappedQty = Math.min(Math.max(1, quantity), maxStock);
          return { ...item, quantity: cappedQty };
        }
        return item;
      });
      return { cart: updatedCart };
    });
  },

  removeFromCart: (itemId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId)
    }));
  },

  applyCoupon: (code) => {
    const match = get().coupons.find((c) => c.code === code.toUpperCase() && c.active);
    if (match) {
      set({ couponCode: code.toUpperCase(), discountRate: match.discountRate });
      return true;
    }
    return false;
  },

  clearCart: () => set({ cart: [], couponCode: '', discountRate: 0 }),

  setFilterCategory: (category) => set((state) => ({ 
    filters: { ...state.filters, category } 
  })),

  setSearchQuery: (searchQuery) => set((state) => ({ 
    filters: { ...state.filters, searchQuery } 
  })),

  setPriceRange: (minPrice, maxPrice) => set((state) => ({ 
    filters: { ...state.filters, minPrice, maxPrice } 
  })),

  toggleColorFilter: (colorName) => set((state) => {
    const colors = state.filters.selectedColors.includes(colorName)
      ? state.filters.selectedColors.filter((c) => c !== colorName)
      : [...state.filters.selectedColors, colorName];
    return { filters: { ...state.filters, selectedColors: colors } };
  }),

  toggleSizeFilter: (size) => set((state) => {
    const sizes = state.filters.selectedSizes.includes(size)
      ? state.filters.selectedSizes.filter((s) => s !== size)
      : [...state.filters.selectedSizes, size];
    return { filters: { ...state.filters, selectedSizes: sizes } };
  }),

  setSortBy: (sortBy) => set((state) => ({ 
    filters: { ...state.filters, sortBy } 
  })),

  toggleStockFilter: () => set((state) => ({ 
    filters: { ...state.filters, onlyInStock: !state.filters.onlyInStock } 
  })),

  resetFilters: () => set(() => ({
    filters: {
      category: 'Todos',
      searchQuery: '',
      minPrice: 0,
      maxPrice: 300,
      selectedColors: [],
      selectedSizes: [],
      sortBy: 'relevance',
      onlyInStock: false,
    }
  })),

  setCheckoutStep: (checkoutStep) => set({ checkoutStep }),
  
  updateCheckoutAddress: (address) => set((state) => ({
    checkoutShippingAddress: { ...state.checkoutShippingAddress, ...address }
  })),

  setCheckoutShippingMethod: (checkoutShippingMethod) => set({ checkoutShippingMethod }),

  updateCheckoutCard: (card) => set((state) => ({
    checkoutCardInfo: { ...state.checkoutCardInfo, ...card }
  })),

  submitCheckout: () => {
    const state = get();
    if (state.cart.length === 0) return null;
    
    const cartSubtotal = state.cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    const discount = cartSubtotal * state.discountRate;
    const isFreeShipping = cartSubtotal - discount >= state.freeShippingThreshold;
    const shippingCost = isFreeShipping 
      ? 0 
      : state.checkoutShippingMethod === 'express' ? 15 : 5;
    
    const tax = parseFloat(((cartSubtotal - discount) * 0.18).toFixed(2));
    const total = parseFloat((cartSubtotal - discount + tax + shippingCost).toFixed(2));
    
    const newOrder: Order = {
      id: `ord-${Math.floor(100000 + Math.random() * 900000)}`,
      items: state.cart,
      subtotal: cartSubtotal,
      tax,
      shippingCost,
      discount,
      total,
      date: new Date().toISOString().split('T')[0],
      status: 'processing',
      shippingAddress: state.checkoutShippingAddress,
      shippingMethod: state.checkoutShippingMethod,
    };
    
    state.addOrder(newOrder);
    
    state.cart.forEach((item) => {
      const stockKey = `${item.selectedSize}-${item.selectedColor.name}`;
      const currentStock = item.product.stock[stockKey] ?? 0;
      state.updateProductStock(item.product.id, stockKey, Math.max(0, currentStock - item.quantity));
    });
    
    set({
      cart: [],
      couponCode: '',
      discountRate: 0,
      checkoutStep: 4,
      checkoutShippingAddress: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
      },
      checkoutCardInfo: {
        number: '',
        name: '',
        expiry: '',
        cvv: '',
      }
    });

    return newOrder;
  },

  setActiveView: (activeView) => set(() => {
    if (activeView === 'checkout') {
      return { activeView, checkoutStep: 1 };
    }
    return { activeView };
  }),
  setSelectedProductId: (selectedProductId) => set({ selectedProductId }),
  setCartDrawerOpen: (isCartDrawerOpen) => set({ isCartDrawerOpen }),
  setFilterSidebarOpen: (isFilterSidebarOpen) => set({ isFilterSidebarOpen }),
  setQuickViewProductId: (quickViewProductId) => set({ quickViewProductId }),

  setTrackingOrderId: (trackingOrderId) => set({ trackingOrderId }),
  addCoupon: (coupon) => set((state) => ({ coupons: [coupon, ...state.coupons] })),
  deleteCoupon: (code) => set((state) => ({ coupons: state.coupons.filter((c) => c.code !== code) })),
  toggleCoupon: (code) => set((state) => ({
    coupons: state.coupons.map((c) => c.code === code ? { ...c, active: !c.active } : c)
  })),
  addNewProduct: (product) => set((state) => ({ products: [product, ...state.products] })),
  deleteProduct: (productId) => set((state) => ({
    products: state.products.filter((p) => p.id !== productId)
  })),
  updateOrderStatus: (orderId, status) => set((state) => ({
    orders: state.orders.map((o) => o.id === orderId ? { ...o, status } : o)
  })),

  toggleWishlist: (productId) => set((state) => {
    const exists = state.wishlist.includes(productId);
    return {
      wishlist: exists
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId]
    };
  }),

  clearWishlist: () => set({ wishlist: [] }),

  addToRecentlyViewed: (productId) => set((state) => {
    const filtered = state.recentlyViewed.filter((id) => id !== productId);
    return { recentlyViewed: [productId, ...filtered].slice(0, 8) };
  }),

      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false, user: mockUser }),
    }),
    {
      name: 'vibe-shopify-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        recentlyViewed: state.recentlyViewed,
        isLoggedIn: state.isLoggedIn,
        user: state.user,
        orders: state.orders,
        coupons: state.coupons,
        products: state.products
      }),
    }
  )
);
