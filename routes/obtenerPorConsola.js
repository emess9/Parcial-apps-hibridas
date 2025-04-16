const express = require('express');
const router = express.Router();
const { juegos } = require('../data');

router.get('/api/juegos/consola/:consolaId', (req, res) => {
  const consolaId = parseInt(req.params.consolaId);

  if (isNaN(consolaId)) {
    return res.status(400).json({ error: 'El ID de la consola debe ser un número.' });
  }

  const filtrados = juegos.filter(j => j.consolaId === consolaId);

  if (filtrados.length > 0) {
    res.json(filtrados);
  } else {
    res.status(404).json({ error: 'No se encontraron juegos para esa consola' });
  }
});

module.exports = router;
