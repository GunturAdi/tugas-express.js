const express = require('express');
const Controller = require('../controllers/goals.controller.js');

const router = express.Router();

router.get('/goals', Controller.getGoals);

module.exports = router;