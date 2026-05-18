let n: number;

let s: string;

let n_or_s: number | string;

type True = true;
type False = false;

type TrueOrFalse = True | False;

type TrueAndFalse = True & False;

enum ValidValues {
  A,
  B,
  C,
}

type ValidValues2 = "A" | "B" | "C";

export {};
