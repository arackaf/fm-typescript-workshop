// prompt: constraint the args for load and getUrl to be the same, and also
// match the return type of getPrefetchArgs

// new type produced by composer-2.5-fast

type Loader<TArgs extends unknown[], TReturn = unknown> = {
  load: (...args: TArgs) => Promise<TReturn>;
  getUrl: (...args: TArgs) => string;
  getPrefetchArgs: (cookies: Record<string, unknown>) => TArgs;
};

export {};
