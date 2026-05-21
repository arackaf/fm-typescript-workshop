// prompt: constraint the args of these functions to be the same

// result from composer-2.5-fast

type Loader<Args extends unknown[]> = {
  load: (...args: Args) => Promise<unknown>;
  getUrl: (...args: Args) => string;
};

export {};
