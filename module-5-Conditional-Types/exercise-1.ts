type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type GetReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: unknown[]
) => infer R
  ? R
  : never;

type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type GetParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => unknown
  ? P
  : never;

type Number = GetReturnType<() => number>;
type Bad = GetReturnType<number>;

type StringTuple = GetParameters<(a: string) => number>;
type Bad2 = GetParameters<number>;

export {};
