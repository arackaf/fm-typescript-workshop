type Loader<Args extends unknown[]> = {
  load: (...args: Args) => Promise<unknown>;
  getUrl: (...args: Args) => string;
};

export {};
