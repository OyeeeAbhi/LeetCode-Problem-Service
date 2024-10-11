const express = require('express');
const apiRouter = express.Router();
const v1Router = require('./v1/index.js');

apiRouter.use('/v1' , v1Router);

module.exports = apiRouter