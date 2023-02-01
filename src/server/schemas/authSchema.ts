import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});

export const signUpSchema = loginSchema.extend({
  name: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;
