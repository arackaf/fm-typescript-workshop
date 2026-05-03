import { Expect, ExpectNever, TypesMatch } from "../util/test-utils";

type WhichIsLongerSubset<T, U> = T extends []
  ? "SECOND"
  : U extends []
  ? "FIRST"
  : T extends [infer THead, ...infer TRest]
  ? U extends [infer UHead, ...infer URest]
    ? TypesMatch<THead, UHead> extends true
      ? WhichIsLongerSubset<TRest, URest>
      : never
    : never
  : never;

type LongerMatchingArgumentList<
  T,
  U,
  T_IsShorter = WhichIsLongerSubset<T, U>
> = T_IsShorter extends "FIRST" ? T : T_IsShorter extends "SECOND" ? U : never;

// prevent unused warning
// @ts-ignore
type Tests = [
  Expect<TypesMatch<LongerMatchingArgumentList<[], []>, []>>,
  Expect<TypesMatch<LongerMatchingArgumentList<[], [number]>, [number]>>,
  Expect<TypesMatch<LongerMatchingArgumentList<[number], []>, [number]>>,
  Expect<
    TypesMatch<
      LongerMatchingArgumentList<[], [number, string]>,
      [number, string]
    >
  >,
  Expect<
    TypesMatch<
      LongerMatchingArgumentList<[number, string], []>,
      [number, string]
    >
  >,
  Expect<TypesMatch<LongerMatchingArgumentList<[number], [number]>, [number]>>,
  Expect<
    TypesMatch<
      LongerMatchingArgumentList<[string | number], [string | number]>,
      [string | number]
    >
  >,
  Expect<
    TypesMatch<
      LongerMatchingArgumentList<[string | number], [string | number, object]>,
      [string | number, object]
    >
  >,
  Expect<
    TypesMatch<
      LongerMatchingArgumentList<[string | number, object], [string | number]>,
      [string | number, object]
    >
  >,
  Expect<
    TypesMatch<
      LongerMatchingArgumentList<
        [string | number, object],
        [string | number, object, string]
      >,
      [string | number, object, string]
    >
  >,
  Expect<
    TypesMatch<
      LongerMatchingArgumentList<
        [string | number, object, string],
        [string | number, object]
      >,
      [string | number, object, string]
    >
  >,
  ExpectNever<LongerMatchingArgumentList<[string], [number]>>,
  ExpectNever<LongerMatchingArgumentList<[number | string], [string]>>,
  ExpectNever<LongerMatchingArgumentList<["foo"], [string]>>,
  ExpectNever<LongerMatchingArgumentList<[string], ["foo"]>>
];

type LoadingPacket<
  LoadArgs extends unknown[],
  PrefetchArgs extends unknown[]
> = {
  load: (...args: LoadArgs) => Promise<unknown>;
  getPrefetchArgs: (cookies: Record<string, unknown>) => [...PrefetchArgs];
  getPrefetchUrl: (...args: PrefetchArgs) => string;
};

type LoaderPacket<
  PrefetchArgs extends unknown[],
  LoadArgs extends unknown[]
> = {
  load: (
    ...args: LongerMatchingArgumentList<LoadArgs, PrefetchArgs>
  ) => Promise<unknown>;
};

function createPrefetchLoader<
  LoadArgs extends unknown[],
  PrefetchArgs extends unknown[]
>(
  packet: LoadingPacket<LoadArgs, PrefetchArgs>
): LoaderPacket<PrefetchArgs, LoadArgs> {
  return {
    load: (...args) => {
      return Promise.resolve();
    },
  };
}

const loader = createPrefetchLoader({
  load(page: number, search: string) {
    return fetch(`/some/endpoint?page=${page}&search=${search}`);
  },
  getPrefetchArgs(cookies: Record<string, unknown>) {
    const page: number = (cookies.page as number) || 1;
    const search: string = (cookies.search as string) || "";

    return [page, search];
  },
  getPrefetchUrl(page: number, search: string) {
    return `/some/endpoint?page=${page}&search=${search}`;
  },
});

loader.load(12, "");

export {};
