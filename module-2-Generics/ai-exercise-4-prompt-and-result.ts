// prompt:

/*
getting this error

Type '(cookies: Record<string, unknown>) => (string | number)[]' is not assignable to type '(cookies: Record<string, unknown>) => [page: number, search: string]'.
  Type '(string | number)[]' is not assignable to type '[page: number, search: string]'.
    Target requires 2 element(s) but source may have fewer.ts(2322)
ai-exercise-4.ts(4, 3): The expected type comes from property 'getPrefetchArgs' which is declared here on type 'Loader<[page: number, search: string], unknown>'
*/

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

    return [page, search] as [number, string];
  },
  getUrl(page: number, search: string) {
    return `/some/endpoint?page=${page}&search=${search}`;
  },
});
export {};
