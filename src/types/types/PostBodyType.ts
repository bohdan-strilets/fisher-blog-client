export enum PostTypes {
  TITLE = "title",
  PARAGRAPH = "paragraph",
  IMAGE = "image",
  VIDEO = "video",
  LINE = "line",
  INDENT = "indent",
  LIST = "list",
  LINK = "link",
  COMMENT = "comment",
}

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

export type PostBodyType = {
  id: string;
  type: PostTypes;
  content?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  url?: string;
  color?: ColorHex | string;
  background?: ColorHex | string;
  size?: Sizes | string;
  lineType?: Lines | string;
  listType?: Lists | string;
  listItems?: string[];
  videoSize?: number;
};
