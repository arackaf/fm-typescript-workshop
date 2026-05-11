import { Expect, ExpectFalse, TypesMatch } from "../util/test-utils";

type TuplesAreSubsetOfEachOther<T, U> = false;

// prevent unused warning
// @ts-ignore
type Tests = [
  Expect<TuplesAreSubsetOfEachOther<[], []>>,
  Expect<TuplesAreSubsetOfEachOther<[], [number]>>,
  Expect<TuplesAreSubsetOfEachOther<[number], []>>,
  Expect<TuplesAreSubsetOfEachOther<[], [number, string]>>,
  Expect<TuplesAreSubsetOfEachOther<[number, string], []>>,
  Expect<TuplesAreSubsetOfEachOther<[number], [number]>>,
  Expect<TuplesAreSubsetOfEachOther<[string | number], [string | number]>>,
  Expect<
    TuplesAreSubsetOfEachOther<[string | number], [string | number, object]>
  >,
  Expect<
    TuplesAreSubsetOfEachOther<[string | number, object], [string | number]>
  >,
  Expect<
    TuplesAreSubsetOfEachOther<
      [string | number, object],
      [string | number, object, string]
    >
  >,
  Expect<
    TuplesAreSubsetOfEachOther<
      [string | number, object, string],
      [string | number, object]
    >
  >,
  ExpectFalse<TuplesAreSubsetOfEachOther<[string], [number]>>,
  ExpectFalse<TuplesAreSubsetOfEachOther<[number | string], [string]>>,
  ExpectFalse<TuplesAreSubsetOfEachOther<["foo"], [string]>>,
  ExpectFalse<TuplesAreSubsetOfEachOther<[string], ["foo"]>>
];

export {};
