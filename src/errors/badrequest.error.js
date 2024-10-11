const BaseError = require('./base.error.js');
const httpStatusCodes = require('http-status-codes');

class BadRequest extends BaseError{
    constructor(propertyName , details){
        super("Bad Request" , httpStatusCodes.BAD_REQUEST , `Invalid Structure for ${propertyName} provided ` , details)
    }
}

module.exports = BadRequest;