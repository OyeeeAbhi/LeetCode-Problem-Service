const express = require('express');
const problemRouter = express.Router();
const {problemController} = require('../../controller/index.js');

problemRouter.get('/ping' , problemController.pingProblemController);
problemRouter.get('/:id' , problemController.getProblemById);
problemRouter.get('/' , problemController.getProblems);
problemRouter.post('/' , problemController.addProblem);
problemRouter.delete('/:id' , problemController.deleteProblem);
problemRouter.put('/:id' , problemController.updateProblem);

module.exports = problemRouter
