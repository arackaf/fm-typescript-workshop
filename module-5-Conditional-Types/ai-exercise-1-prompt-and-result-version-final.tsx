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
