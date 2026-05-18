type Item = {
  id: string;
  name: string;
};

type Payload = Item | Item[];

let payload: Payload =
  Math.random() < 0.5
    ? { id: "1", name: "Hello" }
    : [
        { id: "1", name: "Hello" },
        { id: "2", name: "World" },
      ];

export {};
