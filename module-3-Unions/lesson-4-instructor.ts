type StringOrNumber = string | number;

let sOrN: StringOrNumber = Math.random() < 0.5 ? 12 : "Hello";

if (typeof sOrN === "string") {
  console.log(sOrN.toLowerCase());
} else {
  console.log(sOrN.toFixed(2));
}

export {};
