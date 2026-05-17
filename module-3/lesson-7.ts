type Cat = {
  name: string;
  whiskers: number;
  weight: number;
  hunt(distanceToPounce: number): void;
};

type Lion = {
  name: string;
  whiskers: number;
  weight: number;
  hunt(speed: number, distance: number): void;
};

type Dog = {
  name: string;
  obedient: boolean;
};

type Animal = Cat | Dog | Lion;

function dealWithAnimal(animal: Animal) {}

function dealWithCat(animal: Cat) {
  console.log("Cat");
}

function dealWithDog(animal: Dog) {
  console.log("Dog");
}

function dealWithLion(animal: Lion) {
  console.log("Lion");
}

export {};
