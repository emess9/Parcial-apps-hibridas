const express = require('express');
const router = express.Router();
const { juegos } = require('../data');

router.get('/api/juegos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Validación: Comprobar si id es un número válido
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un número.' });
  }

  const juego = juegos.find(j => j.id === id);

  if (juego) {
    res.json(juego);
  } else {
    res.status(404).json({ error: 'Juego no encontrado' });
  }
});

module.exports = router;
