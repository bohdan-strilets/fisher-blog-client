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

export type ImageProps = {
  content?: string;
  url: string;
  size?: "small" | "medium" | "large";
};

export type WrapperProps = Pick<ImageProps, "size">;
