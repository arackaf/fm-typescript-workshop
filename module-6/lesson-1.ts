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

function userSearch<T extends string | number>(arg: T): UserSearchResults<T> {
  if (typeof arg === "string") {
    return users as UserSearchResults<T>;
  } else {
    return users[0] as UserSearchResults<T>;
  }
}

const x = userSearch("");
const y = userSearch(12);

let arg2: string | number = Math.random() < 0.5 ? "" : 12;

const results = userSearch(arg2);

export {};
