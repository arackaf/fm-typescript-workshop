import {
  Expect,
  ExpectFalse,
  ExpectNever,
  TypesMatch,
} from "../util/test-utils";

type TuplesAreSubsetOfEachOther<T, U> = T extends []
  ? true
  : U extends []
  ? true
  : T extends [infer THead, ...infer TRest]
  ? U extends [infer UHead, ...infer URest]
    ? TypesMatch<THead, UHead> extends true
      ? TuplesAreSubsetOfEachOther<TRest, URest>
      : false
    : false
  : false;

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
