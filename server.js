const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());

// Ruta principal que sirve index.html automáticamente desde carpeta public
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Importar las rutas
app.use(require('./routes/verJuegos'));
app.use(require('./routes/verConsolas'));
app.use(require('./routes/obtenerPorId'));
app.use(require('./routes/obtenerPorConsola'));
app.use(require('./routes/obtenerPorGenero'));
app.use(require('./routes/actualizarJuego'));
app.use(require('./routes/eliminarJuego'));

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
