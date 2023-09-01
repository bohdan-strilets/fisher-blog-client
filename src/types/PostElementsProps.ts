export enum ColorHex {
  Black = "#000000",
  White = "#FFFFFF",
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF",
  Yellow = "#FFFF00",
  Pink = "#FFC0CB",
  Orange = "#FFA500",
  Purple = "#800080",
  LightBlue = "#ADD8E6",
  Brown = "#A52A2A",
  Gray = "#808080",
  Gold = "#FFD700",
  Silver = "#C0C0C0",
  Violet = "#8A2BE2",
}

export enum Sizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum Lines {
  solid = "solid",
  dotted = "dotted",
  dashed = "dashed",
  double = "double",
}

export enum Lists {
  marked = "marked",
  numbered = "numbered",
}

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
