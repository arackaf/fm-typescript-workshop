// prompt: gimme a Serialize mapped type - convert Dates to string, and remove functions

// result from composer-2.5-fast

type DbUser = {
  id: number;
  name: string;
  createdAt: Date;
  update: (newFields: Partial<DbUser>) => void;
  delete: () => void;
};

type Serialize<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any
    ? never
    : K]: T[K] extends Date ? string : T[K];
};

type SerializedDbUser = Serialize<DbUser>;
export {};
