import express from 'express';
import mongoose from 'mongoose';
import Juego from '../models/Juego.js';

const router = express.Router();

router.get('/api/juegos/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un ID de MongoDB válido.' });
  }

  try {
    const juego = await Juego.findById(id).select('titulo anio genero'); 

    if (juego) {
      res.json(juego);
    } else {
      res.status(404).json({ error: 'Juego no encontrado' });
    }
  } catch (error) {
    console.error(' Error al buscar juego por ID:', error.message);
    res.status(500).json({ error: 'Error al buscar el juego' });
  }
});

export default router;
