// Mapped types

// Array.map

// Prelude

// Actual Mapped types

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

type Account = {
  id: number;
  name: string;
  accountId: string;
  gamerId: string;
  myIdentification: string;
};

// all fields with ID
type IdFields = never;

// ok let's include Id*entification*
type IdFields2 = never;

// let's strip just the name of the types of id's
type IdTypes = never;

// clean it up and strip the empty id
type IdTypes2 = never;

// ok I lied it's really this simple but only because `id` (lowercase) has no other matches
type IdTypes3 = never;

type KeyProps = keyof IdTypes3;

export default null;
