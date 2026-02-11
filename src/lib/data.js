// src/lib/data.js

export const menuItems = [
  // --- PLATOS FUERTES ---
  {
    id: 1,
    name: "Pollo Horneado Entero",
    description: "Pollo entero horneado al estilo Al Grilled. Jugoso, dorado y con sazón dominicano.",
    price: "RD$600 Solo / RD$750 Acompañado",
    image: "/menu/pollo-entero.jpg"
  },
  {
    id: 2,
    name: "Medio Pollo Horneado",
    description: "La porción perfecta para compartir. Horneado con especias frescas.",
    price: "RD$300 Solo / RD$400 Acompañado",
    image: "/menu/medio-pollo.jpg"
  },
  {
    id: 3,
    name: "Muslo de Pollo (1/4)",
    description: "Muslo horneado, tierno y lleno de sabor casero.",
    price: "RD$125 Solo / RD$225 Acompañado",
    image: "/menu/muslo.jpg"
  },
  {
    id: 7,
    name: "Pechuga de Pollo (1/4)",
    description: "Pechuga horneada con especias de la casa, jugosa y ligera.",
    price: "RD$125 Solo / RD$225 Acompañado",
    image: "/menu/pechuga.jpg"
  },

  // --- COMBOS DEL DÍA ---
  {
    id: 5,
    name: "Combo 1: 1/4 Pollo + Guarnición",
    description: "Tu pieza favorita (Muslo o Pechuga) con nuestro rico moro de guandules y ensalada rusa.",
    price: "RD$285",
    image: "/menu/plato-dia.jpg"
  },
  {
    id: 15,
    name: "Combo 2: 1/2 Pollo + Guarnición",
    description: "Medio pollo horneado servido con moro de guandules y ensalada rusa.",
    price: "RD$500",
    image: "/menu/medio-pollo.jpg" // Reusamos imagen o pon una nueva
  },

  // --- GUARNICIONES Y ENSALADAS ---
  {
    id: 6,
    name: "Ensalada Rusa",
    description: "Tradicional con papa, zanahoria, cebolla, guisantes, huevo hervido y mayonesa.",
    price: "RD$200",
    image: "/menu/ensalada-rusa.jpg"
  },
  {
    id: 16,
    name: "Moro de Gandules",
    description: "Arroz moro con gandules al estilo clásico.",
    price: "Peq: RD$150 / Med: RD$200 / Grd: RD$350",
    image: "/menu/plato-dia.jpg" // Usa una imagen genérica si no tienes una específica
  },
  {
    id: 17,
    name: "Yuca o Guineos",
    description: "Guarnición de víveres encebollados (Yuca o Guineos).",
    price: "Desde RD$125 (Ver detalle en local)",
    image: "/menu/pollo-yuca.jpg"
  },

  // --- BEBIDAS Y JUGOS ---
  {
    id: 18,
    name: "Jugo de China Natural (24oz)",
    description: "Jugo de naranja recién exprimido. Disponible con leche o natural.",
    price: "Normal: RD$150 / Con Leche: RD$200",
    image: "/menu/chinola.jpg" // Ojo: Necesitarás una foto de jugo naranja
  },
  {
    id: 11,
    name: "Jugos Naturales (12-16oz)",
    description: "Sabores: Chinola, Chinola con Avena, Fresa con Limón, Remolacha con Avena.",
    price: "RD$75",
    image: "/menu/chinola.jpg"
  },
  {
    id: 19,
    name: "Coca Cola",
    description: "Refresco de botella.",
    price: "RD$40",
    image: "/menu/coca-cola.jpg" 
  },
  {
    id: 20,
    name: "Kola Real / Agua",
    description: "Refresco Kola Real o Botella de Agua.",
    price: "Kola Real: RD$25 / Agua: RD$25",
    image: "/menu/kola-real.jpg" // Placeholder
  },
  
  // Mantenemos el Chicharrón por si acaso, aunque no estaba en el PDF nuevo
  {
    id: 8,
    name: "Chicharrón",
    description: "Crujiente por fuera y jugoso por dentro. Ideal para acompañar con yuca o tostones.",
    price: "RD$ 650 la libra / RD$325 media libra",
    image: "/menu/chicharron.jpg"
  }
];

export const benefits = [
  { icon: "🔥", title: "Sabor garantizado", text: "Pollo horneado con sabor y calidad." },
  { icon: "🕒", title: "Rápido y puntual", text: "Entregamos caliente y a tiempo." },
  { icon: "👩‍🍳", title: "Hecho con amor", text: "Recetas de casa, calidad constante." },
  
];

export const testimonials = [
  { quote: "¡El mejor pollo horneado de La Fe!", author: "Cliente verificado" },
  { quote: "El chicharrón quedó durísimo.", author: "Cliente verificado" },
  { quote: "Sazón constante y entrega puntual.", author: "Cliente verificado" },
];