const users = [
  { id: 1, name: "Adam", city: "OKC" },
  { id: 2, name: "Ken", city: "Wall Township" },
  { id: 3, name: "Marc", city: "Minneapolis" },
  { id: 4, name: "Dustin", city: "Minneapolis" },
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

export {};
