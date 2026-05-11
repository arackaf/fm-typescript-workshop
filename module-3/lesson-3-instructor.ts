type Cat = {
  name: string;
  whiskers: number;
  feral: boolean;

  // casing does not matter - I just wanted it to stand out - could name it anything
  TYPE: "CAT"; // add later
};

type Dog = {
  name: string;
  obedient: boolean;

  TYPE: "DOG"; // add later
};

// let animal: Cat | Dog;
// animal.

function dealWithCatOrDog(animal: Cat | Dog) {
  if ("whiskers" in animal) {
    console.log("Cat", animal.name, animal.whiskers);
  } else {
    console.log("Dog", animal.name, animal.obedient);
  }
}

function dealWithCatOrDog2(animal: Cat | Dog) {
  if (animal.TYPE === "CAT") {
    console.log("Cat", animal.name, animal.whiskers);
  } else {
    console.log("Dog", animal.name, animal.obedient);
  }
}

const randomObject = {
  name: "Muffin",
  whiskers: 12,
  feral: false,

  TYPE: "CAT" as const, //add the as const after showing the error
};

let someCat: Cat;

someCat = randomObject;

export {};
