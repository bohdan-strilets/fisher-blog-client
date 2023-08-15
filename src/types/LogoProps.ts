export type LogoProps = {
  fontSize?: number;
  mainColor?: string;
  margin?: string;
};

export type TextProps = Pick<LogoProps, "fontSize" | "mainColor">;

export type WrapperProps = Pick<LogoProps, "margin">;
