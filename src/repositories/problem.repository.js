const { Problem } = require('../models/index.js');
const NotFound = require('../errors/notFound.error.js')
const logger = require('../config/logger.config.js');


class ProblemRepository {

    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                    title : problemData.title , 
                    description : problemData.description , 
                    testCases : problemData.testCases ? problemData.testCases : []
                });
            return problem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try{
            const problems = await Problem.find({});
            return problems;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async getProblemById(id){
        try{
            const problem = await Problem.findById({_id : id});
            if(!problem){
                logger.error(`invalid ID of the problem (${id}) given. please send the valid problem ID`)
                console.log('after logger')
                throw new NotFound('ProblemID' , {message :'invalid ID of the problem given. please send the valid problem ID'})
            }
            return problem;
        }catch(error){
            // console.log('error in get problem by id repository' , error);
            throw error
        }
    }
}

module.exports = ProblemRepository