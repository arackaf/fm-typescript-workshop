import { BillingInfo, Order, Payment, Product, User } from "./utils/types";

type Api = {
  getUser: () => Promise<User>;
  getProduct: () => Promise<Product>;
  getOrder: () => Promise<Order>;
  getBillingInfo: () => Promise<BillingInfo>;
  getPayment: () => Promise<Payment>;
};

type ApiPayloads_a = {
  [K in keyof Api]: Awaited<ReturnType<Api[K]>>;
};

type ApiPayloads = {
  [K in keyof Api as K extends `get${infer Name}`
    ? Lowercase<Name>
    : never]: Awaited<ReturnType<Api[K]>>;
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
