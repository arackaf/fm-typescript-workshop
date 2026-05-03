type Expect<T extends true> = T;
type ExpectNever<T extends never> = T;
type ExpectFalse<T extends false> = T;

type TypesMatch<T, U> = [T] extends [U]
  ? [U] extends [T]
    ? true
    : false
  : false;

type Adam = "Adam";

type Tests = [
  Expect<true>,
  Expect<false>,
  Expect<string>,
  Expect<Adam extends string ? true : false>
];

export {};
