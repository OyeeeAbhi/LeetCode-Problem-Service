const httpStatusCodes = require('http-status-codes');


function pingProblemController(req , res){
    return res.json({message : 'ping problem controller is up'});
}

function addProblem(req , res){
    return res.status(httpStatusCodes.NOT_IMPLEMENTED).json({message : 'Not Implemented'})
}

function getProblem(req , res){
    return res.status(httpStatusCodes.NOT_IMPLEMENTED).json({message : 'Not Implemented'})
}

function getProblems(req , res){
    return res.status(httpStatusCodes.NOT_IMPLEMENTED).json({message : 'Not Implemented'})
}

function deleteProblem(req , res){
    return res.status(httpStatusCodes.NOT_IMPLEMENTED).json({message : 'Not Implemented'})
}

function updateProblem(req , res){
    return res.status(httpStatusCodes.NOT_IMPLEMENTED).json({message : 'Not Implemented'})
}

module.exports = {
    addProblem , 
    getProblem , 
    getProblems ,
    deleteProblem , 
    updateProblem , 
    pingProblemController
}