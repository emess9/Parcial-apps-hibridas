
import express from 'express';
import { juegos } from '../data.js';

const router = express.Router();

router.delete('/api/juegos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = juegos.findIndex(j => j.id === id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un número.' });
  }

  if (index !== -1) {
    const eliminado = juegos.splice(index, 1);
    res.json({ mensaje: 'Juego eliminado', juego: eliminado[0] });
  } else {
    res.status(404).json({ error: 'Juego no encontrado' });
  }
});

export default router;