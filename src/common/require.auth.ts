import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { unstable_getServerSession } from 'next-auth';
import { nextAuthOptions } from './auth.config';

export const requireAuth =
  (getServerSideProps: GetServerSideProps) =>
  async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(
      ctx.req,
      ctx.res,
      nextAuthOptions
    );

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
