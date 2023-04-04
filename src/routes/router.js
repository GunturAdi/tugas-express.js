const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/', Controller.helloWorld);
router.get('/project', Controller.getProject);
router.get('/footer', Controller.getFooter);

module.exports = router;
