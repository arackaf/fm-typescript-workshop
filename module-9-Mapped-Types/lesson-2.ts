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

// -----------------------

// ----------------------------------------

type Props = {
  a: number;
  b: string;
  c: boolean;
};

type OptProps = never;

// ----------------------------------------

type Opt = {
  a?: number;
  b?: string;
  c?: boolean;
};

type ReqOpt = never;

export {};
