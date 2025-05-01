import express from 'express';
import Juego from '../models/Juego.js';

const router = express.Router();

router.get('/api/genero/:genero', async (req, res) => {
  try {
    const genero = decodeURIComponent(req.params.genero.toLowerCase());

    const juegos = await Juego.find({
      genero: { $regex: new RegExp(`^${genero}$`, 'i') }
    }).select('titulo anio genero');

    if (juegos.length > 0) {
      res.json(juegos);
    } else {
      res.status(404).json({ error: 'No se encontraron juegos para ese género.' });
    }
  } catch (error) {
    console.error('Error al buscar juegos por género:', error.message);
    res.status(500).json({ mensaje: 'Error al buscar juegos por género' });
  }
});

export default router;
