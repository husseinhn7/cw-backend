
class ApiError extends Error {
    message;
    statusCode;
    isApiError
    constructor(
        message: string,
        statusCode : number
    ){
        super(message)
        this.message = message 
        this.statusCode = statusCode
        this.isApiError = true
    }





    static notFound (message:string, status:number) {
        return new ApiError(message, status)
    }

    static conflict () {

    }

    static badRequest (message:string, status:number) {
        return new ApiError(message, status)
    }


}



export default ApiError