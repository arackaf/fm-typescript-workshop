import { Expect, TypesMatch } from "../util/test-utils";

type LoadingPacket = {
  // args here -->
  load: (...args: any) => Promise<unknown>;
  // should match this args                           -->
  getPrefetchArgs: (cookies: Record<string, unknown>) => any;
  // and also these args -->
  getPrefetchUrl: (...args: any) => string;
};

type Loader = {
  load: (...args: any) => Promise<unknown>;
};

function createPrefetchLoader(packet: LoadingPacket): Loader {
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
  getPrefetchUrl(page: number, search: string) {
    return `/some/endpoint?page=${page}&search=${search}`;
  },
});

type Tests = [
  Expect<TypesMatch<Parameters<typeof loader.load>, [number, string]>>
];

loader.load(1, "Hello");

// @ts-expect-error
loader.load(1);

// @ts-expect-error
loader.load(1, "Hello", null as any);

export {};
