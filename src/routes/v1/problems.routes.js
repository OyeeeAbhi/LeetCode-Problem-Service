const express = require('express');
const problemRouter = express.Router();
const {problemController} = require('../../controller/index.js');

problemRouter.get('/ping' , problemController.pingProblemController);
problemRouter.get('/:id' , problemController.getProblem);
problemRouter.get('/' , problemController.getProblem);
problemRouter.post('/' , problemController.addProblem);
problemRouter.delete('/:id' , problemController.deleteProblem);
problemRouter.put('/:id' , problemController.updateProblem);

module.exports = problemRouter
