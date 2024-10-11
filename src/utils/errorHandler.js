const BaseError = require("../errors/base.error");
const httpStatusCodes = require('http-status-codes')

function errorHandler(error , req , res , next){
    if(error instanceof BaseError){
        return res.status(error.status).json({
            success : false , 
            message : error.message , 
            error : error.details , 
            data : {}
        })
    }

    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
        success : false , 
        message : 'something went wrong' , 
        error : error , 
        data : {}
    })


}

module.exports = errorHandler