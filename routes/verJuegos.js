const express = require('express');
const router = express.Router();
const { juegos } = require('../data');

router.get('/api/juegos', (req, res) => {
  res.json(juegos);
});

module.exports = router;

