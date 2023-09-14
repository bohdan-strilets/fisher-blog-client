import { PostBodyType } from "types/PostType";

export type ElementListProps = Pick<
  PostBodyType,
  "content" | "listType" | "listItems" | "id"
> & {
  deleteElement: (elementId: string) => void;
};
