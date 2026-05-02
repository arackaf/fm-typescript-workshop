type LoadingPacket = {
  load: (...args: any) => Promise<unknown>;
  getPrefetchArgs: (cookies: Record<string, unknown>) => any;
  getPrefetchUrl: (...args: any) => string;
};

function createPrefetchLoader(packet: LoadingPacket) {
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
