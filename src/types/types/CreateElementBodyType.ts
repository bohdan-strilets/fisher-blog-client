import { PostBodyType } from "./PostBodyType";

export type CreateElementBodyType = Pick<
  PostBodyType,
  | "content"
  | "fontSize"
  | "bold"
  | "italic"
  | "url"
  | "color"
  | "background"
  | "size"
  | "lineType"
  | "listType"
  | "listItems"
  | "videoSize"
>;
