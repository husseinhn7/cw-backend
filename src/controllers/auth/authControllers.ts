import { Request, Response, NextFunction } from "express";
import signUpSchema from "../../validation/authValidation/signUp";
import UserModel from "../../models/usersModel";
import success from "../../common/success";
import catchError from "../../common/catchError";
import ApiError from "../../common/apiError";
import jwt from "jsonwebtoken"





const signUp = catchError( async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const validate =  signUpSchema.parseAsync(body);
    const newUser = await UserModel.create(validate);
    success(res, 201, 'User created successfully', newUser);
})

const login = catchError(async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body
    if (!email || !password) return next(ApiError.badRequest("email and password are required", 400))
    const user = await UserModel.findOne({email : email}).select("+password")
    if (!user || !(await user.comparePassword(password))) return next(ApiError.badRequest("wrong email or password", 400))

    const token = jwt.sign({id:user._id}, process.env.JWT_SEC as string, {
        expiresIn : process.env.JWT_EXP
    })
    success(
        res,
        200,
        "logged in successfully",
        {token:token}
    )
})



const authControllers = {
    signUp,
    login
}







export default authControllers