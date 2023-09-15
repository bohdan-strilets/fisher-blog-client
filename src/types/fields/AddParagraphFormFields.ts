import { PostBodyType } from "types/types/PostBodyType";

export type AddParagraphFormFields = Pick<
  PostBodyType,
  "content" | "fontSize" | "background" | "color" | "bold" | "italic"
>;
