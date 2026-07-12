export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  tags: string[];
  colors: ProductColor[];
  sizes: string[];
  stock: { [key: string]: number };
  details: string[];
  reviews: Review[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedColor: ProductColor;
  selectedSize: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shippingCost: number;
  discount: number;
  total: number;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
  shippingAddress: ShippingAddress;
  shippingMethod: 'standard' | 'express';
}

export interface User {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  role?: 'admin' | 'customer';
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

export interface Coupon {
  code: string;
  discountRate: number;
  active: boolean;
}

export type ActiveView =
  | 'home'
  | 'catalog'
  | 'pdp'
  | 'cart'
  | 'checkout'
  | 'profile'
  | 'admin'
  | 'track'
  | 'help'
  | 'blog'
  | 'wishlist'
  | 'auth'
  | 'about'
  | 'deals'
  | 'collections'
  | 'sizeguide'
  | 'returns'
  | 'notfound';
