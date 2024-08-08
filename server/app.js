const express = require('express');
const cors = require("cors");
const weather = require('./routes/weather.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/weather', weather);

module.exports = { app };
