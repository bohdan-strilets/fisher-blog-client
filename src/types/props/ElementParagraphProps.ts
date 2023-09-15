import { PostBodyType } from "types/types/PostBodyType";

export type ElementParagraphProps = Pick<
  PostBodyType,
  "content" | "fontSize" | "background" | "color" | "bold" | "italic" | "id"
> & {
  deleteElement: (elementId: string) => void;
};

export type TextProps = Pick<
  ElementParagraphProps,
  "fontSize" | "bold" | "italic" | "color" | "background"
>;
