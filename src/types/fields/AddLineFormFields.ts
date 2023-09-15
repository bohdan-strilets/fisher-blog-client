import { PostBodyType } from "types/types/PostBodyType";

export type AddLineFormFields = Pick<
  PostBodyType,
  "color" | "size" | "lineType"
>;
