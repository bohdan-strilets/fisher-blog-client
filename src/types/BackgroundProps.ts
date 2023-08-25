export type BackgroundProps = {
  url: string;
  gradient?: string;
  width?: number;
  height?: number;
  margin?: string;
  borderRadius?: string;
  border?: string;
  shadow?: boolean;
  children?: React.ReactNode;
  otherStyles?: React.CSSProperties;
};

export type WrapperProps = Pick<
  BackgroundProps,
  | "url"
  | "gradient"
  | "width"
  | "height"
  | "margin"
  | "borderRadius"
  | "border"
  | "shadow"
>;
