class A {
  a: string = "A";
}

class B {
  b: string = "B";
}

type AorB = A | B;
let aOrB: AorB = Math.random() < 0.5 ? new A() : new B();

if (aOrB instanceof A) {
  console.log(aOrB.a);
} else {
  console.log(aOrB.b);
}

export {};
