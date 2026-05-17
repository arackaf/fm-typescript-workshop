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

function userSearch(arg: string): User[];
function userSearch(arg: number): User;
function userSearch(arg: string | number): User | User[] {
  if (typeof arg === "string") {
    return users;
  } else {
    return users[0];
  }
}

const a = userSearch(12);

const badArg: string | number = Math.random() < 0.5 ? "" : 12;

export {};
