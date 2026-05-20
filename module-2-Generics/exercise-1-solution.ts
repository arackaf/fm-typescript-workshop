const users = [
  { id: 1, name: "Adam", city: "OKC", hobbies: ["Working out"] },
  { id: 2, name: "Ken", city: "Wall Township", hobbies: ["Drinking"] },
  { id: 3, name: "Marc", city: "Minneapolis", hobbies: ["Gymnastics"] },
  { id: 4, name: "Dustin", city: "Minneapolis", hobbies: ["Golf"] },
];

function groupBy<T>(items: T[], key: keyof T) {
  const result: Record<string, T[]> = {};

  for (const item of items) {
    const value = String(item[key]);

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  }
  return result;
}

export {};
