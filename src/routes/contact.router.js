const express = require('express');
const Controller = require('../controllers/contact.controller.js');

const router = express.Router();

router.get('/contact', Controller.getContact);

module.exports = router;