// prompt:

/*
Can we ensure that whatever is returned from this function is automatically inferred as a literal tuple type? 
*/

// updates from composer-2.5-fast

type Loader<TArgs extends readonly unknown[], TReturn = unknown> = {
  load: (...args: TArgs) => Promise<TReturn>;
  getUrl: (...args: TArgs) => string;
  getPrefetchArgs: (cookies: Record<string, unknown>) => readonly [...TArgs];
};

type LoaderResult<TArgs extends readonly unknown[]> = {
  load: (...args: TArgs) => Promise<any>;
};

function createPrefetchLoader<const Args extends readonly unknown[]>(
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
