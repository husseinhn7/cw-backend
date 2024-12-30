import z from 'zod';
import User from '../../models/usersModel';




const signUpSchema = z.object({
    firstName  : z.string({required_error: "first name is required "}),
    lastName  : z.string({required_error : "last name is also required  "}),
    password: z.string().min(6),
    email: z.string().email()
    // .refine(async (email)=>{
    //   const exists = await User.exists({email: email})
    //   return !exists
    // }, {  message: "Email must be unique",}),
});



export default signUpSchema;