import { BillingInfo, Order, Payment, Product, User } from "./utils/types";

type Api = {
  getUser: () => Promise<User>;
  getProduct: () => Promise<Product>;
  getOrder: () => Promise<Order>;
  getBillingInfo: () => Promise<BillingInfo>;
  getPayment: () => Promise<Payment>;
  bad: () => void;
  delete: () => void;
};

type ApiPayloads_A = {
  [K in keyof Api]: Awaited<ReturnType<Api[K]>>;
};

type ApiPayloads_B = {
  [K in keyof Api as K extends `get${infer Name}`
    ? Lowercase<Name>
    : never]: Awaited<ReturnType<Api[K]>>;
};

type ApiPayloads_C = {
  [K in keyof Api as ReturnType<Api[K]> extends void ? never : K]: Awaited<
    ReturnType<Api[K]>
  >;
};

type ApiPayloads_Bad = {
  [K in keyof Api as Api[K] extends (...args: any[]) => void
    ? never
    : K]: Awaited<ReturnType<Api[K]>>;
};

// ----------------------------------------

type Props = {
  a: number;
  b: string;
  c: boolean;
};

type OptProps = {
  [K in keyof Props]?: Props[K];
};

// Show Partial definition

// ----------------------------------------

type Opt = {
  a?: number;
  b?: string;
  c?: boolean;
};

type ReqOpt = {
  [K in keyof Opt]-?: Opt[K];
};

// ----------------------------------------

export {};
