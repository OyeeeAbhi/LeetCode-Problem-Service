const httpsStatusCodes = require('http-status-codes');
const BaseError = require('./base.error');

class notImplementedError extends BaseError{
    constructor(methodname){
        super('Not implemented' , httpsStatusCodes.NOT_IMPLEMENTED , `${methodname} not implemented` , {});
    }
}

module.exports = notImplementedError