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
  hunt(vector: { x: number; y: number }, speed: number, distance: number): void;
};

type Dog = {
  name: string;
  obedient: boolean;
};

type Animal = Cat | Dog | Lion;

function dealWithAnimal(animal: Animal) {
  if (animalIsLion(animal)) {
    dealWithLion(animal);
  } else if (animalIsCat(animal)) {
    dealWithCat(animal);
  } else {
    dealWithDog(animal);
  }
}

function animalIsLion(animal: Animal): animal is Lion {
  return /.*scary.*/.test(animal.name);
}

function animalIsCat(animal: Animal): animal is Cat {
  return !("obedient" in animal) && !animalIsLion(animal);
}

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
