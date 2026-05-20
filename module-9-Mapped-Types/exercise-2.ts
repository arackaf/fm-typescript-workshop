import { BillingInfo, Order, Payment, Product, User } from "./utils/types";

type DbUser = {
  id: number;
  name: string;
  createdAt: Date;
};

type PartialOf<T> = never;

type PartialDbUser = PartialOf<DbUser>;

export {};

export {};
