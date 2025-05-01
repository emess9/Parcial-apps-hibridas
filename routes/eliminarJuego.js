import express from 'express';
import mongoose from 'mongoose';
import Juego from '../models/Juego.js';

const router = express.Router();

router.delete('/api/juegos/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un ObjectId de MongoDB válido.' });
  }

  try {
    const juegoEliminado = await Juego.findByIdAndDelete(id);

    if (!juegoEliminado) {
      return res.status(404).json({ error: 'Juego no encontrado' });
    }

    res.json({ mensaje: 'Juego eliminado', juego: juegoEliminado });
  } catch (error) {
    console.error('Error al eliminar el juego:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
