import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/database.js'; // 👈 Conexión DB

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Ruta principal que sirve index.html automáticamente desde carpeta public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Importar rutas
import verJuegos from './routes/verJuegos.js';
import verConsolas from './routes/verConsolas.js';
import obtenerPorId from './routes/obtenerPorId.js';
import obtenerPorConsola from './routes/obtenerPorConsola.js';
import obtenerPorGenero from './routes/obtenerPorGenero.js';
import actualizarJuego from './routes/actualizarJuego.js';
import eliminarJuego from './routes/eliminarJuego.js';
import crearJuego from './routes/crearJuego.js';

app.use(verJuegos);
app.use(verConsolas);
app.use(obtenerPorId);
app.use(obtenerPorConsola);
app.use(obtenerPorGenero);
app.use(actualizarJuego);
app.use(eliminarJuego);
app.use(crearJuego);

// 👉 Conexión a la base de datos
connectDB();

// servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
