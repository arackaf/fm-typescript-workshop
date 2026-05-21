type Loader = {
  load: (...args: any) => Promise<unknown>;
  getUrl: (...args: any) => string;
  getPrefetchArgs: (cookies: Record<string, unknown>) => any;
};

export {};
