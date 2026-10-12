/* ================================================================
   tienda.js · LA CASA DEL SOBERANO
   Perista · Saint Denis · 1880
   "Lo que otros pierden, aquí encuentra dueño."
   ================================================================
   GUÍA DE PRECIOS:
   - precio: es lo que paga el NPC (o precio máx. de venta para ilegales)
   - Tú siempre compras POR DEBAJO de ese precio para ganar la diferencia
   - Ilegales: precio máx. de compra indicado en notas, negocia siempre menos
   ================================================================ */
var TIENDA = {

  supabaseUrl: 'https://otwhvmeofohsbjigxrrb.supabase.co',
  supabaseKey: 'sb_publishable_R9w5QKqznrBFuV0-aQR7PQ_5Ab_tBzP',

  categorias: [
    { id: 'npc',        nombre: 'Objetos NPC',      seccion: 'OBJETOS NPC',      tipo: 'producto' },
    { id: 'ilegales',   nombre: 'Obj. Ilegales',    seccion: 'OBJ. ILEGALES',    tipo: 'producto' },
    { id: 'joyas',      nombre: 'Joyas',            seccion: 'JOYAS',            tipo: 'producto' },
    { id: 'articulos',  nombre: 'Artículos varios', seccion: 'ARTÍCULOS VARIOS', tipo: 'producto' },
    { id: 'miscelanea', nombre: 'Miscelánea',       seccion: 'MISCELÁNEA',       tipo: 'producto' },
    { id: 'materiales', nombre: 'Materiales',       seccion: 'MATERIALES',       tipo: 'suministro' }
  ],

  productos: [

    /* ══════════════════════════════════════════════════════
       OBJETOS NPC — precio = lo que paga el NPC
       Tu ganancia = precio NPC − lo que pagaste tú
    ══════════════════════════════════════════════════════ */
    { nombre: 'Crucifijo de plata',     categoria: 'npc', precio: 1.75 },
    { nombre: 'Cachimba de oro',        categoria: 'npc', precio: 3.72 },
    { nombre: 'Espejo',                 categoria: 'npc', precio: 8.40 },
    { nombre: 'Linterna de Navi',       categoria: 'npc', precio: 1.53 },
    { nombre: 'Éter',                   categoria: 'npc', precio: 0.95 },
    { nombre: 'Cachimba rosa',          categoria: 'npc', precio: 1.02 },
    { nombre: 'Gargantilla',            categoria: 'npc', precio: 36.00 },
    { nombre: 'Pendiente de oro',       categoria: 'npc', precio: 6.00 },
    { nombre: 'Collar de perlas',       categoria: 'npc', precio: 12.09 },
    { nombre: 'Reloj de lujo',          categoria: 'npc', precio: 23.06 },
    { nombre: 'Alfiler',                categoria: 'npc', precio: 12.20 },
    { nombre: 'Estatua de cerámica',    categoria: 'npc', precio: 14.40 },
    { nombre: 'Solitario de rosa',      categoria: 'npc', precio: 5.76 },
    { nombre: 'Linterna',               categoria: 'npc', precio: 1.53 },
    { nombre: 'Pulsera',                categoria: 'npc', precio: 17.14 },
    { nombre: 'Cachimba morada',        categoria: 'npc', precio: 1.02 },
    { nombre: 'Cuadro lujoso 1',        categoria: 'npc', precio: 120.00 },
    { nombre: 'Cuadro lujoso 2',        categoria: 'npc', precio: 120.00 },
    { nombre: 'Cuadro lujoso 3',        categoria: 'npc', precio: 120.00 },
    { nombre: 'Estatua',                categoria: 'npc', precio: 14.40 },
    { nombre: 'Cachimba roja',          categoria: 'npc', precio: 1.02 },
    { nombre: 'Cachimba plateada',      categoria: 'npc', precio: 1.32 },
    { nombre: 'Estatua de fertilidad',  categoria: 'npc', precio: 18.00 },
    { nombre: 'Insignia',               categoria: 'npc', precio: 13.60 },
    { nombre: 'Joyero',                 categoria: 'npc', precio: 1.03 },
    { nombre: 'Lata de hojalata',       categoria: 'npc', precio: 0.42 },
    { nombre: 'Collar de oro',          categoria: 'npc', precio: 18.00 },
    { nombre: 'Pendiente de esmeralda', categoria: 'npc', precio: 4.86 },
    { nombre: 'Reloj de bolsillo',      categoria: 'npc', precio: 6.33 },
    { nombre: 'Binoculares mejorados',  categoria: 'npc', precio: 3.45 },
    { nombre: 'Peine de plata',         categoria: 'npc', precio: 1.00 },
    { nombre: 'Collar de diamantes',    categoria: 'npc', precio: 120.00 },
    { nombre: 'Reloj de pared',         categoria: 'npc', precio: 10.80 },
    { nombre: 'Pluma de oro',           categoria: 'npc', precio: 6.00 },
    { nombre: 'Alianza',                categoria: 'npc', precio: 3.00 },
    { nombre: 'Cuadro',                 categoria: 'npc', precio: 12.00 },
    { nombre: 'Anillo de compromiso',   categoria: 'npc', precio: 35.04 },
    { nombre: 'Pendiente de diamantes', categoria: 'npc', precio: 24.00 },
    { nombre: 'Pendiente de rubís',     categoria: 'npc', precio: 4.86 },
    { nombre: 'Cuadro lujoso 4',        categoria: 'npc', precio: 120.00 },
    { nombre: 'Anillo de bodas',        categoria: 'npc', precio: 56.10 },
    { nombre: 'Pendiente de perlas',    categoria: 'npc', precio: 2.76 },
    { nombre: 'Biblia',                 categoria: 'npc', precio: 2.50 },
    { nombre: 'Monedas antiguas',       categoria: 'npc', precio: 1.70 },
    { nombre: 'Gafas de leer',          categoria: 'npc', precio: 6.00 },
    { nombre: 'Jarrón de plata',        categoria: 'npc', precio: 5.50 },
    { nombre: 'Pin de oro',             categoria: 'npc', precio: 2.50 },
    { nombre: 'Gemelos',                categoria: 'npc', precio: 15.24 },
    { nombre: 'Calomelano',             categoria: 'npc', precio: 0.95 },

    /* ══════════════════════════════════════════════════════
       ILEGALES / CRAFTEO PERISTA
       precio = precio de VENTA al NPC (ganancia ya indicada)
       Precio máx. de COMPRA: ver tabla crafteo
       Negocia siempre por debajo del máximo
    ══════════════════════════════════════════════════════ */
    { nombre: 'Collar diamante (ilegal)',    categoria: 'ilegales', precio: 120.00 },
    { nombre: 'Cuadro 1 (ilegal)',           categoria: 'ilegales', precio: 120.00 },
    { nombre: 'Cuadro 2 (ilegal)',           categoria: 'ilegales', precio: 120.00 },
    { nombre: 'Cuadro 3 (ilegal)',           categoria: 'ilegales', precio: 120.00 },
    { nombre: 'Cuadro 4 (ilegal)',           categoria: 'ilegales', precio: 120.00 },
    { nombre: 'Pendientes diamante',         categoria: 'ilegales', precio: 24.00 },
    { nombre: 'Collar de oro (ilegal)',      categoria: 'ilegales', precio: 18.00 },
    { nombre: 'Estatua fertilidad (ilegal)', categoria: 'ilegales', precio: 18.00 },
    { nombre: 'Estatua (ilegal)',            categoria: 'ilegales', precio: 14.40 },
    { nombre: 'Insignia (ilegal)',           categoria: 'ilegales', precio: 13.60 },
    { nombre: 'Cuadro (ilegal)',             categoria: 'ilegales', precio: 12.00 },
    { nombre: 'Reloj de pared (ilegal)',     categoria: 'ilegales', precio: 10.80 },
    { nombre: 'Espejo (ilegal)',             categoria: 'ilegales', precio: 8.40 },
    { nombre: 'Gafas',                       categoria: 'ilegales', precio: 6.00 },
    { nombre: 'Pluma dorada',               categoria: 'ilegales', precio: 6.00 },
    { nombre: 'Jarrón de plata (ilegal)',    categoria: 'ilegales', precio: 5.50 },
    { nombre: 'Alianza (ilegal)',            categoria: 'ilegales', precio: 3.00 },
    { nombre: 'Biblia (ilegal)',             categoria: 'ilegales', precio: 2.50 },
    { nombre: 'Pin',                         categoria: 'ilegales', precio: 2.50 },
    { nombre: 'Crucifijo (ilegal)',          categoria: 'ilegales', precio: 1.75 },
    { nombre: 'Monedas (ilegal)',            categoria: 'ilegales', precio: 1.70 },
    { nombre: 'Peine',                       categoria: 'ilegales', precio: 1.00 },
    { nombre: 'Éter (ilegal)',               categoria: 'ilegales', precio: 0.95 },
    { nombre: 'Calomelano (ilegal)',         categoria: 'ilegales', precio: 0.95 },

    /* ══════════════════════════════════════════════════════
       ARTÍCULOS GENERALES
       precio = precio oficial del servidor (compra siempre por debajo)
    ══════════════════════════════════════════════════════ */
    { nombre: 'Jeringuilla de caballo',  categoria: 'articulos', precio: 2.07 },
    { nombre: 'Cepillos de caballo',     categoria: 'articulos', precio: 2.13 },
    { nombre: 'Jeringuilla mascotas',    categoria: 'articulos', precio: 1.71 },
    { nombre: 'Transportín',             categoria: 'articulos', precio: 4.37 },
    { nombre: 'Pipa',                    categoria: 'articulos', precio: 1.65 },
    { nombre: 'Pipa tallada',            categoria: 'articulos', precio: 2.40 },
    { nombre: 'Pipa calavera',           categoria: 'articulos', precio: 3.15 },
    { nombre: 'Hacha',                   categoria: 'articulos', precio: 3.45 },
    { nombre: 'Pala',                    categoria: 'articulos', precio: 3.45 },
    { nombre: 'Pico',                    categoria: 'articulos', precio: 3.45 },
    { nombre: 'Martillo',                categoria: 'articulos', precio: 3.45 },
    { nombre: 'Linterna',                categoria: 'articulos', precio: 3.00 },
    { nombre: 'Batea',                   categoria: 'articulos', precio: 2.55 },
    { nombre: 'Cubo vacío',              categoria: 'articulos', precio: 1.80 },
    { nombre: 'Fundidora',               categoria: 'articulos', precio: 12.57 },
    { nombre: 'Alambique',               categoria: 'articulos', precio: 13.00 },
    { nombre: 'Rastrillo',               categoria: 'articulos', precio: 3.50 },
    { nombre: 'Prismáticos',             categoria: 'articulos', precio: 8.20 },
    { nombre: 'Reloj de bolsillo',       categoria: 'articulos', precio: 15.15 },
    { nombre: 'Cuchillo',                categoria: 'articulos', precio: 4.35 },
    { nombre: 'Dardos',                  categoria: 'articulos', precio: 7.35 },
    { nombre: 'Perfume mujer',           categoria: 'articulos', precio: 2.57 },
    { nombre: 'Perfume hombre',          categoria: 'articulos', precio: 2.72 },
    { nombre: 'Bomba de agua',           categoria: 'articulos', precio: 2.00 },
    { nombre: 'Manguera de agua',        categoria: 'articulos', precio: 4.20 },
    { nombre: 'Espantapájaros',          categoria: 'articulos', precio: 13.20 },
    { nombre: 'Insecticida',             categoria: 'articulos', precio: 4.05 },
    { nombre: 'Ramo de novia',           categoria: 'articulos', precio: 8.70 },
    { nombre: 'Corona funeraria',        categoria: 'articulos', precio: 11.10 },
    { nombre: 'Ramo silvestre',          categoria: 'articulos', precio: 7.50 },
    { nombre: 'Ramo de rosas',           categoria: 'articulos', precio: 7.50 },
    { nombre: 'Pepitas de oro',          categoria: 'articulos', precio: 0.30 },
    { nombre: 'Mena de oro',             categoria: 'articulos', precio: 4.60 },
    { nombre: 'Sal',                     categoria: 'articulos', precio: 0.07 },

    /* ══════════════════════════════════════════════════════
       CASA DE EMPEÑOS
       precio = precio oficial (compra siempre por debajo)
    ══════════════════════════════════════════════════════ */
    { nombre: 'Mesa ping pong',          categoria: 'empenos', precio: 12.75 },
    { nombre: 'Papel',                   categoria: 'empenos', precio: 0.08 },
    { nombre: 'Fibra',                   categoria: 'empenos', precio: 0.20 },
    { nombre: 'Palo de madera',          categoria: 'empenos', precio: 0.15 },
    { nombre: 'Barril',                  categoria: 'empenos', precio: 1.10 },
    { nombre: 'Pluma',                   categoria: 'empenos', precio: 0.15 },
    { nombre: 'Mapa',                    categoria: 'empenos', precio: 2.00 },
    { nombre: 'Mochila de superviviente',categoria: 'empenos', precio: 15.00 },
    { nombre: 'Mochila de viajero',      categoria: 'empenos', precio: 20.00 },
    { nombre: 'Fonógrafo',               categoria: 'empenos', precio: 20.40 },
    { nombre: 'Mochila de cazador',      categoria: 'empenos', precio: 20.00 },
    { nombre: 'Brújula',                 categoria: 'empenos', precio: 1.70 },
    { nombre: 'Cámara avanzada',         categoria: 'empenos', precio: 20.40 },
    { nombre: 'Mochila básica',          categoria: 'empenos', precio: 20.00 },
    { nombre: 'Diario',                  categoria: 'empenos', precio: 2.00 },
    { nombre: 'Cantimplora vacía',       categoria: 'empenos', precio: 3.40 },
    { nombre: 'Mapa de pesca',           categoria: 'empenos', precio: 1.00 },
    { nombre: 'Caña de pescar',          categoria: 'empenos', precio: 2.00 },

    /* ══════════════════════════════════════════════════════
       MATERIALES
       precio = precio MÁXIMO que pagas a civiles
       (empresas te venden más barato — úsalas primero)
    ══════════════════════════════════════════════════════ */
    { nombre: 'Sal',              categoria: 'materiales', precio: 0.10 },
    { nombre: 'Grasa animal',     categoria: 'materiales', precio: 0.25 },
    { nombre: 'Carbón',           categoria: 'materiales', precio: 0.20 },
    { nombre: 'Piedra',           categoria: 'materiales', precio: 0.10 },
    { nombre: 'Azufre',           categoria: 'materiales', precio: 0.20 },
    { nombre: 'Palo de madera',   categoria: 'materiales', precio: 0.20 },
    { nombre: 'Plantas',          categoria: 'materiales', precio: 0.20 },
    { nombre: 'Fibra',            categoria: 'materiales', precio: 0.30 },
    { nombre: 'Carne de pescado', categoria: 'materiales', precio: 0.50 },
    { nombre: 'Carne de salmón',  categoria: 'materiales', precio: 0.60 },
    { nombre: 'Carne de caza',    categoria: 'materiales', precio: 0.50 },
    { nombre: 'Pepita de oro',    categoria: 'materiales', precio: 0.30 },

    // Miscelánea — tabaco y pipas
    { nombre: 'Caja de puros',       categoria: 'miscelanea', precio: 4.30 },
    { nombre: 'Caja de cigarrillos', categoria: 'miscelanea', precio: 4.00 },
    { nombre: 'Cigarrillos sueltos', categoria: 'miscelanea', precio: 0.40 },
    { nombre: 'Pipa normal',         categoria: 'miscelanea', precio: 1.60 },
    { nombre: 'Pipa tallada',        categoria: 'miscelanea', precio: 2.45 },
    { nombre: 'Pipa de calavera',    categoria: 'miscelanea', precio: 2.30 }
  ]
};
