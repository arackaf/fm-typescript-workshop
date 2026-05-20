// s is a string
let s = "Hello";

let b = true;

// error
// s = 12;

let s2: string;
// error
//s2 = 12;

// No type checking at all
let a: any;

// all types assignable to unknown, as well, BUT you can't really use it. Only check for equality, or use things like instanceof
let u: unknown = 12;

u = b;

u = { name: "Adam" };

// u.name; error

// never is a bottom type
// never represents a type that will never exist / never have any value
function neverFunc(): never {
  throw new Error();
}

let nev: never = neverFunc();

// weird but valid
b = nev;

// nev = 12; error - nothing can be assigned to never

// typing functions
function getNumber(num: number): number {
  return num + 12;
}

type NumToNumFn = (number: number) => number;

const getNumber2: NumToNumFn = num => {
  return num + 2;
};

// void is for functions that return nothing. You don't need it here but you would for function types ... stay tuned
function foo(): void {}

function logAll(...values: string[]) {
  console.log(...values);
}

logAll("a", "b", "c");

function logAll2(...values: (string | number)[]) {
  console.log(...values);
}

logAll2(1, "2", 3, "4", 5, "6");

// declaring types

type BoolForSomeReason = boolean;

// types can be combined

type BoolOrString = boolean | string;

let boolOrString: BoolOrString = true;
boolOrString = "Hello";
// union - we'll just pretend it means or ... more on this later

// types can hold literal valies
type Yes = "YES";

type True = true;
type False = false;

type TrueOrFalse = True | False;

// this is the type with "YES" only. It's NOT a string. We'll see this when we discuss discriminated unions in a bit

let yes: Yes = "YES";
// error
// yes = "No";

// remember we said types can be combined?

type YesOrNo = "YES" | "NO";
let yesOrNo: YesOrNo = "NO";
yesOrNo = "YES";

// narrowed inferred types

let tr = true;
const tr2 = true;

const obj = {
  success: true as const,
  payload: {},
};

export {};
