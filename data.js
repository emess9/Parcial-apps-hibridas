
const consolas = [
  { id: 1, nombre: "PlayStation", fabricante: "Sony" },
  { id: 2, nombre: "Nintendo", fabricante: "Nintendo" },
  { id: 3, nombre: "Xbox", fabricante: "Microsoft" }
];

const juegos = [
  { id: 1, titulo: "The Last of Us", anio: 2013, genero: "Acción", consolaId: 1 },
  { id: 2, titulo: "God of War", anio: 2018, genero: "Acción", consolaId: 1 },
  { id: 3, titulo: "Mario Bros", anio: 1985, genero: "Aventura", consolaId: 2 },
  { id: 4, titulo: "The Legend of Zelda", anio: 1986, genero: "Aventura", consolaId: 2 },
  { id: 5, titulo: "33 Immortals", anio: 2024, genero: "Drama", consolaId: 3 },
  { id: 6, titulo: "Perfect Dark", anio: 2025, genero: "Drama", consolaId: 3 }
];

module.exports = { juegos, consolas };
