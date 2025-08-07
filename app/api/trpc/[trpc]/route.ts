import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { NextRequest } from 'next/server';

import { appRouter } from '@/lib/trpc/routers/_app';
import { createContext } from '@/lib/trpc/context';

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext({ req }),
    ...(process.env.NODE_ENV === 'development' 
      ? {
          onError: ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
            );
          }
        }
      : {}),
  });

export { handler as GET, handler as POST };
