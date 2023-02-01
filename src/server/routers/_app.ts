import { router } from '../trpc';
import { genericRouter } from './genericRouter';

export const appRouter = router({
  generic: genericRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
