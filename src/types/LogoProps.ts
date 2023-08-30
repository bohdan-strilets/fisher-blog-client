export type LogoProps = {
  fontSize?: number;
  mainColor?: string;
  margin?: string;
  type?: "short" | "full";
};

export type TextProps = Pick<LogoProps, "fontSize" | "mainColor">;

export type WrapperProps = Pick<LogoProps, "margin">;
