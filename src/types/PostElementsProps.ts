import { PostBodyType } from "./PostType";

export type TextFieldProps = Pick<
  PostBodyType,
  "content" | "fontSize" | "background" | "color" | "bold" | "italic"
>;

export type TextProps = Pick<
  TextFieldProps,
  "fontSize" | "bold" | "italic" | "color" | "background"
>;

export type MediaProps = Pick<PostBodyType, "content" | "url" | "size">;

export type WrapperProps = Pick<MediaProps, "size">;

export type LineProps = Pick<PostBodyType, "color" | "size" | "lineType">;

export type IndentProps = Pick<PostBodyType, "size" | "background">;

export type ListProps = Pick<
  PostBodyType,
  "content" | "listType" | "listItems"
>;

export type LinkProps = Pick<PostBodyType, "content" | "url">;

export type CommentProps = Pick<PostBodyType, "content">;
