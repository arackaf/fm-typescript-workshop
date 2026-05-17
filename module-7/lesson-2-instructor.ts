type Account = {
  id: number;
  name: string;
  accountId: string;
  gamerId: string;
  myIdentification: string;
};

// all fields with ID
type IdFields = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}`
    ? K
    : never]: Account[K];
};

// ok let's include Id*entification*
type IdFields2 = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: Account[K];
};

// let's strip just the name of the types of id's
type IdTypes = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}`
    ? U
    : never]: Account[K];
};

// clean it up and strip the empty id
type IdTypes2 = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}`
    ? U extends ""
      ? never
      : U
    : never]: Account[K];
};

// ok I lied it's really this simple but only because `id` (lowercase) has no other matches
type IdTypes3 = {
  [K in keyof Account as K extends `${infer U}${"Id"}` ? U : never]: Account[K];
};

type KeyProps = keyof IdTypes3;

export {};
