const express = require('express');
const router = express.Router();
const { juegos } = require('../data');

router.get('/api/juegos/genero/:genero', (req, res) => {
  const genero = req.params.genero.toLowerCase();

  if (!genero || genero.trim() === '') {
    return res.status(400).json({ error: 'Debe proporcionar un género válido.' });
  }

  const filtrados = juegos.filter(j => j.genero.toLowerCase() === genero);

  if (filtrados.length > 0) {
    res.json(filtrados);
  } else {
    res.status(404).json({ error: 'No se encontraron juegos de ese género' });
  }
});

module.exports = router;
