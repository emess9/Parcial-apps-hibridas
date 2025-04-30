import express from 'express';
import { juegos } from '../data.js';

const router = express.Router();

router.get('/api/juegos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un número.' });
  }

  const juego = juegos.find(j => j.id === id);

  if (juego) {
    res.json(juego);
  } else {
    res.status(404).json({ error: 'Juego no encontrado' });
  }
});

export default router;
