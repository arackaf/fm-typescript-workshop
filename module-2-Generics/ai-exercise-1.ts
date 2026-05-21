type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

function getById(users: User[], id: number) {
  return users.find(user => user.id === id);
}
