type Cat = {
  name: string;
  whiskers: number;
  feral: boolean;

  TYPE: "CAT";
};

type Dog = {
  name: string;
  obedient: boolean;

  TYPE: "DOG";
};

type AnyAnimal = Cat | Dog;

function getAnimal(): AnyAnimal {
  const val = Math.random();
  if (val < 0.5) {
    return { name: "Muffin", whiskers: 12, feral: true, TYPE: "CAT" };
  }
  return { name: "Rex", obedient: true, TYPE: "DOG" };
}

const animal: AnyAnimal = getAnimal();

function dealWithAnimal(animal: AnyAnimal) {
  switch (animal.TYPE) {
    case "CAT":
      console.log("Cat", animal.name, animal.whiskers);
      break;
    case "DOG":
      console.log("Dog", animal.name, animal.obedient);
      break;
  }
}

export {};
