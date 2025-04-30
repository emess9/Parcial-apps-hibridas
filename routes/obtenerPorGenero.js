
import express from 'express';
import {juegos} from '../data.js';

const router = express.Router();

router.get('/api/genero/:genero', (req, res) => {
  const genero = decodeURIComponent(req.params.genero.toLowerCase());

  const juegosPorGenero = juegos.filter(j => j.genero.toLowerCase() === genero);

  if (juegosPorGenero.length > 0) {
    res.json(juegosPorGenero);
  } else {
    res.status(404).json({ error: 'No se encontraron juegos para ese género.' });
  }
});

export default router; 