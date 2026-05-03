type Expect<T extends true> = T;
type ExpectNever<T extends never> = T;
type ExpectFalse<T extends false> = T;

export {};
