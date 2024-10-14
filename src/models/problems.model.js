const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : [true , 'Title can not be empty']
    } , 
    description : {
        type : String , 
        required : [true , 'Description can not be empty']
    } , 
    difficulty : {
        type : String , 
        enum : ['easy' , 'medium' , 'hard'] , 
        required : [true , 'Difficulty can not be empty'] , 
        default : 'easy'
    } , 
    testCases : {
        type : [
            {
                input : {
                    type : String ,
                    required : true
                } , 
                output : {
                    type : String , 
                    required : true
                }
            }
        ]
    } , 
    editorial : {
        type : String
    }
})

//const modelObject = mongoose.model('collectionName that we want' , schemaName)
//using our model object we can use our database queries and functions or ORM functions
const Problem = mongoose.model('Problem' , problemSchema);

module.exports = Problem;