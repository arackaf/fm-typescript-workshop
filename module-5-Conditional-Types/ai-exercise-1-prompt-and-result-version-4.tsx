import React, { FC, PropsWithChildren } from "react";

// prompt:
/*
Remove Props. Remove PropsForVariant. Rename BaseProps to just Props.

Add href directly to the new BaseProps, conditionally string if V is link, or never if not 
*/

type Variant = "link" | "button";

type Props<V extends Variant> = {
  variant: V;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  href: V extends "link" ? string : never;
};

const Button: FC<PropsWithChildren<Props<"link"> | Props<"button">>> = props =>
  null;

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
      <Button variant="button" href="/">
        Link
      </Button>
    </div>
  );
};
