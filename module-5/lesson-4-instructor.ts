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
  // @ts-expect-error
  Expect<false>,
  // @ts-expect-error
  Expect<string>,
  Expect<Adam extends string ? true : false>,
  Expect<TypesMatch<{ name: string }, { name: string }>>
];

export {};
