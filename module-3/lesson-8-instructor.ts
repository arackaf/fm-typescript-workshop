const arr = [1, 2, 3, "a", "b"];

arr
  // can add numbers only (as far as TS is concerned)
  .map(x => x + 1);

arr
  // numbers only!
  .filter((x): x is number => typeof x === "number")
  .map(x => x + 1);

arr
  // numbers only!
  .filter(x => typeof x === "number")
  .map(x => x + 1);

export {};
