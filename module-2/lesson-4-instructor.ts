type LoadingPacket<Args extends unknown[]> = {
  load: (...args: Args) => Promise<unknown>;
  getPrefetchArgs: (cookies: Record<string, unknown>) => [...Args];
  getPrefetchUrl: (...args: Args) => string;
};

function createPrefetchLoader<Args extends unknown[]>(packet: LoadingPacket<Args>) {
  return null as any;
}

createPrefetchLoader({
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

export {};
