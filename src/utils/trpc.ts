import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../server/routers/_app';

function getBaseUrl() {
  if (typeof window !== 'undefined') return '';

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    if (typeof window !== 'undefined') {
      // during client requests
      return {
        links: [
          httpBatchLink({
            url: '/api/trpc',
          }),
        ],
      };
    }
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,

          headers() {
            if (ctx?.req) {
              const { connection: _connection, ...headers } = ctx.req.headers;
              return {
                ...headers,
                'x-ssr': '1',
              };
            }
            return {};
          },
        }),
      ],
    };
  },
  ssr: true,
  responseMeta({ ctx, clientErrors }) {
    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }
    // cache request for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
    return {
      headers: {
        'cache-control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
      },
    };
  },
});
