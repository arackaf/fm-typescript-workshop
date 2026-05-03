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
