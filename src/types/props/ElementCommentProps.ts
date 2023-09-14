import { PostBodyType } from "types/PostType";

export type ElementCommentProps = Pick<PostBodyType, "content" | "id"> & {
  deleteElement: (elementId: string) => void;
};
