type Cat = {
  name: string;
  whiskers: number;
  feral: boolean;
};

type Dog = {
  name: string;
  obedient: boolean;
};

let animal: Cat | Dog = {} as any;
// animal

function dealWithCatOrDog(animal: Cat | Dog) {}

function dealWithCatOrDog2(animal: Cat | Dog) {}

export {};
