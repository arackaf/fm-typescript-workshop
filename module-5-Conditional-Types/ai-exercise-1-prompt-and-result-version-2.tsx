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
