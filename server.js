const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>API de Juegos</title></head>
      <body style="font-family: sans-serif; padding: 2rem;">
        <h1>API de Juegos 🎮</h1>
        <p>Explora los juegos y sus consolas</p>
        <ul>
          <li><a href="/api/juegos">/api/juegos</a></li>
          <li><a href="/api/consolas">/api/consolas</a></li>
        </ul>
        <footer style="margin-top: 3rem; font-size: 0.9rem; color: gray;">
          <hr>
          <p>Nombre: Ezequiel Messina</p>
          <p>Materia: Aplicaciones Híbridas</p>
          <p>Docente: Jonathan Cruz</p>
          <p>Comisión: DWM4AP</p>
        </footer>
      </body>
    </html>
  `);
});

// Importar las rutas 
app.use(require('./routes/verJuegos'));
app.use(require('./routes/verConsolas'));
app.use(require('./routes/obtenerPorId'));
app.use(require('./routes/obtenerPorConsola'));
app.use(require('./routes/obtenerPorGenero'));
app.use(require('./routes/actualizarJuego'));
app.use(require('./routes/eliminarJuego'));

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
