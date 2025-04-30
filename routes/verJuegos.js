import express from 'express';
import { juegos } from '../data.js';

const verJuegos = express.Router();

verJuegos.get('/api/juegos', (req, res) => {
  res.json(juegos);
});

export default verJuegos;
