const { Problem } = require('../models/index.js');

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
            return problem;
        }catch(error){
            console.log('error in get problem by id repository' , error);
            throw error
        }
    }
}

module.exports = ProblemRepository