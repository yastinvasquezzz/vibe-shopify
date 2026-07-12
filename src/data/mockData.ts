import type { Product } from '../types/store';

export const mockProducts: Product[] = [
  {
    "id": "prod-001",
    "name": "Auriculares Inalámbricos SoundAura Pro",
    "description": "Experimenta la pureza absoluta del sonido con los SoundAura Pro. Equipados con Cancelación Activa de Ruido Inteligente (ANC), transductores de alta resolución y una autonomía estelar de 40 horas. Su diseño ergonómico y almohadillas de espuma viscoelástica garantizan comodidad durante todo el día.",
    "price": 249,
    "originalPrice": 299,
    "rating": 4.8,
    "reviewCount": 142,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Premium",
      "Best Seller",
      "Wireless"
    ],
    "colors": [
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Cobre Cálido",
        "hex": "#b45309"
      }
    ],
    "sizes": [
      "Estándar"
    ],
    "stock": {
      "Estándar-Negro Mate": 15,
      "Estándar-Plata Lunar": 8,
      "Estándar-Cobre Cálido": 3
    },
    "details": [
      "Cancelación de ruido activa de nivel híbrido de hasta 48dB.",
      "Transductores de 40 mm diseñados a medida para audio espacial.",
      "Conectividad multipunto a través de Bluetooth 5.3 de baja latencia.",
      "Carga ultra rápida: 5 minutos de carga proporcionan 4 horas de reproducción."
    ],
    "reviews": [
      {
        "id": "rev-101",
        "author": "Alejandro G.",
        "rating": 5,
        "comment": "La cancelación de ruido es simplemente espectacular, mejor que otras marcas de renombre. Son muy cómodos para viajes largos.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-102",
        "author": "Mariana T.",
        "rating": 4.5,
        "comment": "Calidad de audio premium, los bajos son nítidos y no distorsionan. El color cobre cálido se ve súper elegante.",
        "date": "2026-07-02"
      }
    ]
  },
  {
    "id": "prod-002",
    "name": "Cronos Active Smartwatch X",
    "description": "Monitorea tu salud y supera tus límites con el Cronos Active X. Pantalla AMOLED de alta luminosidad, GPS integrado de doble banda, monitoreo continuo de SpO2, ritmo cardíaco y niveles de estrés. Diseñado para resistir condiciones extremas y acompañarte en cada aventura.",
    "price": 189,
    "originalPrice": 229,
    "rating": 4.6,
    "reviewCount": 98,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Deporte",
      "Wearables",
      "Novedad"
    ],
    "colors": [
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Verde Bosque",
        "hex": "#14532d"
      }
    ],
    "sizes": [
      "40mm",
      "44mm"
    ],
    "stock": {
      "40mm-Gris Carbón": 12,
      "44mm-Gris Carbón": 0,
      "40mm-Verde Bosque": 5,
      "44mm-Verde Bosque": 6
    },
    "details": [
      "Pantalla táctil AMOLED de 1.43 pulgadas Always-On.",
      "Resistencia al agua hasta 5 ATM (50 metros).",
      "Más de 120 modos deportivos con reconocimiento automático.",
      "Batería con duración de hasta 14 días de uso regular."
    ],
    "reviews": [
      {
        "id": "rev-201",
        "author": "Carlos R.",
        "rating": 4,
        "comment": "Excelente reloj para hacer running. El GPS responde rápido y la duración de la batería es increíble comparado con mi smartwatch anterior.",
        "date": "2026-05-20"
      }
    ]
  },
  {
    "id": "prod-003",
    "name": "Mochila Minimalista UrbanPack 20L",
    "description": "La UrbanPack 20L redefine la movilidad urbana. Su compartimento principal expandible, compartimiento acolchado para laptops de hasta 16 pulgadas y material impermeable de alta resistencia la convierten en la aliada ideal para el día a día. Estética limpia para mentes modernas.",
    "price": 89,
    "rating": 4.7,
    "reviewCount": 215,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Equipaje",
      "Impermeable",
      "Popular"
    ],
    "colors": [
      {
        "name": "Gris Grafito",
        "hex": "#3f3f46"
      },
      {
        "name": "Azul Abismo",
        "hex": "#1e3a8a"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      }
    ],
    "sizes": [
      "Única"
    ],
    "stock": {
      "Única-Gris Grafito": 25,
      "Única-Azul Abismo": 14,
      "Única-Crema Arena": 2
    },
    "details": [
      "Tejido Cordura Ballistic impermeable de alta durabilidad.",
      "Compartimento flotante para portátil con forro de terciopelo.",
      "Bolsillo trasero de seguridad oculto para pasaporte y billetera.",
      "Correas de hombro ergonómicas de espuma EVA transpirable."
    ],
    "reviews": [
      {
        "id": "rev-301",
        "author": "Sofía L.",
        "rating": 5,
        "comment": "Tiene bolsillos para todo. El espacio para la laptop está súper bien acolchado y la tela exterior realmente repele el agua.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": "prod-004",
    "name": "Zapatillas Horizon Runner Evo",
    "description": "Rompe marcas personales con las Horizon Runner Evo. Diseñadas con nuestra espuma reactiva de doble densidad y una placa estabilizadora para maximizar el retorno de energía. La parte superior de malla transpirable envuelve el pie proporcionando máxima frescura en carreras intensas.",
    "price": 160,
    "originalPrice": 180,
    "rating": 4.9,
    "reviewCount": 76,
    "images": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Deporte",
      "Calzado",
      "Best Seller"
    ],
    "colors": [
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Gris Trueno",
        "hex": "#52525b"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      }
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "stock": {
      "38-Blanco Puro": 4,
      "40-Blanco Puro": 8,
      "42-Blanco Puro": 10,
      "44-Blanco Puro": 5,
      "38-Gris Trueno": 6,
      "40-Gris Trueno": 0,
      "42-Gris Trueno": 12,
      "44-Gris Trueno": 2,
      "38-Naranja Fuego": 1,
      "40-Naranja Fuego": 3,
      "42-Naranja Fuego": 5,
      "44-Naranja Fuego": 0
    },
    "details": [
      "Entresuela reactiva NitroFoam para una amortiguación dinámica.",
      "Suela exterior Grip rubber de tracción multidireccional extrema.",
      "Placa estabilizadora de TPU integrada en la base del pie.",
      "Drop de talón de 8 mm para transiciones fluidas."
    ],
    "reviews": [
      {
        "id": "rev-401",
        "author": "Daniel M.",
        "rating": 5,
        "comment": "Comodísimas. Siento que me impulsan al correr. La talla es exacta, recomiendo pedir tu número normal.",
        "date": "2026-07-09"
      }
    ]
  },
  {
    "id": "prod-005",
    "name": "Chaqueta Impermeable Explorer Shell",
    "description": "La chaqueta Explorer Shell ofrece protección insuperable contra tormentas y vientos fríos. Su membrana de tres capas impermeable y transpirable regula la temperatura interna durante esfuerzos intensos en montaña o ciudad. Costuras termo-selladas y cremalleras estancas.",
    "price": 210,
    "rating": 4.5,
    "reviewCount": 54,
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Abrigos",
      "Impermeable",
      "Novedad"
    ],
    "colors": [
      {
        "name": "Amarillo Aventura",
        "hex": "#eab308"
      },
      {
        "name": "Negro Profundo",
        "hex": "#09090b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Amarillo Aventura": 3,
      "M-Amarillo Aventura": 5,
      "L-Amarillo Aventura": 4,
      "XL-Amarillo Aventura": 2,
      "S-Negro Profundo": 6,
      "M-Negro Profundo": 8,
      "L-Negro Profundo": 10,
      "XL-Negro Profundo": 3
    },
    "details": [
      "Membrana técnica de 3 capas con 20,000 mm de columna de agua.",
      "Transpirabilidad excepcional: 15,000 g/m²/24h.",
      "Cremalleras de ventilación axilar con tiradores dobles.",
      "Capucha ajustable compatible con cascos de escalada y ciclismo."
    ],
    "reviews": [
      {
        "id": "rev-501",
        "author": "Laura K.",
        "rating": 5,
        "comment": "La he usado bajo lluvia fuerte en senderismo y ni una gota ha pasado. El color amarillo es precioso y muy visible.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": "prod-006",
    "name": "Botella Térmica HydroLux 750ml",
    "description": "Mantente hidratado con HydroLux, construida con acero inoxidable de grado alimenticio y tecnología de aislamiento de doble pared al vacío. Mantiene tus bebidas frías hasta por 24 horas o calientes hasta por 12 horas. Su recubrimiento de pintura en polvo previene rayones.",
    "price": 35,
    "originalPrice": 42,
    "rating": 4.7,
    "reviewCount": 320,
    "images": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Ecológico",
      "Hogar",
      "Accesorios"
    ],
    "colors": [
      {
        "name": "Verde Menta",
        "hex": "#a7f3d0"
      },
      {
        "name": "Oasis Coral",
        "hex": "#fda4af"
      },
      {
        "name": "Azul Acero",
        "hex": "#60a5fa"
      }
    ],
    "sizes": [
      "750ml"
    ],
    "stock": {
      "750ml-Verde Menta": 40,
      "750ml-Oasis Coral": 25,
      "750ml-Azul Acero": 18
    },
    "details": [
      "Acero inoxidable 18/8 de doble pared ultra duradero.",
      "100% Libre de BPA, ftalatos y otras toxinas dañinas.",
      "Tapón hermético a prueba de fugas con asa de transporte integrada.",
      "No suda en frío ni transmite calor al exterior."
    ],
    "reviews": [
      {
        "id": "rev-601",
        "author": "Esteban H.",
        "rating": 4.8,
        "comment": "Increíble aislamiento. Puse hielo en la mañana y por la noche seguía casi intacto. El recubrimiento mate da un súper buen agarre.",
        "date": "2026-07-05"
      }
    ]
  },
  {
    "id": "prod-007",
    "name": "Auriculares Deportivos FitBuds Active",
    "description": "Auriculares deportivos ergonómicos con ganchos de sujeción flexibles, resistentes a la sudoración profunda y sonido de alto impacto con graves reforzados para motivar tus entrenamientos.",
    "price": 129,
    "originalPrice": 159,
    "rating": 4.6,
    "reviewCount": 88,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Deporte",
      "Resistente",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Negro Voltio",
        "hex": "#1e1b4b"
      },
      {
        "name": "Amarillo Neón",
        "hex": "#a3e635"
      }
    ],
    "sizes": [
      "M"
    ],
    "stock": {
      "M-Negro Voltio": 14,
      "M-Amarillo Neón": 20
    },
    "details": [
      "Clasificación IPX7 de resistencia al agua y al sudor.",
      "Hasta 8 horas de batería en los auriculares y 24 horas extra con el estuche.",
      "Ganchos para la oreja ajustables y seguros para máxima estabilidad.",
      "Controladores dinámicos de 10 mm optimizados para bajos."
    ],
    "reviews": [
      {
        "id": "rev-701",
        "author": "Roberto F.",
        "rating": 5,
        "comment": "No se caen por nada mientras corro y el sonido es muy potente.",
        "date": "2026-07-01"
      }
    ]
  },
  {
    "id": "prod-008",
    "name": "Gafas de Sol Polarizadas VibeShades",
    "description": "Protege tu vista con estilo. Las VibeShades cuentan con lentes polarizadas con filtro UV400 y montura de policarbonato ligera de alta resistencia para un look moderno y urbano.",
    "price": 79,
    "rating": 4.8,
    "reviewCount": 112,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Estilo",
      "Verano",
      "Popular"
    ],
    "colors": [
      {
        "name": "Negro Clásico",
        "hex": "#09090b"
      },
      {
        "name": "Marrón Carey",
        "hex": "#78350f"
      }
    ],
    "sizes": [
      "Estándar"
    ],
    "stock": {
      "Estándar-Negro Clásico": 35,
      "Estándar-Marrón Carey": 18
    },
    "details": [
      "Lentes polarizadas TAC con reducción del deslumbramiento.",
      "Protección 100% contra rayos UVA y UVB (UV400).",
      "Montura de policarbonato ultra ligera y flexible.",
      "Incluye estuche de microfibra de limpieza ecológica."
    ],
    "reviews": [
      {
        "id": "rev-801",
        "author": "Lucía P.",
        "rating": 5,
        "comment": "Ligeras, cómodas y la polarización es de primera calidad. Se ven geniales.",
        "date": "2026-07-03"
      }
    ]
  },
  {
    "id": "prod-009",
    "name": "Sudadera Oversize Urban Hoodie",
    "description": "Confort térmico absoluto con estilo urbano. Confeccionada con una mezcla de algodón pesado premium y felpa interior cepillada. Hombros caídos y un ajuste relajado perfecto para el frío.",
    "price": 149,
    "originalPrice": 179,
    "rating": 4.7,
    "reviewCount": 95,
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Oversize",
      "Confort",
      "Frío"
    ],
    "colors": [
      {
        "name": "Gris Melange",
        "hex": "#71717a"
      },
      {
        "name": "Crema Hueso",
        "hex": "#f5f5f4"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "stock": {
      "S-Gris Melange": 12,
      "M-Gris Melange": 15,
      "L-Gris Melange": 8,
      "S-Crema Hueso": 5,
      "M-Crema Hueso": 10,
      "L-Crema Hueso": 4
    },
    "details": [
      "Tejido de felpa pesada de 400 g/m² de algodón orgánico.",
      "Capucha de doble capa sin cordones para un diseño minimalista.",
      "Bolsillo tipo canguro delantero espacioso.",
      "Puños y dobladillo acanalados de alta elasticidad."
    ],
    "reviews": [
      {
        "id": "rev-901",
        "author": "Diego V.",
        "rating": 4.5,
        "comment": "El material es súper grueso y abrigador, la caída oversize queda espectacular.",
        "date": "2026-07-04"
      }
    ]
  },
  {
    "id": "prod-010",
    "name": "Gorra Deportiva FlexCap",
    "description": "Mantente fresco bajo el sol. Gorra ligera con paneles traseros microperforados láser para una ventilación superior, banda absorbente interna contra el sudor y correa de ajuste seguro.",
    "price": 49,
    "rating": 4.4,
    "reviewCount": 63,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80",
      "https://images.unsplash.com/photo-1534215754734-18e55d13ce35?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Deporte",
      "Básicos",
      "Accesorios"
    ],
    "colors": [
      {
        "name": "Negro Obsidiana",
        "hex": "#18181b"
      },
      {
        "name": "Blanco Deportivo",
        "hex": "#f4f4f5"
      }
    ],
    "sizes": [
      "Única"
    ],
    "stock": {
      "Única-Negro Obsidiana": 25,
      "Única-Blanco Deportivo": 15
    },
    "details": [
      "Tejido técnico transpirable de secado ultra rápido.",
      "Paneles de ventilación perforados con láser en los laterales.",
      "Cierre de hebilla de perfil bajo con banda elástica.",
      "Visera semi-curva estructurada."
    ],
    "reviews": [
      {
        "id": "rev-1001",
        "author": "Marcos A.",
        "rating": 4.5,
        "comment": "Súper liviana y ventilada para salir a correr al mediodía.",
        "date": "2026-06-20"
      }
    ]
  },
  {
    "id": "prod-011",
    "name": "Parlante Inalámbrico SoundWave Outdoor",
    "description": "Sonido estéreo envolvente de 360 grados y 20W de potencia para exteriores. El SoundWave cuenta con protección IPX7 contra agua, radiadores pasivos duales y 16 horas de batería continua.",
    "price": 199,
    "originalPrice": 249,
    "rating": 4.8,
    "reviewCount": 154,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Sonido",
      "Portátil",
      "Impermeable"
    ],
    "colors": [
      {
        "name": "Negro Carbón",
        "hex": "#0f172a"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "Estándar"
    ],
    "stock": {
      "Estándar-Negro Carbón": 20,
      "Estándar-Rojo Carmín": 10
    },
    "details": [
      "Tecnología SoundDirection de 360° con drivers activos duales.",
      "Certificación IPX7 a prueba de agua (sumergible hasta 1m por 30min).",
      "Batería recargable de 4000mAh para 16 horas de música.",
      "Función PartySync para emparejar 2 altavoces en estéreo real."
    ],
    "reviews": [
      {
        "id": "rev-1101",
        "author": "Esteban C.",
        "rating": 5,
        "comment": "El volumen que tiene para su tamaño es brutal, y los bajos se sienten excelente en exteriores.",
        "date": "2026-07-07"
      }
    ]
  },
  {
    "id": "prod-012",
    "name": "Cargador Portátil PowerMatrix 10K",
    "description": "Energía de respaldo ultra compacta de 10,000mAh con soporte de carga rápida Power Delivery (PD) de 22.5W. Pantalla LED digital inteligente indicadora de porcentaje de batería restante.",
    "price": 89,
    "rating": 4.7,
    "reviewCount": 180,
    "images": [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Carga",
      "Viajes",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Gris Titanio",
        "hex": "#4b5563"
      },
      {
        "name": "Blanco Glaciar",
        "hex": "#f3f4f6"
      }
    ],
    "sizes": [
      "Estándar"
    ],
    "stock": {
      "Estándar-Gris Titanio": 30,
      "Estándar-Blanco Glaciar": 25
    },
    "details": [
      "Capacidad real de 10,000 mAh para cargar 2-3 veces tu smartphone.",
      "Carga rápida bidireccional USB-C Power Delivery de 22.5W.",
      "Pantalla LED oculta con indicador de nivel digital en tiempo real.",
      "Protecciones integradas contra sobrecalentamiento y cortounidades."
    ],
    "reviews": [
      {
        "id": "rev-1201",
        "author": "Andrea M.",
        "rating": 5,
        "comment": "Súper compacta, entra fácil en el bolsillo del pantalón y carga mi teléfono muy rápido.",
        "date": "2026-07-02"
      }
    ]
  },
  {
    "id": "prod-013",
    "name": "Parlante Bluetooth PocketBeat",
    "description": "Altavoz de bolsillo inalámbrico con correa de sujeción para llevar tu música a donde vayas.",
    "price": 79,
    "originalPrice": 103,
    "rating": 4.5,
    "reviewCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Gris Carbón": 9,
      "Estándar-Azul Marino": 15,
      "Estándar-Negro Mate": 12,
      "Pro-Gris Carbón": 13,
      "Pro-Azul Marino": 5,
      "Pro-Negro Mate": 12
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-13-0",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-13-1",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-13-2",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-13-3",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-13-4",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-13-5",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-13-6",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-13-7",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-13-8",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-13-9",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-13-10",
        "author": "Camila T.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-27"
      }
    ]
  },
  {
    "id": "prod-014",
    "name": "Joggers Slim Active",
    "description": "Pantalón buzo de corte ajustado y puños acanalados para realizar actividades físicas o descansar.",
    "price": 69,
    "rating": 4.6,
    "reviewCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Blanco Puro": 8,
      "S-Gris Carbón": 14,
      "M-Blanco Puro": 18,
      "M-Gris Carbón": 16,
      "L-Blanco Puro": 11,
      "L-Gris Carbón": 5,
      "XL-Blanco Puro": 5,
      "XL-Gris Carbón": 8
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-14-0",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-14-1",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-14-2",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-14-3",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-14-4",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-14-5",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-14-6",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-14-7",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-14-8",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-14-9",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": "prod-015",
    "name": "Candado de Viaje TSA Lock",
    "description": "Candado de seguridad con combinación de 3 dígitos homologado por la TSA para maletas.",
    "price": 99,
    "originalPrice": 129,
    "rating": 4.8,
    "reviewCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Plata Lunar": 10,
      "Estándar-Crema Arena": 10,
      "Estándar-Negro Mate": 12,
      "Única-Plata Lunar": 17,
      "Única-Crema Arena": 14,
      "Única-Negro Mate": 8
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-15-0",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-15-1",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-15-2",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-15-3",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-15-4",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-15-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-15-6",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-15-7",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-19"
      }
    ]
  },
  {
    "id": "prod-016",
    "name": "Auriculares ANC NoiseBlock",
    "description": "Diadema con sistema avanzado de cancelación activa de ruido para total aislamiento en tus viajes y oficina.",
    "price": 79,
    "originalPrice": 96,
    "rating": 4.4,
    "reviewCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Gris Carbón": 5,
      "Estándar-Plata Lunar": 17,
      "Pro-Gris Carbón": 9,
      "Pro-Plata Lunar": 10
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-16-0",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-16-1",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-16-2",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-16-3",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-16-4",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-16-5",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-16-6",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": "prod-017",
    "name": "Medias Técnicas Pack x3",
    "description": "Pack de 3 pares de calcetines deportivos transpirables con soporte de arco de compresión.",
    "price": 49,
    "rating": 4.8,
    "reviewCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      },
      {
        "name": "Verde Bosque",
        "hex": "#14532d"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Crema Arena": 6,
      "S-Verde Bosque": 6,
      "S-Negro Mate": 12,
      "M-Crema Arena": 11,
      "M-Verde Bosque": 17,
      "M-Negro Mate": 15,
      "L-Crema Arena": 11,
      "L-Verde Bosque": 16,
      "L-Negro Mate": 17,
      "XL-Crema Arena": 5,
      "XL-Verde Bosque": 7,
      "XL-Negro Mate": 11
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-17-0",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-17-1",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-17-2",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-17-3",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-17-4",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-17-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-17-6",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-17-7",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-17-8",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-17-9",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": "prod-018",
    "name": "Termo Térmico HydroFlow 1L",
    "description": "Botella de agua de acero inoxidable de gran capacidad que conserva tus bebidas heladas por horas.",
    "price": 99,
    "originalPrice": 121,
    "rating": 4.5,
    "reviewCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Verde Bosque",
        "hex": "#14532d"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Verde Bosque": 12,
      "Estándar-Negro Mate": 13,
      "Estándar-Azul Marino": 13,
      "Única-Verde Bosque": 15,
      "Única-Negro Mate": 5,
      "Única-Azul Marino": 16
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-18-0",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-18-1",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-18-2",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-18-3",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-18-4",
        "author": "Diana L.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-18-5",
        "author": "Camila T.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-18"
      }
    ]
  },
  {
    "id": "prod-019",
    "name": "Micrófono de Condensador StreamVoice",
    "description": "Micrófono USB profesional para streaming, podcasting y grabaciones vocales con filtro antipop integrado.",
    "price": 69,
    "originalPrice": 81,
    "rating": 4.6,
    "reviewCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Naranja Fuego": 6,
      "Estándar-Rojo Carmín": 19,
      "Pro-Naranja Fuego": 14,
      "Pro-Rojo Carmín": 16
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-19-0",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-19-1",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-19-2",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-19-3",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-19-4",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-19-5",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-19-6",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-19-7",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-19-8",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-19-9",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-15"
      }
    ]
  },
  {
    "id": "prod-020",
    "name": "Pantalón Chino Everyday",
    "description": "Pantalón chino elástico de ajuste regular, versátil para el trabajo o salidas de fin de semana.",
    "price": 69,
    "originalPrice": 80,
    "rating": 4.7,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Gris Carbón": 12,
      "S-Rojo Carmín": 9,
      "M-Gris Carbón": 10,
      "M-Rojo Carmín": 10,
      "L-Gris Carbón": 7,
      "L-Rojo Carmín": 15,
      "XL-Gris Carbón": 13,
      "XL-Rojo Carmín": 17
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-20-0",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-20-1",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-20-2",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-20-3",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-20-4",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-20-5",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-20-6",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-20-7",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-20-8",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-20-9",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-20-10",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-20-11",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-20-12",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-20-13",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-20-14",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-10"
      }
    ]
  },
  {
    "id": "prod-021",
    "name": "Correa para Smartwatch Silicona",
    "description": "Correa deportiva elástica y transpirable compatible con la mayoría de relojes inteligentes.",
    "price": 109,
    "originalPrice": 132,
    "rating": 4.7,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Verde Bosque",
        "hex": "#14532d"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Verde Bosque": 6,
      "Estándar-Crema Arena": 13,
      "Única-Verde Bosque": 11,
      "Única-Crema Arena": 12
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-21-0",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-21-1",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-21-2",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-21-3",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-21-4",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-21-5",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-21-6",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-21-7",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-21-8",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-21-9",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-21-10",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-21-11",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-21-12",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-21-13",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-21-14",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-13"
      }
    ]
  },
  {
    "id": "prod-022",
    "name": "Parlante Impermeable AquaBoom",
    "description": "Parlante sumergible ideal para la piscina o ducha, con ventosa de sujeción y conectividad Bluetooth 5.2.",
    "price": 49,
    "originalPrice": 63,
    "rating": 4.4,
    "reviewCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Blanco Puro": 8,
      "Estándar-Negro Mate": 18,
      "Estándar-Rojo Carmín": 16,
      "Pro-Blanco Puro": 12,
      "Pro-Negro Mate": 16,
      "Pro-Rojo Carmín": 10
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-22-0",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-22-1",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-22-2",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-22-3",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-22-4",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-22-5",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-22-6",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-22-7",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-22-8",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-22-9",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-22-10",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-22-11",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-22-12",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-22-13",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-20"
      }
    ]
  },
  {
    "id": "prod-023",
    "name": "Gorro de Lana Winter Knit",
    "description": "Gorro tejido de lana de alpaca premium que ofrece excelente retención térmica con gran estilo.",
    "price": 49,
    "rating": 4.7,
    "reviewCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Gris Carbón": 16,
      "S-Azul Marino": 7,
      "S-Naranja Fuego": 18,
      "M-Gris Carbón": 19,
      "M-Azul Marino": 17,
      "M-Naranja Fuego": 14,
      "L-Gris Carbón": 7,
      "L-Azul Marino": 9,
      "L-Naranja Fuego": 14,
      "XL-Gris Carbón": 11,
      "XL-Azul Marino": 17,
      "XL-Naranja Fuego": 14
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-23-0",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-23-1",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-23-2",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-23-3",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-23-4",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-23-5",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-23-6",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-23-7",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-23-8",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-23-9",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-23-10",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-23-11",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": "prod-024",
    "name": "Candado de Viaje TSA Lock V3",
    "description": "Candado de seguridad con combinación de 3 dígitos homologado por la TSA para maletas.",
    "price": 109,
    "originalPrice": 129,
    "rating": 4.4,
    "reviewCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Rojo Carmín": 5,
      "Estándar-Negro Mate": 19,
      "Estándar-Naranja Fuego": 13,
      "Única-Rojo Carmín": 13,
      "Única-Negro Mate": 10,
      "Única-Naranja Fuego": 11
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-24-0",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-24-1",
        "author": "Beto G.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-24-2",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-24-3",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-24-4",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-24-5",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-24-6",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-24-7",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-24-8",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-24-9",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-24-10",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-24-11",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-24-12",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-24-13",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-15"
      }
    ]
  },
  {
    "id": "prod-025",
    "name": "Parlante Inalámbrico AuraBox Mini",
    "description": "Pequeño parlante bluetooth portátil de alta potencia. Resistente al polvo y salpicaduras de agua. Batería de 12 horas.",
    "price": 69,
    "rating": 4.3,
    "reviewCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless"
    ],
    "colors": [
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Naranja Fuego": 5,
      "Estándar-Azul Marino": 11,
      "Pro-Naranja Fuego": 9,
      "Pro-Azul Marino": 14
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-25-0",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-25-1",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-25-2",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-25-3",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-25-4",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-25-5",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-22"
      }
    ]
  },
  {
    "id": "prod-026",
    "name": "Zapatillas Retro Court Classic",
    "description": "Zapatillas urbanas de perfil bajo inspiradas en el calzado de tenis vintage de los años 80.",
    "price": 49,
    "originalPrice": 59,
    "rating": 4.7,
    "reviewCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Plata Lunar": 5,
      "S-Blanco Puro": 16,
      "S-Negro Mate": 11,
      "M-Plata Lunar": 8,
      "M-Blanco Puro": 7,
      "M-Negro Mate": 7,
      "L-Plata Lunar": 14,
      "L-Blanco Puro": 17,
      "L-Negro Mate": 15,
      "XL-Plata Lunar": 10,
      "XL-Blanco Puro": 13,
      "XL-Negro Mate": 14
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-26-0",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-26-1",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-26-2",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-26-3",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-26-4",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-26-5",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-26-6",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-24"
      }
    ]
  },
  {
    "id": "prod-027",
    "name": "Correa para Smartwatch Silicona V3",
    "description": "Correa deportiva elástica y transpirable compatible con la mayoría de relojes inteligentes.",
    "price": 39,
    "rating": 4.7,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Rojo Carmín": 9,
      "Estándar-Gris Carbón": 12,
      "Estándar-Plata Lunar": 11,
      "Única-Rojo Carmín": 5,
      "Única-Gris Carbón": 13,
      "Única-Plata Lunar": 7
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-27-0",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-27-1",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-27-2",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-27-3",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-27-4",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-27-5",
        "author": "Beto G.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-27-6",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-27-7",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-27-8",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-27-9",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-27-10",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-27-11",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-27-12",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-27-13",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-27-14",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-19"
      }
    ]
  },
  {
    "id": "prod-028",
    "name": "SoundBar VibeTheater Pro",
    "description": "Barra de sonido inteligente con subwoofer inalámbrico integrado para un sonido de cine 3D envolvente en tu sala.",
    "price": 59,
    "originalPrice": 73,
    "rating": 4.7,
    "reviewCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Naranja Fuego": 10,
      "Estándar-Rojo Carmín": 7,
      "Estándar-Gris Carbón": 5,
      "Pro-Naranja Fuego": 6,
      "Pro-Rojo Carmín": 12,
      "Pro-Gris Carbón": 8
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-28-0",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-28-1",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-28-2",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-28-3",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-28-4",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-28-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-28-6",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-28-7",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-28-8",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-28-9",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-28-10",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-28-11",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-28-12",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-14"
      }
    ]
  },
  {
    "id": "prod-029",
    "name": "Camisa Oxford Slim Fit",
    "description": "Camisa casual de vestir confeccionada con tejido Oxford transpirable de alta calidad.",
    "price": 99,
    "originalPrice": 114,
    "rating": 4.8,
    "reviewCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Negro Mate": 17,
      "S-Naranja Fuego": 8,
      "S-Gris Carbón": 19,
      "M-Negro Mate": 18,
      "M-Naranja Fuego": 19,
      "M-Gris Carbón": 13,
      "L-Negro Mate": 6,
      "L-Naranja Fuego": 17,
      "L-Gris Carbón": 18,
      "XL-Negro Mate": 6,
      "XL-Naranja Fuego": 13,
      "XL-Gris Carbón": 10
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-29-0",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-29-1",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-29-2",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-29-3",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-29-4",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-29-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-29-6",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-29-7",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-29-8",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-29-9",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-29-10",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-29-11",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-25"
      }
    ]
  },
  {
    "id": "prod-030",
    "name": "Termo Térmico HydroFlow 1L V3",
    "description": "Botella de agua de acero inoxidable de gran capacidad que conserva tus bebidas heladas por horas.",
    "price": 69,
    "rating": 4.5,
    "reviewCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Azul Marino": 15,
      "Estándar-Naranja Fuego": 17,
      "Estándar-Rojo Carmín": 17,
      "Única-Azul Marino": 8,
      "Única-Naranja Fuego": 17,
      "Única-Rojo Carmín": 5
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-30-0",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-30-1",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-30-2",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-30-3",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-30-4",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-30-5",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-30-6",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-30-7",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-30-8",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-30-9",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-30-10",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-30-11",
        "author": "Diana L.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-30-12",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-30-13",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-30-14",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-30-15",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-22"
      }
    ]
  },
  {
    "id": "prod-031",
    "name": "Auriculares SoundBass Neo",
    "description": "Auriculares inalámbricos ergonómicos con sonido de alta definición, cancelación activa de ruido híbrida y batería recargable de hasta 30 horas.",
    "price": 69,
    "rating": 4.8,
    "reviewCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless"
    ],
    "colors": [
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Negro Mate": 14,
      "Estándar-Crema Arena": 12,
      "Pro-Negro Mate": 10,
      "Pro-Crema Arena": 17
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-31-0",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-31-1",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-31-2",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-31-3",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-31-4",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-31-5",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-31-6",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-31-7",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-31-8",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-23"
      }
    ]
  },
  {
    "id": "prod-032",
    "name": "Camisa Oxford Slim Fit V6",
    "description": "Camisa casual de vestir confeccionada con tejido Oxford transpirable de alta calidad.",
    "price": 99,
    "rating": 4.4,
    "reviewCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Negro Mate": 5,
      "S-Gris Carbón": 14,
      "M-Negro Mate": 19,
      "M-Gris Carbón": 13,
      "L-Negro Mate": 9,
      "L-Gris Carbón": 9,
      "XL-Negro Mate": 5,
      "XL-Gris Carbón": 18
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-32-0",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-32-1",
        "author": "Camila T.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-32-2",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-32-3",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-32-4",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-32-5",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-32-6",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-32-7",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-32-8",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-32-9",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-32-10",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": "prod-033",
    "name": "Billetera de Cuero SmartWallet",
    "description": "Billetera compacta de cuero genuino con protección RFID integrada contra clonación de tarjetas.",
    "price": 109,
    "rating": 4.7,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Rojo Carmín": 8,
      "Estándar-Plata Lunar": 15,
      "Estándar-Negro Mate": 18,
      "Única-Rojo Carmín": 17,
      "Única-Plata Lunar": 17,
      "Única-Negro Mate": 19
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-33-0",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-33-1",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-33-2",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-33-3",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-33-4",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-33-5",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-33-6",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-33-7",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-33-8",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-33-9",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-33-10",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-33-11",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-33-12",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-33-13",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-33-14",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-29"
      }
    ]
  },
  {
    "id": "prod-034",
    "name": "Amplificador de Audio DAC Pro",
    "description": "Conversor digital-analógico USB de alta gama para amplificar la fidelidad del sonido en tus auriculares.",
    "price": 109,
    "originalPrice": 134,
    "rating": 4.2,
    "reviewCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Azul Marino": 5,
      "Estándar-Gris Carbón": 5,
      "Pro-Azul Marino": 17,
      "Pro-Gris Carbón": 14
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-34-0",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-34-1",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-34-2",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-34-3",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-34-4",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-25"
      }
    ]
  },
  {
    "id": "prod-035",
    "name": "Camiseta Basic Cotton",
    "description": "Polo básico de cuello redondo confeccionado íntegramente con algodón pima peruano ultra suave.",
    "price": 109,
    "rating": 4.3,
    "reviewCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Naranja Fuego": 19,
      "S-Blanco Puro": 18,
      "S-Plata Lunar": 12,
      "M-Naranja Fuego": 6,
      "M-Blanco Puro": 5,
      "M-Plata Lunar": 14,
      "L-Naranja Fuego": 7,
      "L-Blanco Puro": 16,
      "L-Plata Lunar": 19,
      "XL-Naranja Fuego": 11,
      "XL-Blanco Puro": 12,
      "XL-Plata Lunar": 9
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-35-0",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-35-1",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-35-2",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-35-3",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-35-4",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-35-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-35-6",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-35-7",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-35-8",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-35-9",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": "prod-036",
    "name": "Lápiz Óptico VibePen",
    "description": "Lápiz óptico activo con rechazo de palma y sensibilidad de inclinación para tabletas.",
    "price": 59,
    "rating": 5,
    "reviewCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Plata Lunar": 18,
      "Estándar-Gris Carbón": 5,
      "Estándar-Naranja Fuego": 16,
      "Única-Plata Lunar": 16,
      "Única-Gris Carbón": 11,
      "Única-Naranja Fuego": 18
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-36-0",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-36-1",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-36-2",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-36-3",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-36-4",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-15"
      }
    ]
  },
  {
    "id": "prod-037",
    "name": "Amplificador de Audio DAC Pro V5",
    "description": "Conversor digital-analógico USB de alta gama para amplificar la fidelidad del sonido en tus auriculares.",
    "price": 49,
    "originalPrice": 59,
    "rating": 4.4,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Crema Arena": 5,
      "Estándar-Gris Carbón": 16,
      "Pro-Crema Arena": 5,
      "Pro-Gris Carbón": 10
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-37-0",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-37-1",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-37-2",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-37-3",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-37-4",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-37-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-37-6",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-37-7",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-37-8",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-37-9",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-37-10",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-37-11",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-37-12",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-37-13",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-37-14",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-13"
      }
    ]
  },
  {
    "id": "prod-038",
    "name": "Pantalón Cargo Urban Explorer",
    "description": "Pantalón cargo de alta resistencia con costuras reforzadas y bolsillos utilitarios de gran capacidad.",
    "price": 99,
    "originalPrice": 127,
    "rating": 4.7,
    "reviewCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Rojo Carmín": 9,
      "S-Plata Lunar": 6,
      "S-Azul Marino": 9,
      "M-Rojo Carmín": 13,
      "M-Plata Lunar": 16,
      "M-Azul Marino": 5,
      "L-Rojo Carmín": 12,
      "L-Plata Lunar": 16,
      "L-Azul Marino": 16,
      "XL-Rojo Carmín": 12,
      "XL-Plata Lunar": 16,
      "XL-Azul Marino": 12
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-38-0",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-38-1",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-38-2",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-38-3",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-38-4",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-38-5",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-38-6",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-38-7",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-38-8",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-38-9",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-38-10",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-38-11",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-38-12",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-38-13",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-38-14",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-38-15",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": "prod-039",
    "name": "Organizador de Cables TravelPouch",
    "description": "Estuche organizador de cables, cargadores, memorias USB y accesorios para viajes.",
    "price": 99,
    "rating": 4.5,
    "reviewCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Plata Lunar": 6,
      "Estándar-Crema Arena": 10,
      "Estándar-Rojo Carmín": 10,
      "Única-Plata Lunar": 16,
      "Única-Crema Arena": 15,
      "Única-Rojo Carmín": 15
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-39-0",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-39-1",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-39-2",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-39-3",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-39-4",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-39-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-39-6",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-39-7",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-39-8",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-39-9",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-39-10",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-39-11",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-39-12",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-39-13",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": "prod-040",
    "name": "Amplificador de Audio DAC Pro V5",
    "description": "Conversor digital-analógico USB de alta gama para amplificar la fidelidad del sonido en tus auriculares.",
    "price": 79,
    "rating": 4.6,
    "reviewCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless"
    ],
    "colors": [
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Naranja Fuego": 18,
      "Estándar-Azul Marino": 12,
      "Pro-Naranja Fuego": 19,
      "Pro-Azul Marino": 11
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-40-0",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-40-1",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-40-2",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-40-3",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-40-4",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-40-5",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-40-6",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-40-7",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-40-8",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-40-9",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-40-10",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-40-11",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-40-12",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-12"
      }
    ]
  },
  {
    "id": "prod-041",
    "name": "Polera Algodón Classic Fit",
    "description": "Sudadera clásica con forro polar cepillado muy suave al tacto. Ideal para abrigarse de forma casual.",
    "price": 69,
    "rating": 4.7,
    "reviewCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Rojo Carmín": 5,
      "S-Blanco Puro": 10,
      "S-Naranja Fuego": 9,
      "M-Rojo Carmín": 11,
      "M-Blanco Puro": 5,
      "M-Naranja Fuego": 6,
      "L-Rojo Carmín": 6,
      "L-Blanco Puro": 8,
      "L-Naranja Fuego": 17,
      "XL-Rojo Carmín": 12,
      "XL-Blanco Puro": 15,
      "XL-Naranja Fuego": 19
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-41-0",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-41-1",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-41-2",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-41-3",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-41-4",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-41-5",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-15"
      }
    ]
  },
  {
    "id": "prod-042",
    "name": "Mochila Portafolio TechPack Slim",
    "description": "Mochila portafolio delgada impermeable con compartimiento acolchado para laptop de 15 pulgadas.",
    "price": 49,
    "rating": 4.8,
    "reviewCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Crema Arena": 17,
      "Estándar-Plata Lunar": 11,
      "Estándar-Rojo Carmín": 15,
      "Única-Crema Arena": 8,
      "Única-Plata Lunar": 6,
      "Única-Rojo Carmín": 7
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-42-0",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-42-1",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-42-2",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-42-3",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-42-4",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-42-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-42-6",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-42-7",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-42-8",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-42-9",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-42-10",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-42-11",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-42-12",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": "prod-043",
    "name": "Parlante Inalámbrico AuraBox Mini V2",
    "description": "Pequeño parlante bluetooth portátil de alta potencia. Resistente al polvo y salpicaduras de agua. Batería de 12 horas.",
    "price": 109,
    "originalPrice": 131,
    "rating": 4.5,
    "reviewCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      },
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Naranja Fuego": 5,
      "Estándar-Crema Arena": 14,
      "Estándar-Blanco Puro": 8,
      "Pro-Naranja Fuego": 17,
      "Pro-Crema Arena": 11,
      "Pro-Blanco Puro": 14
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-43-0",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-43-1",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-43-2",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-43-3",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-43-4",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-43-5",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-43-6",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-43-7",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-43-8",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-43-9",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-43-10",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-43-11",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-43-12",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-43-13",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-27"
      }
    ]
  },
  {
    "id": "prod-044",
    "name": "Zapatillas Retro Court Classic V5",
    "description": "Zapatillas urbanas de perfil bajo inspiradas en el calzado de tenis vintage de los años 80.",
    "price": 39,
    "originalPrice": 47,
    "rating": 4.6,
    "reviewCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Verde Bosque",
        "hex": "#14532d"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Verde Bosque": 15,
      "S-Rojo Carmín": 19,
      "M-Verde Bosque": 7,
      "M-Rojo Carmín": 7,
      "L-Verde Bosque": 9,
      "L-Rojo Carmín": 13,
      "XL-Verde Bosque": 19,
      "XL-Rojo Carmín": 15
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-44-0",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-44-1",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-44-2",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-44-3",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-44-4",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-23"
      }
    ]
  },
  {
    "id": "prod-045",
    "name": "Cargador Inalámbrico MatrixDock",
    "description": "Base de carga rápida inalámbrica de 15W compatible con teléfonos y estuches de auriculares.",
    "price": 49,
    "originalPrice": 63,
    "rating": 4.6,
    "reviewCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Rojo Carmín": 12,
      "Estándar-Blanco Puro": 9,
      "Única-Rojo Carmín": 17,
      "Única-Blanco Puro": 15
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-45-0",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-45-1",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-45-2",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-45-3",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-45-4",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-45-5",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-45-6",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-45-7",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-45-8",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-45-9",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-45-10",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-45-11",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-45-12",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-45-13",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-45-14",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-45-15",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-29"
      }
    ]
  },
  {
    "id": "prod-046",
    "name": "SoundPod Wireless Mini",
    "description": "Audífonos bluetooth con cancelación inteligente de ruido de viento y resistencia a salpicaduras.",
    "price": 69,
    "originalPrice": 82,
    "rating": 4.6,
    "reviewCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Blanco Puro": 15,
      "Estándar-Negro Mate": 9,
      "Pro-Blanco Puro": 8,
      "Pro-Negro Mate": 17
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-46-0",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-46-1",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-46-2",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-46-3",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-46-4",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-46-5",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-46-6",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-46-7",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-46-8",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-46-9",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-46-10",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-46-11",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-22"
      }
    ]
  },
  {
    "id": "prod-047",
    "name": "Casaca Denim Vintage",
    "description": "Casaca de mezclilla clásica con botones metálicos y dos bolsillos delanteros en el pecho.",
    "price": 99,
    "originalPrice": 120,
    "rating": 4.6,
    "reviewCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Plata Lunar": 16,
      "S-Naranja Fuego": 5,
      "S-Gris Carbón": 10,
      "M-Plata Lunar": 13,
      "M-Naranja Fuego": 19,
      "M-Gris Carbón": 17,
      "L-Plata Lunar": 15,
      "L-Naranja Fuego": 14,
      "L-Gris Carbón": 17,
      "XL-Plata Lunar": 17,
      "XL-Naranja Fuego": 8,
      "XL-Gris Carbón": 6
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-47-0",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-47-1",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-47-2",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-47-3",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-47-4",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-47-5",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-47-6",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-47-7",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-47-8",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-47-9",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-47-10",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-47-11",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-47-12",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-47-13",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-47-14",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-47-15",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": "prod-048",
    "name": "Candado de Viaje TSA Lock V6",
    "description": "Candado de seguridad con combinación de 3 dígitos homologado por la TSA para maletas.",
    "price": 89,
    "rating": 4.8,
    "reviewCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Blanco Puro": 14,
      "Estándar-Plata Lunar": 8,
      "Única-Blanco Puro": 11,
      "Única-Plata Lunar": 19
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-48-0",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-48-1",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-48-2",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-48-3",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-48-4",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-48-5",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-48-6",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-48-7",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-48-8",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-48-9",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-48-10",
        "author": "Beto G.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-26"
      }
    ]
  },
  {
    "id": "prod-049",
    "name": "Auriculares ANC NoiseBlock V5",
    "description": "Diadema con sistema avanzado de cancelación activa de ruido para total aislamiento en tus viajes y oficina.",
    "price": 109,
    "originalPrice": 128,
    "rating": 4.6,
    "reviewCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Plata Lunar": 18,
      "Estándar-Gris Carbón": 18,
      "Estándar-Negro Mate": 14,
      "Pro-Plata Lunar": 16,
      "Pro-Gris Carbón": 6,
      "Pro-Negro Mate": 18
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-49-0",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-49-1",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-49-2",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-49-3",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-49-4",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-49-5",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-49-6",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-49-7",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-49-8",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-49-9",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-49-10",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-49-11",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-49-12",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-49-13",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-49-14",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-25"
      }
    ]
  },
  {
    "id": "prod-050",
    "name": "Casaca Cortaviento TrailRunner",
    "description": "Casaca cortaviento súper liviana, plegable y repelente al agua para correr bajo el frío de la mañana.",
    "price": 69,
    "rating": 4.4,
    "reviewCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Blanco Puro": 19,
      "S-Naranja Fuego": 12,
      "S-Rojo Carmín": 13,
      "M-Blanco Puro": 19,
      "M-Naranja Fuego": 5,
      "M-Rojo Carmín": 10,
      "L-Blanco Puro": 18,
      "L-Naranja Fuego": 13,
      "L-Rojo Carmín": 8,
      "XL-Blanco Puro": 10,
      "XL-Naranja Fuego": 10,
      "XL-Rojo Carmín": 16
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-50-0",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-50-1",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-50-2",
        "author": "Camila T.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-50-3",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-50-4",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-50-5",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-50-6",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-50-7",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-50-8",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-50-9",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-50-10",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": "prod-051",
    "name": "Organizador de Cables TravelPouch V4",
    "description": "Estuche organizador de cables, cargadores, memorias USB y accesorios para viajes.",
    "price": 79,
    "rating": 4.8,
    "reviewCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      },
      {
        "name": "Verde Bosque",
        "hex": "#14532d"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Blanco Puro": 5,
      "Estándar-Azul Marino": 6,
      "Estándar-Verde Bosque": 8,
      "Única-Blanco Puro": 7,
      "Única-Azul Marino": 5,
      "Única-Verde Bosque": 19
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-51-0",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-51-1",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-51-2",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-51-3",
        "author": "Camila T.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-51-4",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-51-5",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-11"
      },
      {
        "id": "rev-51-6",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-51-7",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-51-8",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": "prod-052",
    "name": "Auriculares Kids SafeSound",
    "description": "Auriculares para niños con limitador de volumen automático a 85dB para proteger su salud auditiva.",
    "price": 109,
    "rating": 4.6,
    "reviewCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless"
    ],
    "colors": [
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Plata Lunar": 16,
      "Estándar-Crema Arena": 17,
      "Pro-Plata Lunar": 5,
      "Pro-Crema Arena": 17
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-52-0",
        "author": "Beto G.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-52-1",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-52-2",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-52-3",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-52-4",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-52-5",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-52-6",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-52-7",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-19"
      }
    ]
  },
  {
    "id": "prod-053",
    "name": "Camisa Oxford Slim Fit V3",
    "description": "Camisa casual de vestir confeccionada con tejido Oxford transpirable de alta calidad.",
    "price": 79,
    "rating": 4.6,
    "reviewCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Azul Marino": 8,
      "S-Crema Arena": 7,
      "M-Azul Marino": 15,
      "M-Crema Arena": 14,
      "L-Azul Marino": 19,
      "L-Crema Arena": 7,
      "XL-Azul Marino": 17,
      "XL-Crema Arena": 5
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-53-0",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-53-1",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-53-2",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-53-3",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-53-4",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-14"
      }
    ]
  },
  {
    "id": "prod-054",
    "name": "Mochila Portafolio TechPack Slim V3",
    "description": "Mochila portafolio delgada impermeable con compartimiento acolchado para laptop de 15 pulgadas.",
    "price": 39,
    "rating": 4.4,
    "reviewCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Blanco Puro",
        "hex": "#fafafa"
      },
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Blanco Puro": 11,
      "Estándar-Naranja Fuego": 12,
      "Estándar-Crema Arena": 15,
      "Única-Blanco Puro": 19,
      "Única-Naranja Fuego": 15,
      "Única-Crema Arena": 5
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-54-0",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-54-1",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-54-2",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-54-3",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-15"
      },
      {
        "id": "rev-54-4",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-54-5",
        "author": "Raúl P.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-54-6",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-54-7",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-54-8",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-54-9",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-54-10",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-54-11",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": "prod-055",
    "name": "Auriculares Kids SafeSound V5",
    "description": "Auriculares para niños con limitador de volumen automático a 85dB para proteger su salud auditiva.",
    "price": 79,
    "rating": 4.3,
    "reviewCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless"
    ],
    "colors": [
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Naranja Fuego": 7,
      "Estándar-Azul Marino": 8,
      "Pro-Naranja Fuego": 9,
      "Pro-Azul Marino": 15
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-55-0",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-55-1",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-55-2",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-55-3",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-55-4",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-55-5",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-55-6",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-55-7",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-20"
      }
    ]
  },
  {
    "id": "prod-056",
    "name": "Camiseta Basic Cotton V4",
    "description": "Polo básico de cuello redondo confeccionado íntegramente con algodón pima peruano ultra suave.",
    "price": 109,
    "rating": 4.7,
    "reviewCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Naranja Fuego",
        "hex": "#ea580c"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Naranja Fuego": 10,
      "S-Negro Mate": 18,
      "M-Naranja Fuego": 18,
      "M-Negro Mate": 16,
      "L-Naranja Fuego": 14,
      "L-Negro Mate": 17,
      "XL-Naranja Fuego": 13,
      "XL-Negro Mate": 14
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-56-0",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-56-1",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-56-2",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-22"
      },
      {
        "id": "rev-56-3",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-56-4",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-56-5",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-56-6",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-56-7",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-56-8",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-56-9",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-56-10",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-29"
      },
      {
        "id": "rev-56-11",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": "prod-057",
    "name": "Reloj Clásico de Cuarzo ChronoClassic",
    "description": "Reloj analógico elegante con correa de cuero y caja de acero inoxidable resistente al agua.",
    "price": 79,
    "rating": 4.6,
    "reviewCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos"
    ],
    "colors": [
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Verde Bosque",
        "hex": "#14532d"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Negro Mate": 17,
      "Estándar-Rojo Carmín": 10,
      "Estándar-Verde Bosque": 14,
      "Única-Negro Mate": 19,
      "Única-Rojo Carmín": 16,
      "Única-Verde Bosque": 17
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-57-0",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-57-1",
        "author": "Gabriel M.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-57-2",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Funciona de maravilla, volvería a comprar otro igual sin dudarlo.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-57-3",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-57-4",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-57-5",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-57-6",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-57-7",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-57-8",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-28"
      },
      {
        "id": "rev-57-9",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-19"
      },
      {
        "id": "rev-57-10",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-21"
      }
    ]
  },
  {
    "id": "prod-058",
    "name": "SoundPod Wireless Mini V2",
    "description": "Audífonos bluetooth con cancelación inteligente de ruido de viento y resistencia a salpicaduras.",
    "price": 109,
    "rating": 4.6,
    "reviewCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80"
    ],
    "category": "Audio",
    "tags": [
      "Nuevo",
      "Wireless"
    ],
    "colors": [
      {
        "name": "Azul Marino",
        "hex": "#1e3a8a"
      },
      {
        "name": "Negro Mate",
        "hex": "#18181b"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      }
    ],
    "sizes": [
      "Estándar",
      "Pro"
    ],
    "stock": {
      "Estándar-Azul Marino": 17,
      "Estándar-Negro Mate": 10,
      "Estándar-Crema Arena": 15,
      "Pro-Azul Marino": 12,
      "Pro-Negro Mate": 5,
      "Pro-Crema Arena": 13
    },
    "details": [
      "Audio con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-58-0",
        "author": "Gabriel M.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-58-1",
        "author": "Beto G.",
        "rating": 4,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-58-2",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-13"
      },
      {
        "id": "rev-58-3",
        "author": "Héctor H.",
        "rating": 4,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-24"
      },
      {
        "id": "rev-58-4",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-58-5",
        "author": "Diana L.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-58-6",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-25"
      },
      {
        "id": "rev-58-7",
        "author": "Diana L.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-58-8",
        "author": "Camila T.",
        "rating": 5,
        "comment": "Muy cómodo de usar y el diseño es minimalista.",
        "date": "2026-06-18"
      },
      {
        "id": "rev-58-9",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-23"
      },
      {
        "id": "rev-58-10",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-58-11",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-26"
      },
      {
        "id": "rev-58-12",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-17"
      },
      {
        "id": "rev-58-13",
        "author": "Raúl P.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-24"
      }
    ]
  },
  {
    "id": "prod-059",
    "name": "Pantalón Cargo Urban Explorer V2",
    "description": "Pantalón cargo de alta resistencia con costuras reforzadas y bolsillos utilitarios de gran capacidad.",
    "price": 39,
    "rating": 4.3,
    "reviewCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
    ],
    "category": "Moda",
    "tags": [
      "Nuevo",
      "Confort"
    ],
    "colors": [
      {
        "name": "Rojo Carmín",
        "hex": "#991b1b"
      },
      {
        "name": "Plata Lunar",
        "hex": "#d4d4d8"
      },
      {
        "name": "Verde Bosque",
        "hex": "#14532d"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": {
      "S-Rojo Carmín": 10,
      "S-Plata Lunar": 6,
      "S-Verde Bosque": 13,
      "M-Rojo Carmín": 5,
      "M-Plata Lunar": 19,
      "M-Verde Bosque": 6,
      "L-Rojo Carmín": 18,
      "L-Plata Lunar": 17,
      "L-Verde Bosque": 17,
      "XL-Rojo Carmín": 13,
      "XL-Plata Lunar": 10,
      "XL-Verde Bosque": 6
    },
    "details": [
      "Moda con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-59-0",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-59-1",
        "author": "Beto G.",
        "rating": 5,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-27"
      },
      {
        "id": "rev-59-2",
        "author": "Camila T.",
        "rating": 4,
        "comment": "Llegó muy rápido a mi domicilio y bien empaquetado.",
        "date": "2026-06-14"
      },
      {
        "id": "rev-59-3",
        "author": "Diana L.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-20"
      },
      {
        "id": "rev-59-4",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Muy útil y resistente para el uso cotidiano.",
        "date": "2026-06-21"
      },
      {
        "id": "rev-59-5",
        "author": "Sofía A.",
        "rating": 5,
        "comment": "Excelente calidad de materiales, superó mis expectativas.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": "prod-060",
    "name": "Candado de Viaje TSA Lock V4",
    "description": "Candado de seguridad con combinación de 3 dígitos homologado por la TSA para maletas.",
    "price": 39,
    "originalPrice": 46,
    "rating": 4.6,
    "reviewCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80"
    ],
    "category": "Accesorios",
    "tags": [
      "Nuevo",
      "Básicos",
      "Oferta"
    ],
    "colors": [
      {
        "name": "Gris Carbón",
        "hex": "#27272a"
      },
      {
        "name": "Crema Arena",
        "hex": "#fef08a"
      }
    ],
    "sizes": [
      "Estándar",
      "Única"
    ],
    "stock": {
      "Estándar-Gris Carbón": 10,
      "Estándar-Crema Arena": 7,
      "Única-Gris Carbón": 6,
      "Única-Crema Arena": 13
    },
    "details": [
      "Accesorios con diseño acústico / textil moderno.",
      "Construcción premium de alta durabilidad.",
      "Garantía del fabricante de 2 años incluida."
    ],
    "reviews": [
      {
        "id": "rev-60-0",
        "author": "Diana L.",
        "rating": 5,
        "comment": "El color es idéntico al de las fotos, se ve genial.",
        "date": "2026-06-12"
      },
      {
        "id": "rev-60-1",
        "author": "Valeria R.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-60-2",
        "author": "Héctor H.",
        "rating": 5,
        "comment": "Buen ajuste, aunque el empaque estaba algo maltratado, el producto llegó impecable.",
        "date": "2026-06-16"
      },
      {
        "id": "rev-60-3",
        "author": "Valeria R.",
        "rating": 5,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-10"
      },
      {
        "id": "rev-60-4",
        "author": "Sofía A.",
        "rating": 4,
        "comment": "Relación calidad-precio muy justa, lo recomiendo totalmente.",
        "date": "2026-06-16"
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
