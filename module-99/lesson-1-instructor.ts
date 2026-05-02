type TypesMatch<T, U> = [T] extends [U]
  ? [U] extends [T]
    ? true
    : false
  : false;

type TupleOneProperSubset<T, U> = T extends []
  ? true
  : U extends []
  ? false
  : T extends [infer THead, ...infer TRest]
  ? U extends [infer UHead, ...infer URest]
    ? TypesMatch<THead, UHead> extends true
      ? TupleOneProperSubset<TRest, URest>
      : never
    : never
  : never;

type LongerMatchingArgumentList<
  T,
  U,
  T_IsShorter = TupleOneProperSubset<T, U>
> = T_IsShorter extends true ? U : T_IsShorter extends false ? T : never;

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
