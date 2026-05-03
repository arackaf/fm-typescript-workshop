export type Expect<T extends true> = T;
export type ExpectNever<T extends never> = T;
export type ExpectFalse<T extends false> = T;

export type TypesMatch<T, U> = [T] extends [U]
  ? [U] extends [T]
    ? true
    : false
  : false;
