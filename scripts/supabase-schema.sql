-- 1. Crear tabla de productos
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  rating NUMERIC,
  review_count INTEGER,
  images TEXT[],
  category TEXT NOT NULL,
  tags TEXT[],
  colors JSONB,
  sizes TEXT[],
  stock JSONB,
  details TEXT[],
  reviews JSONB
);

-- 2. Crear tabla de órdenes
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  items JSONB NOT NULL,
  subtotal NUMERIC NOT NULL,
  tax NUMERIC NOT NULL,
  shipping_cost NUMERIC NOT NULL,
  discount NUMERIC NOT NULL,
  total NUMERIC NOT NULL,
  date TEXT NOT NULL,
  status TEXT NOT NULL,
  shipping_address JSONB NOT NULL,
  shipping_method TEXT NOT NULL
);

-- 3. Crear tabla de cupones
CREATE TABLE IF NOT EXISTS coupons (
  code TEXT PRIMARY KEY,
  discount_rate NUMERIC NOT NULL,
  active BOOLEAN NOT NULL
);

-- Desactivar Row Level Security (RLS) para permitir acceso de lectura/escritura directo
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE coupons DISABLE ROW LEVEL SECURITY;

-- Insertar cupones por defecto
INSERT INTO coupons (code, discount_rate, active)
VALUES 
  ('VIBE20', 0.20, true),
  ('SHOPIFY10', 0.10, true),
  ('FREESHIP', 0.00, true)
ON CONFLICT (code) DO NOTHING;
