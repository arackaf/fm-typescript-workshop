// Mapped types

// Array.map

const a = [1, 2, "3"].map((val) => {
  // @ts-ignore
  return val + 1;
});

const b = [1, 2, "3"]
  .filter((val): val is number => typeof val === "number")
  .map((val) => {
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

// type Keys = 'content' | 'city' | 'language';
// type Values = GoodThings_Object["content" | 'city' | 'language']

type Keys = keyof GoodThings_Object;

type Values = GoodThings_Object[Keys];

// ------

type GoodThingsGetters = {
  [K in keyof GoodChoices]: () => GoodChoices[K];
}[keyof GoodChoices];

// ---------------------------------------------------------------------------

// ---------

type Account = {
  id: number;
  name: string;
  accountId: string;
  gamerId: string;
  myIdentification: string;
};

// all fields with ID
type IdFields = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}`
    ? K
    : never]: Account[K];
};

// ok let's include Id*entification*
type IdFields2 = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: Account[K];
};

// let's strip just the name of the types of id's
type IdTypes = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}`
    ? U
    : never]: Account[K];
};

// clean it up and strip the empty id
type IdTypes2 = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}`
    ? U extends ""
      ? never
      : U
    : never]: Account[K];
};

// ok I lied it's really this simple but only because `id` (lowercase) has no other matches
type IdTypes3 = {
  [K in keyof Account as K extends `${infer U}${"Id"}` ? U : never]: Account[K];
};

type KeyProps = keyof IdTypes3;

export default null;
