import { z } from 'zod';






export const userUpdateSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),  
  password: z.string().min(6).optional(),  
  bio: z.string().optional(),  
  profilePicture: z.string().url().optional(),  
});


