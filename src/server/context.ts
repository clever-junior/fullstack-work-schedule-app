// import { nextAuthOptions } from '@/common/auth.config';
import { inferAsyncReturnType } from '@trpc/server';
// import * as trpcNext from '@trpc/server/adapters/next';
// import { unstable_getServerSession } from 'next-auth';
import { prisma } from '../utils/prisma';

export const createContext = async (/* {
  req, res
}: trpcNext.CreateNextContextOptions */) => {
  // const session = await unstable_getServerSession(req, res, nextAuthOptions);

  return {
    // req,
    // res,
    // session,
    prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
