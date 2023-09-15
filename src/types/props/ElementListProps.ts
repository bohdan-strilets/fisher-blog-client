import { PostBodyType } from "types/types/PostBodyType";

export type ElementListProps = Pick<
  PostBodyType,
  "content" | "listType" | "listItems" | "id"
> & {
  deleteElement: (elementId: string) => void;
};
