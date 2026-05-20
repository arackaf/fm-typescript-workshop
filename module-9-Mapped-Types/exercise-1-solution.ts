import { BillingInfo, Order, Payment, Product, User } from "./utils/types";

type DbUser = {
  id: number;
  name: string;
  createdAt: Date;
};

type SerializeDates<T> = {
  [K in keyof T]: T[K] extends Date ? string : T[K];
};

type SerializedDbUser = SerializeDates<DbUser>;

export {};
