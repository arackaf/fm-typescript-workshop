type Loader<TArgs extends unknown[], TReturn = unknown> = {
  load: (...args: TArgs) => Promise<TReturn>;
  getUrl: (...args: TArgs) => string;
  getPrefetchArgs: (cookies: Record<string, unknown>) => TArgs;
};

type LoaderResult<TArgs extends unknown[]> = {
  load: (...args: TArgs) => Promise<any>;
};

function createPrefetchLoader<Args extends unknown[]>(
  packet: Loader<Args>
): LoaderResult<Args> {
  return null as any;
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
  getUrl(page: number, search: string) {
    return `/some/endpoint?page=${page}&search=${search}`;
  },
});

export {};
