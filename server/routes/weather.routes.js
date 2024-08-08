const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../controllers/weather.controller');

router.get('/', getWeatherData);

module.exports = router;
