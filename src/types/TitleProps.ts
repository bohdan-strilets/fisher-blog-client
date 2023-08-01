export type TitleProps = {
  type?: "h1" | "h2" | "h3" | "h4" | "h5";
  title: string;
  margin?: string;
  background?: "black" | "accent";
  fontSize?: number;
};

export type HeaderProps = Pick<
  TitleProps,
  "margin" | "background" | "fontSize"
>;
