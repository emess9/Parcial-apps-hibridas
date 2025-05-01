import express from 'express';
import Juego from '../models/Juego.js'; 
import Consola from '../models/Consola.js';
import mongoose from 'mongoose';

const router = express.Router();

router.put('/api/juegos/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un ObjectId de MongoDB válido.' });
  }

  const { titulo, anio, genero, consolaId } = req.body;

  if (!titulo && !anio && !genero && !consolaId) {
    return res.status(400).json({ error: 'Debe enviar al menos un campo para actualizar.' });
  }

  if (consolaId) {
    const consolaExiste = await Consola.findById(consolaId);
    if (!consolaExiste) {
      return res.status(400).json({ error: 'La consola ingresada no existe.' });
    }
  }

  try {
    const juegoActualizado = await Juego.findByIdAndUpdate(
      id,
      { titulo, anio, genero, consolaId },
      { new: true, runValidators: true }
    );

    if (!juegoActualizado) {
      return res.status(404).json({ error: 'Juego no encontrado.' });
    }

    res.json({ mensaje: 'Juego actualizado', juego: juegoActualizado });
  } catch (error) {
    console.error('Error al actualizar el juego:', error);
    res.status(500).json({ error: 'Error al actualizar el juego.' });
  }
});

export default router;
