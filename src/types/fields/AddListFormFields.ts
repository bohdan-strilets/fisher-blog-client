import { PostBodyType } from "types/PostType";

export type AddListFormFields = Pick<
  PostBodyType,
  "content" | "listType" | "listItems"
>;
