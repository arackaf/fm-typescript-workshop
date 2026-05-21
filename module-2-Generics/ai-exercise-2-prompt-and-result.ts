// prompt: constrain these to have the same args

// new type produced by composer-2.5-fast
type Loader<Args extends unknown[]> = {
  load: (...args: Args) => Promise<unknown>;
  getUrl: (...args: Args) => string;
};

export {};
