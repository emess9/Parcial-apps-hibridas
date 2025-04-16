const express = require('express');
const router = express.Router();
const { consolas } = require('../data');

router.get('/api/consolas', (req, res) => {
  res.json(consolas);
});

module.exports = router;

