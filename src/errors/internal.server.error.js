const BaseError = require('./base.error.js');
const httpStatusCodes = require('http-status-codes');

class internalServerError extends BaseError{
    constructor(details){
        super('Internal Server Error' , httpStatusCodes.INTERNAL_SERVER_ERROR , 'Something Went Wrong' , details)
    }
}

module.exports = internalServerError