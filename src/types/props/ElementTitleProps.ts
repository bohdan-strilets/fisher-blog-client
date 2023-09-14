import { PostBodyType } from "types/PostType";

export type ElementTitleProps = Pick<
  PostBodyType,
  "content" | "fontSize" | "background" | "color" | "bold" | "italic" | "id"
> & {
  deleteElement: (elementId: string) => void;
};

export type TextProps = Pick<
  ElementTitleProps,
  "fontSize" | "bold" | "italic" | "color" | "background"
>;
