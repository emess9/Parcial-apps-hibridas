import express from 'express';
import Juego from '../models/Juego.js';

const verJuegos = express.Router();

verJuegos.get('/api/juegos', async (req, res) => {
  try {
    const juegos = await Juego.find().select('titulo anio genero'); 
    res.json(juegos);
  } catch (error) {
    console.error('Error al obtener los juegos desde MongoDB:', error.message);
    res.status(500).json({ mensaje: 'Error al obtener los juegos' });
  }
});

export default verJuegos;
