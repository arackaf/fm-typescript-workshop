type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

// prompt: make this generic over anything with an id

// new function produced by composer-2.5-fast
function getById<T extends { id: number }>(items: T[], id: number) {
  return items.find(item => item.id === id);
}

export {};
