// Mapped types

// Array.map

// Prelude

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
