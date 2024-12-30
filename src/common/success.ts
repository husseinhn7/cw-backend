import { Express, Response, Request } from "express";



const success = (
    res: Response,
    statusCode: number,
    msg: string ,
    data: object
    ) => {
    return res.status(statusCode).json({message: msg, data: data});
    }


export default success;