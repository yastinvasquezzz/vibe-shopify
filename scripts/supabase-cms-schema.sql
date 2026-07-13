-- ==========================================
-- SCRIPT DE ESQUEMA DE BASE DE DATOS PARA EL CMS
-- VIBE.shop - Base de Datos de Ofertas, Blog y Colecciones
-- ==========================================

-- 1. Tabla de Artículos del Blog
CREATE TABLE IF NOT EXISTS public.articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  image TEXT,
  date TEXT NOT NULL,
  read_time TEXT NOT NULL
);

-- Desactivar RLS
ALTER TABLE public.articles DISABLE ROW LEVEL SECURITY;

-- Poblar datos de prueba en la tabla de Artículos
INSERT INTO public.articles (id, title, excerpt, content, image, date, read_time)
VALUES 
(
  'art-001', 
  'El Futuro del Audio Inalámbrico: Lo que debes saber', 
  '¿Es el sonido espacial el próximo paso evolutivo? Analizamos la cancelación de ruido híbrida y los transductores viscoelásticos en auriculares premium.', 
  'El mercado del audio inalámbrico ha crecido exponencialmente en los últimos años. Lo que antes era una característica opcional, hoy es un estándar absoluto: la Cancelación Activa de Ruido (ANC). Los transductores acústicos modernos son capaces de anular hasta 48dB de sonido ambiental a través de micrófonos duales de nivel híbrido. Además, la transmisión de audio espacial y las conexiones Bluetooth 5.3 con codecs de baja latencia permiten una inmersión completa sin distorsiones en cualquier entorno. Pero no todo es software; la comodidad física es vital. Las espumas viscoelásticas termo-sensibles se adaptan a la presión craneal reduciendo la fatiga tras largas horas de uso.', 
  'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80', 
  '2026-07-10', 
  '4 min'
),
(
  'art-002', 
  'Diseño Minimalista en la Moda y Accesorios de Viaje', 
  '¿Cómo influye la estética limpia y el uso de materiales de alta durabilidad en nuestro día a día?', 
  'El diseño minimalista no consiste simplemente en quitar elementos superfluos; se trata de potenciar al máximo la funcionalidad esencial. La mochila UrbanPack es el ejemplo idóneo: construida con fibras de Cordura Ballistic impermeable, ofrece protección extrema contra los elementos manteniendo una silueta aerodinámica y estilizada. Este enfoque minimalista nos libera del ruido visual y nos permite enfocarnos en el trayecto. Desde bolsillos magnéticos ocultos hasta correas ergonómicas de espuma EVA transpirable, cada detalle cuenta en el desarrollo de accesorios modernos.', 
  'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80', 
  '2026-07-05', 
  '3 min'
)
ON CONFLICT (id) DO NOTHING;


-- 2. Tabla de Colecciones / Categorías
CREATE TABLE IF NOT EXISTS public.collections (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT
);

-- Desactivar RLS
ALTER TABLE public.collections DISABLE ROW LEVEL SECURITY;

-- Poblar datos de prueba en la tabla de Colecciones
INSERT INTO public.collections (id, name, description, image_url)
VALUES 
(
  'col-audio', 
  'Audio', 
  'Auriculares de diadema y sistemas de audio espacial de fidelidad acústica premium.', 
  'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80'
),
(
  'col-moda', 
  'Moda', 
  'Indumentaria contemporánea, calzado técnico y prendas minimalistas.', 
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80'
),
(
  'col-accesorios', 
  'Accesorios', 
  'Mochilas técnicas de viaje, relojes minimalistas y organizadores urbanos.', 
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'
)
ON CONFLICT (id) DO NOTHING;


-- 3. Tabla de Configuraciones (Settings) para la Oferta del Día
CREATE TABLE IF NOT EXISTS public.settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL
);

-- Desactivar RLS
ALTER TABLE public.settings DISABLE ROW LEVEL SECURITY;

-- Poblar el setting por defecto de la oferta del día
INSERT INTO public.settings (key, value)
VALUES 
(
  'deal_of_the_day', 
  '{"productId": "prod-001", "discountRate": 0.20}'
)
ON CONFLICT (key) DO NOTHING;
