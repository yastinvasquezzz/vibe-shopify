import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, CartItem, Order, User, ShippingAddress, ProductColor, Article, Coupon, ActiveView } from '../types/store';
import { mockProducts, mockUser } from '../data/mockData';
import { supabase } from '../lib/supabaseClient';

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
  allUsers: User[];

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
  fetchProducts: () => Promise<void>;
  fetchCoupons: () => Promise<void>;
  fetchOrders: () => Promise<void>;
  checkSession: () => Promise<void>;
  fetchAllUsers: () => Promise<void>;
  updateUserRole: (email: string, role: 'admin' | 'customer') => Promise<void>;
  updateProductDetails: (productId: string, updatedProduct: Partial<Product>) => Promise<void>;
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
  allUsers: [],

  setProducts: (products) => set({ products }),
  
  updateProductStock: async (productId, variantKey, newStock) => {
    const product = get().products.find(p => p.id === productId);
    if (!product) return;
    const updatedStock = { ...product.stock, [variantKey]: newStock };

    set((state) => {
      const updatedProducts = state.products.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            stock: updatedStock
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

    try {
      await supabase.from('products').update({ stock: updatedStock }).eq('id', productId);
    } catch (err) {
      console.error('Supabase stock update error:', err);
    }
  },

  updateProductPrice: async (productId, newPrice) => {
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

    try {
      await supabase.from('products').update({ price: newPrice }).eq('id', productId);
    } catch (err) {
      console.error('Supabase price update error:', err);
    }
  },

  updateUser: (user) => set({ user }),
  
  addOrder: async (order) => {
    set((state) => ({ orders: [order, ...state.orders] }));
    try {
      await supabase.from('orders').insert({
        id: order.id,
        items: order.items,
        subtotal: order.subtotal,
        tax: order.tax,
        shipping_cost: order.shippingCost,
        discount: order.discount,
        total: order.total,
        date: order.date,
        status: order.status,
        shipping_address: order.shippingAddress,
        shipping_method: order.shippingMethod
      });
    } catch (err) {
      console.error('Supabase order insert error:', err);
    }
  },
  
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
  addCoupon: async (coupon) => {
    set((state) => ({ coupons: [coupon, ...state.coupons] }));
    try {
      await supabase.from('coupons').insert({
        code: coupon.code,
        discount_rate: coupon.discountRate,
        active: coupon.active
      });
    } catch (err) {
      console.error('Supabase coupon insert error:', err);
    }
  },
  deleteCoupon: async (code) => {
    set((state) => ({ coupons: state.coupons.filter((c) => c.code !== code) }));
    try {
      await supabase.from('coupons').delete().eq('code', code);
    } catch (err) {
      console.error('Supabase coupon delete error:', err);
    }
  },
  toggleCoupon: async (code) => {
    const coupon = get().coupons.find(c => c.code === code);
    if (!coupon) return;
    const nextActive = !coupon.active;
    set((state) => ({
      coupons: state.coupons.map((c) => c.code === code ? { ...c, active: nextActive } : c)
    }));
    try {
      await supabase.from('coupons').update({ active: nextActive }).eq('code', code);
    } catch (err) {
      console.error('Supabase coupon toggle error:', err);
    }
  },
  addNewProduct: async (product) => {
    set((state) => ({ products: [product, ...state.products] }));
    try {
      await supabase.from('products').insert({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        original_price: product.originalPrice || null,
        rating: product.rating,
        review_count: product.reviewCount,
        images: product.images,
        category: product.category,
        tags: product.tags,
        colors: product.colors,
        sizes: product.sizes,
        stock: product.stock,
        details: product.details,
        reviews: product.reviews
      });
    } catch (err) {
      console.error('Supabase product insert error:', err);
    }
  },
  deleteProduct: async (productId) => {
    set((state) => ({
      products: state.products.filter((p) => p.id !== productId)
    }));
    try {
      await supabase.from('products').delete().eq('id', productId);
    } catch (err) {
      console.error('Supabase product delete error:', err);
    }
  },
  updateOrderStatus: async (orderId, status) => {
    set((state) => ({
      orders: state.orders.map((o) => o.id === orderId ? { ...o, status } : o)
    }));
    try {
      await supabase.from('orders').update({ status }).eq('id', orderId);
    } catch (err) {
      console.error('Supabase order status update error:', err);
    }
  },

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
      logout: () => {
        set({ isLoggedIn: false, user: mockUser });
        supabase.auth.signOut().catch(err => console.error('Signout error:', err));
      },

      checkSession: async () => {
        try {
          const { data } = await supabase.auth.getSession();
          if (data.session && data.session.user) {
            const profile = data.session.user;
            
            // Query the custom users table for profile information
            const { data: dbUser } = await supabase
              .from('users')
              .select('*')
              .eq('email', profile.email)
              .maybeSingle();

            set({
              isLoggedIn: true,
              user: {
                fullName: dbUser?.full_name || profile.user_metadata.full_name || 'Usuario Vibe',
                email: profile.email || '',
                phone: dbUser?.phone || '',
                address: dbUser?.address || '',
                city: dbUser?.city || '',
                postalCode: dbUser?.postal_code || '',
                country: dbUser?.country || '',
                role: (dbUser?.role as 'admin' | 'customer') || 'customer'
              }
            });
          }
        } catch (err) {
          console.error('Error checking Supabase session:', err);
        }
      },

      fetchProducts: async () => {
        try {
          const { data, error } = await supabase.from('products').select('*');
          if (error) throw error;
          
          if (!data || data.length === 0) {
            const formatted = mockProducts.map(p => ({
              id: p.id,
              name: p.name,
              description: p.description,
              price: p.price,
              original_price: p.originalPrice || null,
              rating: p.rating,
              review_count: p.reviewCount,
              images: p.images,
              category: p.category,
              tags: p.tags,
              colors: p.colors,
              sizes: p.sizes,
              stock: p.stock,
              details: p.details,
              reviews: p.reviews
            }));
            await supabase.from('products').insert(formatted);
            set({ products: mockProducts });
          } else {
            const mapped = data.map((p: any) => ({
              id: p.id,
              name: p.name,
              description: p.description,
              price: Number(p.price),
              originalPrice: p.original_price ? Number(p.original_price) : undefined,
              rating: Number(p.rating),
              reviewCount: Number(p.review_count),
              images: p.images,
              category: p.category,
              tags: p.tags,
              colors: p.colors,
              sizes: p.sizes,
              stock: p.stock,
              details: p.details,
              reviews: p.reviews
            }));
            set({ products: mapped });
          }
        } catch (err) {
          console.error('Error fetching products from Supabase:', err);
        }
      },

      fetchCoupons: async () => {
        try {
          const { data, error } = await supabase.from('coupons').select('*');
          if (error) throw error;
          if (data && data.length > 0) {
            const mapped = data.map((c: any) => ({
              code: c.code,
              discountRate: Number(c.discount_rate),
              active: c.active
            }));
            set({ coupons: mapped });
          }
        } catch (err) {
          console.error('Error fetching coupons:', err);
        }
      },

      fetchOrders: async () => {
        try {
          const { data, error } = await supabase.from('orders').select('*');
          if (error) throw error;
          if (data) {
            const mapped = data.map((o: any) => ({
              id: o.id,
              items: o.items,
              subtotal: Number(o.subtotal),
              tax: Number(o.tax),
              shippingCost: Number(o.shipping_cost),
              discount: Number(o.discount),
              total: Number(o.total),
              date: o.date,
              status: o.status,
              shippingAddress: o.shipping_address,
              shippingMethod: o.shipping_method
            }));
            set({ orders: mapped });
          }
        } catch (err) {
          console.error('Error fetching orders:', err);
        }
      },

      fetchAllUsers: async () => {
        try {
          const { data, error } = await supabase.from('users').select('*');
          if (error) throw error;
          if (data) {
            const mapped = data.map((u: any) => ({
              fullName: u.full_name,
              email: u.email,
              phone: u.phone || '',
              address: u.address || '',
              city: u.city || '',
              postalCode: u.postal_code || '',
              country: u.country || '',
              role: u.role || 'customer'
            }));
            set({ allUsers: mapped });
          }
        } catch (err) {
          console.error('Error fetching all users:', err);
        }
      },

      updateUserRole: async (email, role) => {
        set((state) => ({
          allUsers: state.allUsers.map((u) => u.email === email ? { ...u, role } : u)
        }));
        try {
          const { error } = await supabase
            .from('users')
            .update({ role })
            .eq('email', email);
          if (error) throw error;
        } catch (err) {
          console.error('Error updating user role:', err);
        }
      },

      updateProductDetails: async (productId, updatedProduct) => {
        set((state) => ({
          products: state.products.map((p) => p.id === productId ? { ...p, ...updatedProduct } : p)
        }));
        try {
          const { error } = await supabase
            .from('products')
            .update({
              name: updatedProduct.name,
              description: updatedProduct.description,
              price: updatedProduct.price,
              original_price: updatedProduct.originalPrice || null,
              category: updatedProduct.category,
              tags: updatedProduct.tags,
              images: updatedProduct.images,
              colors: updatedProduct.colors,
              sizes: updatedProduct.sizes,
              stock: updatedProduct.stock,
              details: updatedProduct.details
            })
            .eq('id', productId);
          if (error) throw error;
        } catch (err) {
          console.error('Error updating product details:', err);
        }
      },
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
