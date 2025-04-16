const express = require('express');
const router = express.Router();
const { juegos, consolas } = require('../data');

router.put('/api/juegos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Debe ser un número.' });
  }

  const index = juegos.findIndex(j => j.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Juego no encontrado.' });
  }

  const { titulo, anio, genero, consolaId } = req.body;

  if (!titulo && !anio && !genero && !consolaId) {
    return res.status(400).json({ error: 'Debe enviar al menos un campo para actualizar.' });
  }

  if (consolaId !== undefined) {
    const consolaValida = consolas.some(c => c.id === consolaId);
    if (!consolaValida) {
      return res.status(400).json({ error: 'La consola ingresada no existe' });
    }
  }

  juegos[index] = { ...juegos[index], ...req.body };

  res.json({ mensaje: 'Juego actualizado', juego: juegos[index] });
});

module.exports = router;
