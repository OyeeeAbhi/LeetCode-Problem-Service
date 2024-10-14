//we execute our business layer in service layer
const { sanizitzeMarkdown } = require('../utils/index.js');

class ProblemService{
    
    constructor(ProblemRepository){
        this.problemRepository = ProblemRepository;
    }

    async createProblem(problemData){
        try{
            problemData.description = sanizitzeMarkdown(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);

            return problem;
        }catch(error){
            console.log(error);
            throw error;
        } 
    }

    async getAllProblems(){
        try{
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        }catch(error){
            console.log(error);
            throw error;
        }
        
    }

    async getProblemById(id){
        try{
            const problem = await this.problemRepository.getProblemById(id);
            return problem
        }catch(error){
            console.log('error in get problem by id service' , error);
            throw error
        }
    }

}

module.exports = ProblemService;