import React, { FC } from "react";

type Props<T> = {
  value: T;
  onChange: (newValue: T) => void;
};

function MyComponent<T>(props: Props<T>): ReturnType<FC> {
  return <button onClick={() => props.onChange(props.value)}>Click me</button>;
}

export {};
