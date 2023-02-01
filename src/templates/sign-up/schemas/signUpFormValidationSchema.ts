import { z } from 'zod';

export const signUpFormValidationSchema = z.object({
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  name: z.string(),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
});

export type SignUpFormValidationSchema = z.infer<
  typeof signUpFormValidationSchema
>;
