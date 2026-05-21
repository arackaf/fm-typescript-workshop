import React, { FC, PropsWithChildren } from "react";

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

export type Props<T extends Variant> = BaseProps<T> & PropsForVariant<T>;

function Button<T extends Variant>(
  props: PropsWithChildren<Props<T>>
): ReturnType<FC> {
  return <div>{/* TODO */}</div>;
}

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
