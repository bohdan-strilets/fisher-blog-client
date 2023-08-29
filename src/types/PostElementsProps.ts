export type TextFieldProps = {
  content: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  color?: string;
  background?: string;
};

export type TextProps = Pick<
  TextFieldProps,
  "fontSize" | "bold" | "italic" | "color" | "background"
>;

export type MediaProps = {
  content?: string;
  url: string;
  size?: "small" | "medium" | "large";
};

export type WrapperProps = Pick<MediaProps, "size">;

export type LineProps = {
  color?: string;
  size?: "small" | "medium" | "large";
  lineType?: "solid" | "dotted" | "dashed" | "double";
};
