import React, { FC, PropsWithChildren } from "react";

// prompt:
/*
 Create a dedicated Variant type for the link | button union

BaseProps should be generic with a Variant Prop, and contain the variant prop

PropsForVariant should only contain what we're adding

export type Props should intersect BaseProps<T> with PropsForVariant<T>
*/

// new type produced by composer-2.5-fast

type Variant = "link" | "button";

type BaseProps<V extends Variant> = {
  variant: V;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

type PropsForVariant<V extends Variant> = V extends "link"
  ? { href: string }
  : { href?: never };

export type Props =
  | (BaseProps<"link"> & PropsForVariant<"link">)
  | (BaseProps<"button"> & PropsForVariant<"button">);

const Button: FC<PropsWithChildren<Props>> = props => {
  return <div>{/* TODO */}</div>;
};

export const Component: FC = () => {
  return (
    <div>
      <Button variant="link" href="/">
        Link
      </Button>
      <Button variant="link" href="/" onClick={() => {}}>
        Link
      </Button>
      {/* @ts-expect-error */}
      <Button variant="link">Link</Button>
      {/* @ts-expect-error */}
      <Button variant="button" href="/">
        Link
      </Button>
    </div>
  );
};
