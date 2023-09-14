import { PostBodyType } from "./PostType";

export type TextFieldProps = Pick<
  PostBodyType,
  "content" | "fontSize" | "background" | "color" | "bold" | "italic" | "id"
>;

export type TextProps = Pick<
  TextFieldProps,
  "fontSize" | "bold" | "italic" | "color" | "background" | "id"
>;

export type MediaProps = Pick<PostBodyType, "content" | "url" | "size" | "id">;

export type WrapperProps = Pick<MediaProps, "size" | "id">;

export type LineProps = Pick<
  PostBodyType,
  "color" | "size" | "lineType" | "id"
>;

export type IndentProps = Pick<PostBodyType, "size" | "background" | "id"> & {
  id?: string;
};

export type ListProps = Pick<
  PostBodyType,
  "content" | "listType" | "listItems" | "id"
>;

export type LinkProps = Pick<PostBodyType, "content" | "url" | "id"> & {
  id?: string;
};

export type CommentProps = Pick<PostBodyType, "content">;
