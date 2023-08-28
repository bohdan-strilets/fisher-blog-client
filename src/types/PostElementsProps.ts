export type TitleProps = {
  content: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  color?: string;
  background?: string;
};

export type TextProps = Pick<
  TitleProps,
  "fontSize" | "bold" | "italic" | "color" | "background"
>;
