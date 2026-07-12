import type { Product } from '../types/store';

export const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'Auriculares Inalámbricos SoundAura Pro',
    description: 'Experimenta la pureza absoluta del sonido con los SoundAura Pro. Equipados con Cancelación Activa de Ruido Inteligente (ANC), transductores de alta resolución y una autonomía estelar de 40 horas. Su diseño ergonómico y almohadillas de espuma viscoelástica garantizan comodidad durante todo el día.',
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviewCount: 142,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80'
    ],
    category: 'Audio',
    tags: ['Premium', 'Best Seller', 'Wireless'],
    colors: [
      { name: 'Negro Mate', hex: '#18181b' },
      { name: 'Plata Lunar', hex: '#d4d4d8' },
      { name: 'Cobre Cálido', hex: '#b45309' }
    ],
    sizes: ['Estándar'],
    stock: {
      'Estándar-Negro Mate': 15,
      'Estándar-Plata Lunar': 8,
      'Estándar-Cobre Cálido': 3
    },
    details: [
      'Cancelación de ruido activa de nivel híbrido de hasta 48dB.',
      'Transductores de 40 mm diseñados a medida para audio espacial.',
      'Conectividad multipunto a través de Bluetooth 5.3 de baja latencia.',
      'Carga ultra rápida: 5 minutos de carga proporcionan 4 horas de reproducción.'
    ],
    reviews: [
      {
        id: 'rev-101',
        author: 'Alejandro G.',
        rating: 5,
        comment: 'La cancelación de ruido es simplemente espectacular, mejor que otras marcas de renombre. Son muy cómodos para viajes largos.',
        date: '2026-06-15'
      },
      {
        id: 'rev-102',
        author: 'Mariana T.',
        rating: 4.5,
        comment: 'Calidad de audio premium, los bajos son nítidos y no distorsionan. El color cobre cálido se ve súper elegante.',
        date: '2026-07-02'
      }
    ]
  },
  {
    id: 'prod-002',
    name: 'Cronos Active Smartwatch X',
    description: 'Monitorea tu salud y supera tus límites con el Cronos Active X. Pantalla AMOLED de alta luminosidad, GPS integrado de doble banda, monitoreo continuo de SpO2, ritmo cardíaco y niveles de estrés. Diseñado para resistir condiciones extremas y acompañarte en cada aventura.',
    price: 189,
    originalPrice: 229,
    rating: 4.6,
    reviewCount: 98,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80'
    ],
    category: 'Accesorios',
    tags: ['Deporte', 'Wearables', 'Novedad'],
    colors: [
      { name: 'Gris Carbón', hex: '#27272a' },
      { name: 'Verde Bosque', hex: '#14532d' }
    ],
    sizes: ['40mm', '44mm'],
    stock: {
      '40mm-Gris Carbón': 12,
      '44mm-Gris Carbón': 0,
      '40mm-Verde Bosque': 5,
      '44mm-Verde Bosque': 6
    },
    details: [
      'Pantalla táctil AMOLED de 1.43 pulgadas Always-On.',
      'Resistencia al agua hasta 5 ATM (50 metros).',
      'Más de 120 modos deportivos con reconocimiento automático.',
      'Batería con duración de hasta 14 días de uso regular.'
    ],
    reviews: [
      {
        id: 'rev-201',
        author: 'Carlos R.',
        rating: 4,
        comment: 'Excelente reloj para hacer running. El GPS responde rápido y la duración de la batería es increíble comparado con mi smartwatch anterior.',
        date: '2026-05-20'
      }
    ]
  },
  {
    id: 'prod-003',
    name: 'Mochila Minimalista UrbanPack 20L',
    description: 'La UrbanPack 20L redefine la movilidad urbana. Su compartimento principal expandible, compartimiento acolchado para laptops de hasta 16 pulgadas y material impermeable de alta resistencia la convierten en la aliada ideal para el día a día. Estética limpia para mentes modernas.',
    price: 89,
    rating: 4.7,
    reviewCount: 215,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80'
    ],
    category: 'Moda',
    tags: ['Equipaje', 'Impermeable', 'Popular'],
    colors: [
      { name: 'Gris Grafito', hex: '#3f3f46' },
      { name: 'Azul Abismo', hex: '#1e3a8a' },
      { name: 'Crema Arena', hex: '#fef08a' }
    ],
    sizes: ['Única'],
    stock: {
      'Única-Gris Grafito': 25,
      'Única-Azul Abismo': 14,
      'Única-Crema Arena': 2
    },
    details: [
      'Tejido Cordura Ballistic impermeable de alta durabilidad.',
      'Compartimento flotante para portátil con forro de terciopelo.',
      'Bolsillo trasero de seguridad oculto para pasaporte y billetera.',
      'Correas de hombro ergonómicas de espuma EVA transpirable.'
    ],
    reviews: [
      {
        id: 'rev-301',
        author: 'Sofía L.',
        rating: 5,
        comment: 'Tiene bolsillos para todo. El espacio para la laptop está súper bien acolchado y la tela exterior realmente repele el agua.',
        date: '2026-06-28'
      }
    ]
  },
  {
    id: 'prod-004',
    name: 'Zapatillas Horizon Runner Evo',
    description: 'Rompe marcas personales con las Horizon Runner Evo. Diseñadas con nuestra espuma reactiva de doble densidad y una placa estabilizadora para maximizar el retorno de energía. La parte superior de malla transpirable envuelve el pie proporcionando máxima frescura en carreras intensas.',
    price: 160,
    originalPrice: 180,
    rating: 4.9,
    reviewCount: 76,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'
    ],
    category: 'Moda',
    tags: ['Deporte', 'Calzado', 'Best Seller'],
    colors: [
      { name: 'Blanco Puro', hex: '#fafafa' },
      { name: 'Gris Trueno', hex: '#52525b' },
      { name: 'Naranja Fuego', hex: '#ea580c' }
    ],
    sizes: ['38', '40', '42', '44'],
    stock: {
      '38-Blanco Puro': 4,
      '40-Blanco Puro': 8,
      '42-Blanco Puro': 10,
      '44-Blanco Puro': 5,
      '38-Gris Trueno': 6,
      '40-Gris Trueno': 0,
      '42-Gris Trueno': 12,
      '44-Gris Trueno': 2,
      '38-Naranja Fuego': 1,
      '40-Naranja Fuego': 3,
      '42-Naranja Fuego': 5,
      '44-Naranja Fuego': 0
    },
    details: [
      'Entresuela reactiva NitroFoam para una amortiguación dinámica.',
      'Suela exterior Grip rubber de tracción multidireccional extrema.',
      'Placa estabilizadora de TPU integrada en la base del pie.',
      'Drop de talón de 8 mm para transiciones fluidas.'
    ],
    reviews: [
      {
        id: 'rev-401',
        author: 'Daniel M.',
        rating: 5,
        comment: 'Comodísimas. Siento que me impulsan al correr. La talla es exacta, recomiendo pedir tu número normal.',
        date: '2026-07-09'
      }
    ]
  },
  {
    id: 'prod-005',
    name: 'Chaqueta Impermeable Explorer Shell',
    description: 'La chaqueta Explorer Shell ofrece protección insuperable contra tormentas y vientos fríos. Su membrana de tres capas impermeable y transpirable regula la temperatura interna durante esfuerzos intensos en montaña o ciudad. Costuras termo-selladas y cremalleras estancas.',
    price: 210,
    rating: 4.5,
    reviewCount: 54,
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80'
    ],
    category: 'Moda',
    tags: ['Abrigos', 'Impermeable', 'Novedad'],
    colors: [
      { name: 'Amarillo Aventura', hex: '#eab308' },
      { name: 'Negro Profundo', hex: '#09090b' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: {
      'S-Amarillo Aventura': 3,
      'M-Amarillo Aventura': 5,
      'L-Amarillo Aventura': 4,
      'XL-Amarillo Aventura': 2,
      'S-Negro Profundo': 6,
      'M-Negro Profundo': 8,
      'L-Negro Profundo': 10,
      'XL-Negro Profundo': 3
    },
    details: [
      'Membrana técnica de 3 capas con 20,000 mm de columna de agua.',
      'Transpirabilidad excepcional: 15,000 g/m²/24h.',
      'Cremalleras de ventilación axilar con tiradores dobles.',
      'Capucha ajustable compatible con cascos de escalada y ciclismo.'
    ],
    reviews: [
      {
        id: 'rev-501',
        author: 'Laura K.',
        rating: 5,
        comment: 'La he usado bajo lluvia fuerte en senderismo y ni una gota ha pasado. El color amarillo es precioso y muy visible.',
        date: '2026-06-11'
      }
    ]
  },
  {
    id: 'prod-006',
    name: 'Botella Térmica HydroLux 750ml',
    description: 'Mantente hidratado con HydroLux, construida con acero inoxidable de grado alimenticio y tecnología de aislamiento de doble pared al vacío. Mantiene tus bebidas frías hasta por 24 horas o calientes hasta por 12 horas. Su recubrimiento de pintura en polvo previene rayones.',
    price: 35,
    originalPrice: 42,
    rating: 4.7,
    reviewCount: 320,
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80'
    ],
    category: 'Accesorios',
    tags: ['Ecológico', 'Hogar', 'Accesorios'],
    colors: [
      { name: 'Verde Menta', hex: '#a7f3d0' },
      { name: 'Oasis Coral', hex: '#fda4af' },
      { name: 'Azul Acero', hex: '#60a5fa' }
    ],
    sizes: ['750ml'],
    stock: {
      '750ml-Verde Menta': 40,
      '750ml-Oasis Coral': 25,
      '750ml-Azul Acero': 18
    },
    details: [
      'Acero inoxidable 18/8 de doble pared ultra duradero.',
      '100% Libre de BPA, ftalatos y otras toxinas dañinas.',
      'Tapón hermético a prueba de fugas con asa de transporte integrada.',
      'No suda en frío ni transmite calor al exterior.'
    ],
    reviews: [
      {
        id: 'rev-601',
        author: 'Esteban H.',
        rating: 4.8,
        comment: 'Increíble aislamiento. Puse hielo en la mañana y por la noche seguía casi intacto. El recubrimiento mate da un súper buen agarre.',
        date: '2026-07-05'
      }
    ]
  }
];
export const mockCouponCodes: { [code: string]: number } = {
  'VIBE20': 0.20,
  'SHOPIFY10': 0.10,
  'FREESHIP': 0.00
};
export const mockUser: { fullName: string; email: string; phone: string; address: string; city: string; postalCode: string; country: string; role?: 'admin' | 'customer' } = {
  fullName: 'Javier Vasquez',
  email: 'javier.vasquez@vibecommerce.com',
  phone: '+51 987 654 321',
  address: 'Av. Diagonal 450, Dpto 802',
  city: 'Lima',
  postalCode: '15074',
  country: 'Perú',
  role: 'customer'
};
