import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email().min(1, { message: 'Email is required' }),
  password: z.string().min(6, { message: 'Invalid password' }),
})

export type LoginValidationSchema = z.infer<typeof loginValidationSchema>;