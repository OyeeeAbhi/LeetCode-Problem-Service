class BaseError extends Error{
    constructor(name , status , description , details){
        super(description);
        this.name = name; //type of error
        this.status = status; // error status codes
        this.details = details // details of error in form of object
    }
}

module.exports = BaseError
// error.stack --> to print the stack trace of errorn - basically it is call trace of the all the function when error has happended 