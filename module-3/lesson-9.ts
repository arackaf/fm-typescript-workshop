class A {
  a: number = 0;
}

class B {
  b: number = 0;
}

class C {
  b: number = 0;
}

type AnyOfThese = A | B | C;

function getObject(): AnyOfThese {
  const val = Math.random();

  if (val < 0.3) return new A();
  if (val < 0.6) return new B();
  return new C();
}

const someValue = getObject();

function useObject(val: AnyOfThese) {}

export {};
