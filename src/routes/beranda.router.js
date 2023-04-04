const express = require('express');
const Controller = require('../controllers/beranda.controller.js');

const router = express.Router();

router.get('/beranda', Controller.getBeranda);

module.exports = router;