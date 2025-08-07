import type { NextRequest } from 'next/server';

export interface Context {
  req: NextRequest;
}

export const createContext = ({ req }: { req: NextRequest }): Context => {
  return {
    req,
  };
};
