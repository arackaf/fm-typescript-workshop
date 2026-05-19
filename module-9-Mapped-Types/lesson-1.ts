// Mapped types

// Array.map

const a = [1, 2, "3"].map(val => {
  // @ts-ignore
  return val + 1;
});

const b = [1, 2, "3"]
  .filter(val => typeof val === "number")
  .map(val => {
    return val + 1;
  });

// Prelude

type Union = "A" | "B" | 12 | 42 | "C";
type OnlyStrings<T> = T extends string ? T : never;

type StringsInUnion = OnlyStrings<Union>;

type Junk = `Valid Values are ${Union}`;
type JunkStrOnly = `Valid Values are ${StringsInUnion}`;

// Actual Mapped types

type GoodChoices = {
  content: "Master Dot Dev";
  city: "Minneapolis";
  language: "TypeScript";
};

type GoodChoicesCopy = never;

type GoodChoices_Getters = never;

type GoodChoices_Getters_BetterNames = never;

type GoodChoices_Getters_BetterNamesStill = never;

// ---------------------------------------------------------------------------
type GoodThings_Object = {
  [K in keyof GoodChoices]: GoodChoices[K];
};

type Values_Silly = never;

type Values = never;

// What if we need to change things around?

type GoodThingsGetters_A = never;
type GoodThingsGettersValues_A = never;

type GoodThingsGettersValues = never;

// ---------------------------------------------------------------------------

export {};
