import { userControllers } from "../controllers/user/userController";
import { Router } from "express";



const router = Router()





router.patch("/:id", userControllers.updateUser)





export default router













