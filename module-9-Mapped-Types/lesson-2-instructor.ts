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

export {};
