// type Shape = {
//   name: string;
// };

// type Circle = Shape & {
//   radius: number;
// };

class Shape {
  name: string = "";
}

class Circle extends Shape {
  radius: number = 0;
}

let circle: Circle = new Circle();
let shape: Shape = new Shape();

// -------------------------------------

function draw(item: Shape) {
  console.log("I just drew", item.name);
}

draw(shape);

// -------------------------------------

type DrawShapeFn = (item: Shape) => void;
type DrawCircleFn = (item: Circle) => void;

let drawShapeFunction: DrawShapeFn = (_: Shape) => {};
let drawCircleFunction: DrawCircleFn = (_: Circle) => {};

// -------------------------------------

let getCircle: () => Circle = () => new Circle();
let getShape: () => Shape = () => new Shape();

export {};
