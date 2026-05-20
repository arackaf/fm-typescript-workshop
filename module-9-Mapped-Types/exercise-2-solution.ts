const users = [
  { id: 1, name: "Adam", city: "OKC", hobbies: ["Working out"] },
  { id: 2, name: "Ken", city: "Wall Township", hobbies: ["Drinking"] },
  { id: 3, name: "Marc", city: "Minneapolis", hobbies: ["Gymnastics"] },
  { id: 4, name: "Dustin", city: "Minneapolis", hobbies: ["Golf"] },
];

type StringOrNumberKeys<T> = {
  [K in keyof T]: T[K] extends string | number ? K : never;
}[keyof T];

function groupBy<T, K extends StringOrNumberKeys<T>>(items: T[], key: K) {
  const result: Record<string | number, T[]> = {};

  for (const item of items) {
    const value = item[key] as string | number;

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  }
  return result;
}

groupBy(users, "id");
groupBy(users, "city");

// @ts-expect-error
groupBy(users, "hobbies");

export {};
