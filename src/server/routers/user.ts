import { signUpSchema } from '@/server/schemas/authSchema';
import { findByEmailSchema } from '@/server/schemas/findersSchema';
import { exclude } from '@/utils/exclude';
import { TRPCError } from '@trpc/server';
import { hash } from 'argon2';
import { procedure, router } from '../trpc';

export const userRouter = router({
  signUp: procedure.input(signUpSchema).mutation(async ({ input, ctx }) => {
    const { email, password, name } = input;

    const exists = await ctx.prisma.user.findFirst({
      where: { AND: { email } },
    });

    if (exists) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'User already exists',
      });
    }

    const hashedPassword = await hash(password);

    const user = await ctx.prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    exclude(user, ['password']);

    return { status: 201, message: 'Account created successfuly', user };
  }),
  findByEmail: procedure
    .input(findByEmailSchema)
    .query(async ({ input: { email }, ctx }) => {
      if (!email) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Email is required',
        });
      }

      const user = await ctx.prisma.user.findUnique({ where: { email } });

      if (!user) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' });
      }

      exclude(user, ['password']);

      return user;
    }),
});
