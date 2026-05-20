type GetPrefetchArgsPacket = {
  url: string;
  urlArgs: Record<string, string>;
  cookie: string;
};

type Expect<T extends true> = T;
type ExpectNever<T extends never> = T;

type TypesMatch<T, U> = [T] extends [U]
  ? [U] extends [T]
    ? true
    : false
  : false;

type TupleOneShorterOrEqualSubset<T, U> = T extends []
  ? true
  : U extends []
  ? false
  : T extends [infer THead, ...infer TRest]
  ? U extends [infer UHead, ...infer URest]
    ? TypesMatch<THead, UHead> extends true
      ? TupleOneShorterOrEqualSubset<TRest, URest>
      : never
    : never
  : never;

type LongerMatchingArgumentList<
  T,
  U,
  T_IsShorter = TupleOneShorterOrEqualSubset<T, U>
> = T_IsShorter extends true ? U : T_IsShorter extends false ? T : never;

// prevent unused warning
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export type FetchConfig<
  PrefetchArgsProduced extends unknown[],
  BackendFetchArgs extends unknown[],
  Data
> = {
  getS4aProxyUrl(...args: PrefetchArgsProduced): string;
  fetchFromSource(...args: BackendFetchArgs): Promise<Data>;
  getPrefetchArgs(
    packet: GetPrefetchArgsPacket
  ): [...PrefetchArgsProduced] | null;
};

export type LoaderPacket<
  PrefetchArgsProduced extends unknown[],
  BackendFetchArgs extends unknown[],
  Data
> = {
  load(
    ...args: LongerMatchingArgumentList<PrefetchArgsProduced, BackendFetchArgs>
  ): Promise<Data>;
  proxyLoad(
    ...args: LongerMatchingArgumentList<PrefetchArgsProduced, BackendFetchArgs>
  ): Promise<Data>;
};
