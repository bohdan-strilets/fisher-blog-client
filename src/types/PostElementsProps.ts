import { ColorHex, Sizes, Lines, Lists } from "./PostType";

export type TextFieldProps = {
  content: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  color?: ColorHex;
  background?: ColorHex;
};

export type TextProps = Pick<
  TextFieldProps,
  "fontSize" | "bold" | "italic" | "color" | "background"
>;

export type MediaProps = {
  content: string;
  url: string;
  size?: Sizes;
};

export type WrapperProps = Pick<MediaProps, "size">;

export type LineProps = {
  color?: string;
  size?: Sizes;
  lineType?: Lines;
};

export type IndentProps = {
  size?: Sizes;
  background?: string;
};

export type LinkProps = {
  content: string;
  url: string;
};

export type CommentProps = {
  content: string;
};

export type ListProps = {
  content: string;
  listType: Lists;
  listItems: string[];
};
