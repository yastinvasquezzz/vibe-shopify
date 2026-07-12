const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '../src/data/mockData.ts');

const initialProducts = [
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
  },
  {
    id: 'prod-007',
    name: 'Auriculares Deportivos FitBuds Active',
    description: 'Auriculares deportivos ergonómicos con ganchos de sujeción flexibles, resistentes a la sudoración profunda y sonido de alto impacto con graves reforzados para motivar tus entrenamientos.',
    price: 129,
    originalPrice: 159,
    rating: 4.6,
    reviewCount: 88,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80'
    ],
    category: 'Audio',
    tags: ['Deporte', 'Resistente', 'Oferta'],
    colors: [
      { name: 'Negro Voltio', hex: '#1e1b4b' },
      { name: 'Amarillo Neón', hex: '#a3e635' }
    ],
    sizes: ['M'],
    stock: {
      'M-Negro Voltio': 14,
      'M-Amarillo Neón': 20
    },
    details: [
      'Clasificación IPX7 de resistencia al agua y al sudor.',
      'Hasta 8 horas de batería en los auriculares y 24 horas extra con el estuche.',
      'Ganchos para la oreja ajustables y seguros para máxima estabilidad.',
      'Controladores dinámicos de 10 mm optimizados para bajos.'
    ],
    reviews: [
      {
        id: 'rev-701',
        author: 'Roberto F.',
        rating: 5,
        comment: 'No se caen por nada mientras corro y el sonido es muy potente.',
        date: '2026-07-01'
      }
    ]
  },
  {
    id: 'prod-008',
    name: 'Gafas de Sol Polarizadas VibeShades',
    description: 'Protege tu vista con estilo. Las VibeShades cuentan con lentes polarizadas con filtro UV400 y montura de policarbonato ligera de alta resistencia para un look moderno y urbano.',
    price: 79,
    rating: 4.8,
    reviewCount: 112,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80'
    ],
    category: 'Accesorios',
    tags: ['Estilo', 'Verano', 'Popular'],
    colors: [
      { name: 'Negro Clásico', hex: '#09090b' },
      { name: 'Marrón Carey', hex: '#78350f' }
    ],
    sizes: ['Estándar'],
    stock: {
      'Estándar-Negro Clásico': 35,
      'Estándar-Marrón Carey': 18
    },
    details: [
      'Lentes polarizadas TAC con reducción del deslumbramiento.',
      'Protección 100% contra rayos UVA y UVB (UV400).',
      'Montura de policarbonato ultra ligera y flexible.',
      'Incluye estuche de microfibra de limpieza ecológica.'
    ],
    reviews: [
      {
        id: 'rev-801',
        author: 'Lucía P.',
        rating: 5,
        comment: 'Ligeras, cómodas y la polarización es de primera calidad. Se ven geniales.',
        date: '2026-07-03'
      }
    ]
  },
  {
    id: 'prod-009',
    name: 'Sudadera Oversize Urban Hoodie',
    description: 'Confort térmico absoluto con estilo urbano. Confeccionada con una mezcla de algodón pesado premium y felpa interior cepillada. Hombros caídos y un ajuste relajado perfecto para el frío.',
    price: 149,
    originalPrice: 179,
    rating: 4.7,
    reviewCount: 95,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80'
    ],
    category: 'Moda',
    tags: ['Oversize', 'Confort', 'Frío'],
    colors: [
      { name: 'Gris Melange', hex: '#71717a' },
      { name: 'Crema Hueso', hex: '#f5f5f4' }
    ],
    sizes: ['S', 'M', 'L'],
    stock: {
      'S-Gris Melange': 12,
      'M-Gris Melange': 15,
      'L-Gris Melange': 8,
      'S-Crema Hueso': 5,
      'M-Crema Hueso': 10,
      'L-Crema Hueso': 4
    },
    details: [
      'Tejido de felpa pesada de 400 g/m² de algodón orgánico.',
      'Capucha de doble capa sin cordones para un diseño minimalista.',
      'Bolsillo tipo canguro delantero espacioso.',
      'Puños y dobladillo acanalados de alta elasticidad.'
    ],
    reviews: [
      {
        id: 'rev-901',
        author: 'Diego V.',
        rating: 4.5,
        comment: 'El material es súper grueso y abrigador, la caída oversize queda espectacular.',
        date: '2026-07-04'
      }
    ]
  },
  {
    id: 'prod-010',
    name: 'Gorra Deportiva FlexCap',
    description: 'Mantente fresco bajo el sol. Gorra ligera con paneles traseros microperforados láser para una ventilación superior, banda absorbente interna contra el sudor y correa de ajuste seguro.',
    price: 49,
    rating: 4.4,
    reviewCount: 63,
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      'https://images.unsplash.com/photo-1534215754734-18e55d13ce35?w=800&q=80'
    ],
    category: 'Moda',
    tags: ['Deporte', 'Básicos', 'Accesorios'],
    colors: [
      { name: 'Negro Obsidiana', hex: '#18181b' },
      { name: 'Blanco Deportivo', hex: '#f4f4f5' }
    ],
    sizes: ['Única'],
    stock: {
      'Única-Negro Obsidiana': 25,
      'Única-Blanco Deportivo': 15
    },
    details: [
      'Tejido técnico transpirable de secado ultra rápido.',
      'Paneles de ventilación perforados con láser en los laterales.',
      'Cierre de hebilla de perfil bajo con banda elástica.',
      'Visera semi-curva estructurada.'
    ],
    reviews: [
      {
        id: 'rev-1001',
        author: 'Marcos A.',
        rating: 4.5,
        comment: 'Súper liviana y ventilada para salir a correr al mediodía.',
        date: '2026-06-20'
      }
    ]
  },
  {
    id: 'prod-011',
    name: 'Parlante Inalámbrico SoundWave Outdoor',
    description: 'Sonido estéreo envolvente de 360 grados y 20W de potencia para exteriores. El SoundWave cuenta con protección IPX7 contra agua, radiadores pasivos duales y 16 horas de batería continua.',
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    reviewCount: 154,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80'
    ],
    category: 'Audio',
    tags: ['Sonido', 'Portátil', 'Impermeable'],
    colors: [
      { name: 'Negro Carbón', hex: '#0f172a' },
      { name: 'Rojo Carmín', hex: '#991b1b' }
    ],
    sizes: ['Estándar'],
    stock: {
      'Estándar-Negro Carbón': 20,
      'Estándar-Rojo Carmín': 10
    },
    details: [
      'Tecnología SoundDirection de 360° con drivers activos duales.',
      'Certificación IPX7 a prueba de agua (sumergible hasta 1m por 30min).',
      'Batería recargable de 4000mAh para 16 horas de música.',
      'Función PartySync para emparejar 2 altavoces en estéreo real.'
    ],
    reviews: [
      {
        id: 'rev-1101',
        author: 'Esteban C.',
        rating: 5,
        comment: 'El volumen que tiene para su tamaño es brutal, y los bajos se sienten excelente en exteriores.',
        date: '2026-07-07'
      }
    ]
  },
  {
    id: 'prod-012',
    name: 'Cargador Portátil PowerMatrix 10K',
    description: 'Energía de respaldo ultra compacta de 10,000mAh con soporte de carga rápida Power Delivery (PD) de 22.5W. Pantalla LED digital inteligente indicadora de porcentaje de batería restante.',
    price: 89,
    rating: 4.7,
    reviewCount: 180,
    images: [
      'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80'
    ],
    category: 'Accesorios',
    tags: ['Carga', 'Viajes', 'Básicos'],
    colors: [
      { name: 'Gris Titanio', hex: '#4b5563' },
      { name: 'Blanco Glaciar', hex: '#f3f4f6' }
    ],
    sizes: ['Estándar'],
    stock: {
      'Estándar-Gris Titanio': 30,
      'Estándar-Blanco Glaciar': 25
    },
    details: [
      'Capacidad real de 10,000 mAh para cargar 2-3 veces tu smartphone.',
      'Carga rápida bidireccional USB-C Power Delivery de 22.5W.',
      'Pantalla LED oculta con indicador de nivel digital en tiempo real.',
      'Protecciones integradas contra sobrecalentamiento y cortounidades.'
    ],
    reviews: [
      {
        id: 'rev-1201',
        author: 'Andrea M.',
        rating: 5,
        comment: 'Súper compacta, entra fácil en el bolsillo del pantalón y carga mi teléfono muy rápido.',
        date: '2026-07-02'
      }
    ]
  }
];

const categories = ['Audio', 'Moda', 'Accesorios'];
const sizesByCategory = {
  'Audio': ['Estándar', 'Pro'],
  'Moda': ['S', 'M', 'L', 'XL'],
  'Accesorios': ['Estándar', 'Única']
};

const colorsPool = [
  { name: 'Negro Mate', hex: '#18181b' },
  { name: 'Plata Lunar', hex: '#d4d4d8' },
  { name: 'Azul Marino', hex: '#1e3a8a' },
  { name: 'Rojo Carmín', hex: '#991b1b' },
  { name: 'Gris Carbón', hex: '#27272a' },
  { name: 'Verde Bosque', hex: '#14532d' },
  { name: 'Blanco Puro', hex: '#fafafa' },
  { name: 'Naranja Fuego', hex: '#ea580c' },
  { name: 'Crema Arena', hex: '#fef08a' }
];

const productTemplates = {
  'Audio': [
    { name: 'Auriculares SoundBass Neo', desc: 'Auriculares inalámbricos ergonómicos con sonido de alta definición, cancelación activa de ruido híbrida y batería recargable de hasta 30 horas.' },
    { name: 'Parlante Inalámbrico AuraBox Mini', desc: 'Pequeño parlante bluetooth portátil de alta potencia. Resistente al polvo y salpicaduras de agua. Batería de 12 horas.' },
    { name: 'SoundBar VibeTheater Pro', desc: 'Barra de sonido inteligente con subwoofer inalámbrico integrado para un sonido de cine 3D envolvente en tu sala.' },
    { name: 'Auriculares ANC NoiseBlock', desc: 'Diadema con sistema avanzado de cancelación activa de ruido para total aislamiento en tus viajes y oficina.' },
    { name: 'Micrófono de Condensador StreamVoice', desc: 'Micrófono USB profesional para streaming, podcasting y grabaciones vocales con filtro antipop integrado.' },
    { name: 'Audífonos In-Ear TrueBuds Lite', desc: 'Auriculares in-ear bluetooth ultra-ligeros con control táctil intuitivo y estuche de carga de bolsillo.' },
    { name: 'Parlante Bluetooth PocketBeat', desc: 'Altavoz de bolsillo inalámbrico con correa de sujeción para llevar tu música a donde vayas.' },
    { name: 'Auriculares Studio Pro DJ', desc: 'Auriculares de monitoreo profesional para DJ y productores musicales, con aislamiento acústico pasivo extremo.' },
    { name: 'SoundPod Wireless Mini', desc: 'Audífonos bluetooth con cancelación inteligente de ruido de viento y resistencia a salpicaduras.' },
    { name: 'Parlante Impermeable AquaBoom', desc: 'Parlante sumergible ideal para la piscina o ducha, con ventosa de sujeción y conectividad Bluetooth 5.2.' },
    { name: 'Amplificador de Audio DAC Pro', desc: 'Conversor digital-analógico USB de alta gama para amplificar la fidelidad del sonido en tus auriculares.' },
    { name: 'Auriculares Kids SafeSound', desc: 'Auriculares para niños con limitador de volumen automático a 85dB para proteger su salud auditiva.' }
  ],
  'Moda': [
    { name: 'Polera Algodón Classic Fit', desc: 'Sudadera clásica con forro polar cepillado muy suave al tacto. Ideal para abrigarse de forma casual.' },
    { name: 'Pantalón Cargo Urban Explorer', desc: 'Pantalón cargo de alta resistencia con costuras reforzadas y bolsillos utilitarios de gran capacidad.' },
    { name: 'Camiseta Basic Cotton', desc: 'Polo básico de cuello redondo confeccionado íntegramente con algodón pima peruano ultra suave.' },
    { name: 'Casaca Cortaviento TrailRunner', desc: 'Casaca cortaviento súper liviana, plegable y repelente al agua para correr bajo el frío de la mañana.' },
    { name: 'Gorro de Lana Winter Knit', desc: 'Gorro tejido de lana de alpaca premium que ofrece excelente retención térmica con gran estilo.' },
    { name: 'Zapatillas Retro Court Classic', desc: 'Zapatillas urbanas de perfil bajo inspiradas en el calzado de tenis vintage de los años 80.' },
    { name: 'Medias Técnicas Pack x3', desc: 'Pack de 3 pares de calcetines deportivos transpirables con soporte de arco de compresión.' },
    { name: 'Joggers Slim Active', desc: 'Pantalón buzo de corte ajustado y puños acanalados para realizar actividades físicas o descansar.' },
    { name: 'Casaca Denim Vintage', desc: 'Casaca de mezclilla clásica con botones metálicos y dos bolsillos delanteros en el pecho.' },
    { name: 'Chaleco Acolchado ThermoVest', desc: 'Chaleco acolchado con relleno sintético ultra ligero repelente al viento y al frío.' },
    { name: 'Camisa Oxford Slim Fit', desc: 'Camisa casual de vestir confeccionada con tejido Oxford transpirable de alta calidad.' },
    { name: 'Pantalón Chino Everyday', desc: 'Pantalón chino elástico de ajuste regular, versátil para el trabajo o salidas de fin de semana.' }
  ],
  'Accesorios': [
    { name: 'Billetera de Cuero SmartWallet', desc: 'Billetera compacta de cuero genuino con protección RFID integrada contra clonación de tarjetas.' },
    { name: 'Llavero Organizador KeyLoop', desc: 'Llavero de cuero que mantiene tus llaves organizadas de forma silenciosa y sin rayones.' },
    { name: 'Termo Térmico HydroFlow 1L', desc: 'Botella de agua de acero inoxidable de gran capacidad que conserva tus bebidas heladas por horas.' },
    { name: 'Soporte de Escritorio DeskStand Metal', desc: 'Soporte metálico ergonómico de aluminio anodizado para teléfonos y tabletas.' },
    { name: 'Smart Band VibeFit Lite', desc: 'Pulsera inteligente deportiva con medidor de pasos, calorías, sueño y notificaciones móviles.' },
    { name: 'Mochila Portafolio TechPack Slim', desc: 'Mochila portafolio delgada impermeable con compartimiento acolchado para laptop de 15 pulgadas.' },
    { name: 'Reloj Clásico de Cuarzo ChronoClassic', desc: 'Reloj analógico elegante con correa de cuero y caja de acero inoxidable resistente al agua.' },
    { name: 'Organizador de Cables TravelPouch', desc: 'Estuche organizador de cables, cargadores, memorias USB y accesorios para viajes.' },
    { name: 'Correa para Smartwatch Silicona', desc: 'Correa deportiva elástica y transpirable compatible con la mayoría de relojes inteligentes.' },
    { name: 'Cargador Inalámbrico MatrixDock', desc: 'Base de carga rápida inalámbrica de 15W compatible con teléfonos y estuches de auriculares.' },
    { name: 'Candado de Viaje TSA Lock', desc: 'Candado de seguridad con combinación de 3 dígitos homologado por la TSA para maletas.' },
    { name: 'Lápiz Óptico VibePen', desc: 'Lápiz óptico activo con rechazo de palma y sensibilidad de inclinación para tabletas.' }
  ]
};

const imagesByCategory = {
  'Audio': [
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80',
    'https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80',
    'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80'
  ],
  'Moda': [
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80'
  ],
  'Accesorios': [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
    'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80',
    'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
    'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80'
  ]
};

const authorNames = ['Sofía A.', 'Gabriel M.', 'Diana L.', 'Beto G.', 'Valeria R.', 'Héctor H.', 'Camila T.', 'Raúl P.'];
const reviewComments = [
  'Excelente calidad de materiales, superó mis expectativas.',
  'Muy cómodo de usar y el diseño es minimalista.',
  'Relación calidad-precio muy justa, lo recomiendo totalmente.',
  'Llegó muy rápido a mi domicilio y bien empaquetado.',
  'Funciona de maravilla, volvería a comprar otro igual sin dudarlo.',
  'Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.',
  'El color es idéntico al de las fotos, se ve genial.',
  'Muy útil y resistente para el uso cotidiano.'
];

const generatedProducts = [...initialProducts];

let idCounter = 13;

while (generatedProducts.length < 60) {
  const catIdx = generatedProducts.length % categories.length;
  const category = categories[catIdx];
  
  const templateList = productTemplates[category];
  const templateIdx = Math.floor(Math.random() * templateList.length);
  const template = templateList[templateIdx];
  
  const idStr = `prod-${idCounter.toString().padStart(3, '0')}`;
  
  const nameExists = generatedProducts.some(p => p.name === template.name);
  let name = template.name;
  if (nameExists) {
    name = `${template.name} V${Math.floor(Math.random() * 5) + 2}`;
  }
  
  const imgList = imagesByCategory[category];
  const img1 = imgList[Math.floor(Math.random() * imgList.length)];
  let img2 = imgList[Math.floor(Math.random() * imgList.length)];
  if (img2 === img1) {
    img2 = imgList[(imgList.indexOf(img1) + 1) % imgList.length];
  }
  
  const price = Math.floor(Math.random() * 8 + 3) * 10 + 9;
  const hasPromo = Math.random() > 0.6;
  const originalPrice = hasPromo ? Math.round(price * (1.15 + Math.random() * 0.15)) : undefined;
  
  const sizes = sizesByCategory[category];
  
  const colorsCount = Math.floor(Math.random() * 2) + 2; 
  const colorsSelected = [];
  const colorIndicesUsed = new Set();
  while (colorsSelected.length < colorsCount) {
    const idx = Math.floor(Math.random() * colorsPool.length);
    if (!colorIndicesUsed.has(idx)) {
      colorIndicesUsed.add(idx);
      colorsSelected.push(colorsPool[idx]);
    }
  }
  
  const stock = {};
  sizes.forEach(size => {
    colorsSelected.forEach(color => {
      const stockKey = `${size}-${color.name}`;
      stock[stockKey] = Math.floor(Math.random() * 15) + 5; 
    });
  });
  
  const tags = ['Nuevo', category === 'Audio' ? 'Wireless' : category === 'Moda' ? 'Confort' : 'Básicos'];
  if (hasPromo) tags.push('Oferta');
  
  const detail1 = `${category} con diseño acústico / textil moderno.`;
  const detail2 = 'Construcción premium de alta durabilidad.';
  const detail3 = 'Garantía del fabricante de 2 años incluida.';
  const details = [detail1, detail2, detail3];
  
  const revCount = Math.floor(Math.random() * 12) + 5;
  const reviews = [];
  for (let r = 0; r < revCount; r++) {
    const revId = `rev-${idCounter}-${r}`;
    const author = authorNames[Math.floor(Math.random() * authorNames.length)];
    const comment = reviewComments[Math.floor(Math.random() * reviewComments.length)];
    const rating = Math.random() > 0.4 ? 5 : 4;
    const date = `2026-06-${(Math.floor(Math.random() * 20) + 10).toString()}`;
    reviews.push({ id: revId, author, rating, comment, date });
  }
  
  const ratingAvg = parseFloat((reviews.reduce((acc, rv) => acc + rv.rating, 0) / reviews.length).toFixed(1));

  const newProduct = {
    id: idStr,
    name,
    description: template.desc,
    price,
    originalPrice,
    rating: ratingAvg,
    reviewCount: reviews.length,
    images: [img1, img2],
    category,
    tags,
    colors: colorsSelected,
    sizes,
    stock,
    details,
    reviews
  };

  generatedProducts.push(newProduct);
  idCounter++;
}

const fileContent = `import type { Product } from '../types/store';

export const mockProducts: Product[] = ${JSON.stringify(generatedProducts, null, 2)};

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
`;

fs.writeFileSync(targetFilePath, fileContent, 'utf8');
console.log('✅ File written successfully with 60 products!');
