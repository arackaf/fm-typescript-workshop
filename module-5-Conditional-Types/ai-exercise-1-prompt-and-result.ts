export type Props = {
  variant: "link" | "button";
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

export {};
