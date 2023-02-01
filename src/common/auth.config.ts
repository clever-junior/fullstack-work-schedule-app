import { loginSchema } from '@/server/schemas/authSchema';
import { prisma } from '@/utils/prisma';
import { hash, verify } from 'argon2';
import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Email',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const creds = await loginSchema.parseAsync(credentials);

        const user = await prisma.user.findFirst({
          where: { email: creds.email },
        });

        if (!user) {
          return null;
        }

        const hashedPassword = await hash(creds.password);

        const isValidPassword = await verify(user.password, hashedPassword);

        if (!isValidPassword) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.username = user.name;
      }

      return token;
    },
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 7 * 24 * 30 * 60, // 7 days
  },
  pages: {
    signIn: '/home',
    newUser: 'sign-up',
  },
};
