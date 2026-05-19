export type User = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type Order = {
  id: number;
  user: User;
  product: Product;
  quantity: number;
};

export type BillingInfo = {
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type Payment = {
  id: number;
  order: Order;
  amount: number;
  status: string;
};
