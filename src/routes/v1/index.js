const express = require('express');
const v1Router = express.Router();
const problemRouter = require('./problems.routes.js');

v1Router.use('/problems' , problemRouter);

module.exports = v1Router;

