type Expect = false;
type ExpectNever = false;
type ExpectFalse = false;

type TypesMatch<T, U> = false;

type Adam = "Adam";

type Tests = [
  Expect<true>,
  // @ts-expect-error
  Expect<false>,
  // @ts-expect-error
  Expect<string>,
  Expect<Adam extends string ? true : false>,
  Expect<TypesMatch<{ name: string }, { name: string }>>,
  ExpectFalse<TypesMatch<"a", "a" | "b">>,
  ExpectFalse<TypesMatch<"a" | "b", "a">>,
  ExpectFalse<
    TypesMatch<
      { type: "a"; value: string } | { type: "b"; value: number },
      { type: "a"; value: string }
    >
  >
];
export {};
