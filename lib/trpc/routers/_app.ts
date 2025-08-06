import { router } from '../server';
import { contactRouter } from './contact';
import { dataRouter } from './data';

export const appRouter = router({
  contact: contactRouter,
  data: dataRouter,
});

export type AppRouter = typeof appRouter;
