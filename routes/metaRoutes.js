const express = require('express');
const router = express.Router();
const { calculateMeta } = require('../controllers/metaController');

router.post('/calcular', calculateMeta);

module.exports = router;
