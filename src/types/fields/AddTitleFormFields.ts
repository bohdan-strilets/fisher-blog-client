import { PostBodyType } from "types/types/PostBodyType";

export type AddTitleFormFields = Pick<
  PostBodyType,
  "content" | "fontSize" | "background" | "color" | "bold" | "italic"
>;
