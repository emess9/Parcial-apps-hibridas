import express from 'express';
import mongoose from 'mongoose';
import Juego from '../models/Juego.js';

const router = express.Router();

router.get('/api/consola/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un ObjectId de MongoDB válido.' });
  }

  try {
    const juegos = await Juego.find({ consolaId: id }).select('titulo anio genero');

    if (juegos.length > 0) {
      res.json(juegos);
    } else {
      res.status(404).json({ error: 'No se encontraron juegos para esa consola.' });
    }
  } catch (error) {
    console.error('Error al buscar juegos por consola:', error.message);
    res.status(500).json({ mensaje: 'Error al buscar juegos por consola' });
  }
});

export default router;
