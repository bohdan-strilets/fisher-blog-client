import { PostBodyType } from "types/PostType";

export type AddTitleFormFields = Pick<
  PostBodyType,
  "content" | "fontSize" | "background" | "color" | "bold" | "italic"
>;
