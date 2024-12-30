import UserModel from "../../models/usersModel";
import catchError from "../../common/catchError";
import { Request, Response, NextFunction } from "express";
import { userUpdateSchema } from "../../validation/userValidations";
import ApiError from "../../common/apiError";
import success from "../../common/success";




const updateUser = catchError(async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req
    const { id } = req.params
    userUpdateSchema.parse(body)
    const user = await UserModel.findByIdAndUpdate(id, body )
    if (!user) return next(ApiError.notFound("user not found", 404))
    success(
        res,
        200,
        "user updated successfully",
        user
    )
})



// const getUserProfile = catchError(async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params
//     const user = await UserModel.(id, body )
//     if (!user) return next(ApiError.notFound("user not found", 404))
//     success(
//         res,
//         200,
//         "user updated successfully",
//         user
//     )
// })


export const userControllers =   {
    updateUser,
    // getUserProfile

}