import React, { FC } from "react";

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

type GetCircle = () => Circle;
type GetShape = () => Shape;

let getCircle: GetCircle = () => new Circle();
let getShape: GetShape = () => new Shape();


// -----------------------------

const handleEvent = (evt: React.SyntheticEvent) => {};
const handleMouseEvent = (evt: React.MouseEvent) => {};

const ReactExample: FC = () => {
  return <div onMouseEnter={evt => {}}></div>;
};

export {};
