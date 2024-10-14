const httpStatusCodes = require('http-status-codes');
const BadRequest = require('../errors/badrequest.error');
const {ProblemService} = require('../services/index.js');
const {ProblemRepository} = require('../repositories/index.js');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req , res){
    return res.json({message : 'ping problem controller is up'});
}

async function addProblem(req , res , next){
    try{
        const newProblem = await problemService.createProblem(req.body);
        
        return res.status(httpStatusCodes.CREATED).json({
            success : true , 
            message : "Successfully created the problem" , 
            error : {} , 
            data : newProblem
        })
    }catch(error){
        next(error);
    }
}

async function getProblems(req , res , next){
    try{
        const problems = await problemService.getAllProblems();
        return res.status(httpStatusCodes.OK).json({
            success : true , 
            message : "Successfully fetched the problems" , 
            error : {} , 
            data : problems
        })
    }catch(error){
        console.log(error , 'error in get problem controller');
        next(error);
    }
}

async function getProblemById(req , res , next){
    try{
        const problemId = req.params.id || '';
        const problem = await problemService.getProblemById(problemId);
        return res.status(httpStatusCodes.OK).json({
            success : true , 
            message : "problem Fetched successfully",
            error : {} , 
            data : problem
        })
    }catch(error){
        console.log(error);
        next(error);
    }
}

function deleteProblem(req , res){
    return res.status(httpStatusCodes.NOT_IMPLEMENTED).json({message : 'Not Implemented'})
}

function updateProblem(req , res){
    return res.status(httpStatusCodes.NOT_IMPLEMENTED).json({message : 'Not Implemented'})
}

module.exports = {
    addProblem , 
    getProblemById , 
    getProblems ,
    deleteProblem , 
    updateProblem , 
    pingProblemController
}