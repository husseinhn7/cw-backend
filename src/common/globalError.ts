import { Request, Response,  NextFunction } from "express";
import { ZodError } from "zod";
import ApiError from "./apiError";
import mongoose from "mongoose";

const GlobalErrorHandler = (error:unknown, req:Request, res:Response, next:NextFunction) =>{
    if (error instanceof ZodError){
         res.status(400).json({
            message :" validation error",
            errors : error.flatten().fieldErrors
        })
    }
    // if (error instanceof mongoose.Error.ValidationError) {
    //     const mongooseErrors = Object.values(error.errors).map((err: any) => ({
    //       path: err.path,
    //       message: err.message
    //     }));
    //     return res.status(400).json({
    //       message: "Mongoose validation error",
    //       errors: mongooseErrors
    //     });
    //   }
    if (error instanceof ApiError){
        res.status(error.statusCode).json({message: error.message})
    }
    else {
        console.log(error)
        res.status(500).json({
            message : "internal server error"
        })
    }

}



export default GlobalErrorHandler