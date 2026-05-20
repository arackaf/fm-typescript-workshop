import { BillingInfo, Order, Payment, Product, User } from "./utils/types";

type DbUser = {
  id: number;
  name: string;
  createdAt: Date;
};

type SerializeDates<T> = never;

type SerializedDbUser = SerializeDates<DbUser>;

export {};
