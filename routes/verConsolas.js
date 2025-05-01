import express from 'express';
import Consola from '../models/Consola.js';

const verConsolas = express.Router();

verConsolas.get('/api/consolas', async (req, res) => {
  try {
    const consolas = await Consola.find().select('nombre fabricante'); 
    res.json(consolas);
  } catch (error) {
    console.error('Error al obtener las consolas desde MongoDB:', error.message);
    res.status(500).json({ mensaje: 'Error al obtener las consolas' });
  }
});

export default verConsolas;
