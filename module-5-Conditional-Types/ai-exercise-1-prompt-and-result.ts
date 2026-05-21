// prompt:

// make this a conditional type - href should be required if variant is "link" but absent if "button"

// new type produced by composer-2.5-fast
type BaseProps = {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

type PropsForVariant<V extends "link" | "button"> = BaseProps & {
  variant: V;
} & (V extends "link" ? { href: string } : { href?: never });

export type Props = PropsForVariant<"link"> | PropsForVariant<"button">;
