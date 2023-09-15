import { PostBodyType } from "types/types/PostBodyType";

export type AddListFormFields = Pick<
  PostBodyType,
  "content" | "listType" | "listItems"
>;
