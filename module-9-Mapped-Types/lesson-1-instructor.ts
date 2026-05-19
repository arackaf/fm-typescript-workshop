// Mapped types

// Array.map

const a = [1, 2, "3"].map(val => {
  // @ts-ignore
  return val + 1;
});

const b = [1, 2, "3"]
  .filter((val): val is number => typeof val === "number")
  .map(val => {
    return val + 1;
  });

// Prelude

type Union = "A" | "B" | 12 | 42 | "C";
type OnlyStrings<T> = T extends string ? T : never;

type StringsInUnion = OnlyStrings<Union>;

type Junk = `Valid values are: ${Union}`;
type Junk2 = `Valid values are: ${StringsInUnion}`;
const x: Junk = "Valid values are: 12";

// Actual Mapped types

type GoodChoices = {
  content: "Master Dot Dev";
  city: "Minneapolis";
  language: "TypeScript";
};

type GoodChoicesCopy = {
  [K in keyof GoodChoices]: GoodChoices[K];
};

type GoodChoices_Getters = {
  [K in keyof GoodChoices]: () => GoodChoices[K];
};

type GoodChoices_Getters_BetterNames = {
  [K in keyof GoodChoices as `get${K}`]: () => GoodChoices[K];
};

type GoodChoices_Getters_BetterNamesStill = {
  [K in keyof GoodChoices as `get${Capitalize<K>}`]: () => GoodChoices[K];
};

// ---------------------------------------------------------------------------

type GoodThings_Object = {
  [K in keyof GoodChoices]: GoodChoices[K];
};

type Values_Silly = GoodThings_Object["city" | "content" | "language"];

type Values = GoodThings_Object[keyof GoodThings_Object];

// What if we need to change things around?

type GoodThingsGetters_A = {
  [K in keyof GoodChoices]: () => GoodChoices[K];
};
type GoodThingsGettersValues_A = GoodChoices_Getters[keyof GoodThingsGetters_A];

type GoodThingsGettersValues = {
  [K in keyof GoodChoices]: () => GoodChoices[K];
}[keyof GoodChoices];

export {};
