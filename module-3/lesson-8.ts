const arr = [1, 2, 3, "a", "b"];

arr
  .filter((x) => x)
  // can add numbers only (as far as TS is concerned)
  .map((x) => x + 1);

export {};
