const users = [
  { id: 1, name: "Adam", city: "OKC", hobbies: ["Working out"] },
  { id: 2, name: "Ken", city: "Wall Township", hobbies: ["Drinking"] },
  { id: 3, name: "Marc", city: "Minneapolis", hobbies: ["Gymnastics"] },
  { id: 4, name: "Dustin", city: "Minneapolis", hobbies: ["Golf"] },
];
function groupBy(items: any[], key: any) {
  return items.reduce((acc, item) => {
    const value = item[key];

    if (!acc[value]) {
      acc[value] = [];
    }

    acc[value].push(item);

    return acc;
  }, {});
}

groupBy(users, "id");
groupBy(users, "city");

// @ts-expect-error
groupBy(users, "hobbies");

export {};
