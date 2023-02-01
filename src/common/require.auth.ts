import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { getServerSession } from 'next-auth';
import { nextAuthOptions } from './auth.config';

export const requireAuth =
  (getServerSideProps: GetServerSideProps) =>
  async (ctx: GetServerSidePropsContext) => {
    const session = await getServerSession(ctx.req, ctx.res, nextAuthOptions);

    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return await getServerSideProps(ctx);
  };
