class Foo<T1, T2> {
  property1?: T1;
  property2?: T2;

  constructor(p1: T1, p2: T2) {
    this.property1 = p1;
    this.property2 = p2;
  }
}

let fooInst1 = new Foo<number, string>(12, "Hello");

//let fooInstWrong = new Foo<boolean, string>(12, "Hello");

let fooInst2 = new Foo(12, "Hello");
