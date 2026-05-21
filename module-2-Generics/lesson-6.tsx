import React, { FC } from "react";

type Props<T> = {
  value: T;
  onChange: (newValue: T) => void;
};

const MyComponent: FC<Props> = props => {
  return <button onClick={() => props.onChange(props.value)}>Click me</button>;
};

export {};
