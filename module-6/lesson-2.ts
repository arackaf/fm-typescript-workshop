type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Marc" },
  { id: 2, name: "Adam" },
];

type UserSearchResults<T extends string | number> = T extends string
  ? User[]
  : User;

export {};
