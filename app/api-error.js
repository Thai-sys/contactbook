class ApiError extends Erroe {
    constructor(message , status) {
        super();
        this.statusCode = this.statusCode;
        this.message = message;
    }
}
module.exports = ApiError;