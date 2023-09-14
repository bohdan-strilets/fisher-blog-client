import { PostBodyType } from "types/PostType";

export type AddLineFormFields = Pick<
  PostBodyType,
  "color" | "size" | "lineType"
>;
