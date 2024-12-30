import {  Response, Request , NextFunction} from "express";


type AsyncMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const catchError = (fn: AsyncMiddleware) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(
      fn(req, res, next)
    ).catch((error)=>{
      next(error)});
  };
};

export default catchError;
