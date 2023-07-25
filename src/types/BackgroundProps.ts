export type BackgroundProps = {
  url: string;
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
  "url" | "width" | "height" | "margin" | "borderRadius" | "border" | "shadow"
>;
