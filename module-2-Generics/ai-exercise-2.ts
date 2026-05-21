type Loader = {
  load: (...args: any) => Promise<unknown>;
  getUrl: (...args: any) => string;
};

export {};
