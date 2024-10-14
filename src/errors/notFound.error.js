const BaseError = require('./base.error.js');
const httpStatusCodes = require('http-status-codes');

class NotFound extends BaseError{
    constructor(propertyName , details){
        super("Not Found" , httpStatusCodes.NOT_FOUND , `Unable to find the problem for given ${propertyName} ` , details)
    }
}

module.exports = NotFound;