/* ================================================================
   tienda.js · LA CASA DEL SOBERANO
   Perista · Saint Denis · 1880
   ================================================================ */
var TIENDA = {

  supabaseUrl: 'https://otwhvmeofohsbjigxrrb.supabase.co',
  supabaseKey: 'sb_publishable_R9w5QKqznrBFuV0-aQR7PQ_5Ab_tBzP',

  categorias: [
    { id: 'joyas',     nombre: 'Joyas',              seccion: 'JOYAS',       tipo: 'producto' },
    { id: 'relojes',   nombre: 'Relojes y Adornos',  seccion: 'JOYAS',       tipo: 'producto' },
    { id: 'arte',      nombre: 'Arte y Antigüedades', seccion: 'OBJETOS',     tipo: 'producto' },
    { id: 'tabaco',    nombre: 'Tabaco y Licores',    seccion: 'SUMINISTROS', tipo: 'suministro' },
    { id: 'pieles',    nombre: 'Pieles y Trofeos',    seccion: 'NATURALES',   tipo: 'producto' },
    { id: 'ilegales',  nombre: 'Mercancía Especial',  seccion: 'ESPECIAL',    tipo: 'producto' }
  ],

  productos: [
    /* ── JOYAS ──────────────────────────────────────────── */
    { nombre: 'Collar de Oro',          categoria: 'joyas',    precio: 80.00 },
    { nombre: 'Collar de Rubíes',       categoria: 'joyas',    precio: 120.00 },
    { nombre: 'Collar de Diamantes',    categoria: 'joyas',    precio: 200.00 },
    { nombre: 'Pulsera de Oro',         categoria: 'joyas',    precio: 65.00 },
    { nombre: 'Anillo de Diamante',     categoria: 'joyas',    precio: 150.00 },
    { nombre: 'Anillo de Rubí',         categoria: 'joyas',    precio: 90.00 },
    { nombre: 'Anillo de Esmeralda',    categoria: 'joyas',    precio: 100.00 },
    { nombre: 'Pendientes de Perlas',   categoria: 'joyas',    precio: 70.00 },
    { nombre: 'Broche de Diamantes',    categoria: 'joyas',    precio: 130.00 },
    { nombre: 'Diadema de Brillantes',  categoria: 'joyas',    precio: 175.00 },

    /* ── RELOJES Y ADORNOS ───────────────────────────────── */
    { nombre: 'Reloj de Bolsillo de Oro',      categoria: 'relojes', precio: 110.00 },
    { nombre: 'Reloj de Bolsillo de Plata',    categoria: 'relojes', precio: 75.00 },
    { nombre: 'Reloj de Lujo',                 categoria: 'relojes', precio: 160.00 },
    { nombre: 'Pin de Oro',                    categoria: 'relojes', precio: 55.00 },
    { nombre: 'Alfiler de Corbata',            categoria: 'relojes', precio: 45.00 },
    { nombre: 'Pitillera de Plata',            categoria: 'relojes', precio: 60.00 },

    /* ── ARTE Y ANTIGÜEDADES ─────────────────────────────── */
    { nombre: 'Cuadro al Óleo',          categoria: 'arte', precio: 95.00 },
    { nombre: 'Estatuilla de Bronce',    categoria: 'arte', precio: 85.00 },
    { nombre: 'Estatuilla de Marfil',    categoria: 'arte', precio: 140.00 },
    { nombre: 'Vasija Antigua',          categoria: 'arte', precio: 50.00 },
    { nombre: 'Candelabro de Plata',     categoria: 'arte', precio: 70.00 },
    { nombre: 'Figurita de Porcelana',   categoria: 'arte', precio: 45.00 },
    { nombre: 'Jarra Decorativa',        categoria: 'arte', precio: 40.00 },
    { nombre: 'Marco Dorado',            categoria: 'arte', precio: 35.00 },

    /* ── TABACO Y LICORES ────────────────────────────────── */
    { nombre: 'Whisky Añejo',            categoria: 'tabaco', precio: 20.00 },
    { nombre: 'Coñac Francés',           categoria: 'tabaco', precio: 30.00 },
    { nombre: 'Puros Importados (caja)', categoria: 'tabaco', precio: 25.00 },
    { nombre: 'Tabaco de Pipa',          categoria: 'tabaco', precio: 10.00 },

    /* ── PIELES Y TROFEOS ────────────────────────────────── */
    { nombre: 'Piel de Oso Perfecto',    categoria: 'pieles', precio: 60.00 },
    { nombre: 'Piel de Ciervo',          categoria: 'pieles', precio: 25.00 },
    { nombre: 'Piel de Castor',          categoria: 'pieles', precio: 15.00 },
    { nombre: 'Cornamenta de Alce',      categoria: 'pieles', precio: 40.00 },
    { nombre: 'Colmillo de Jabalí',      categoria: 'pieles', precio: 18.00 },

    /* ── MERCANCÍA ESPECIAL ──────────────────────────────── */
    { nombre: 'Documentos Falsos',       categoria: 'ilegales', precio: 250.00 },
    { nombre: 'Mercancía Robada (lote)', categoria: 'ilegales', precio: 180.00 },
    { nombre: 'Moneda Falsa (bolsa)',    categoria: 'ilegales', precio: 90.00 },
    { nombre: 'Información Confidencial',categoria: 'ilegales', precio: 300.00 }
  ]
};
