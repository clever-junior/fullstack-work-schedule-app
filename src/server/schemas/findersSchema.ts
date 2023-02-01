import { z } from 'zod';

export const findByEmailSchema = z.object({
  email: z.string().email().nullish(),
});

export const findByIdSchema = z.object({
  id: z.string(),
});

export const findByNameSchema = z.object({
  name: z.string(),
});