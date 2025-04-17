// routes/obtenerPorGenero.js
const express = require('express');
const router = express.Router();
const { juegos } = require('../data');

router.get('/api/genero/:genero', (req, res) => {
  const genero = decodeURIComponent(req.params.genero.toLowerCase());

  const juegosPorGenero = juegos.filter(j => j.genero.toLowerCase() === genero);

  if (juegosPorGenero.length > 0) {
    res.json(juegosPorGenero);
  } else {
    res.status(404).json({ error: 'No se encontraron juegos para ese género.' });
  }
});

module.exports = router;
