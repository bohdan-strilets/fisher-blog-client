import { PostBodyType } from "types/PostType";

export type AddParagraphFormFields = Pick<
  PostBodyType,
  "content" | "fontSize" | "background" | "color" | "bold" | "italic"
>;
