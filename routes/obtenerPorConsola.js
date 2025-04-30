
import express from 'express';
import {juegos} from '../data.js';

const router = express.Router();

router.get('/api/consola/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un número.' });
  }

  const juegosPorConsola = juegos.filter(j => j.consolaId === id);

  if (juegosPorConsola.length > 0) {
    res.json(juegosPorConsola);
  } else {
    res.status(404).json({ error: 'No se encontraron juegos para esa consola.' });
  }
});

export default router;

