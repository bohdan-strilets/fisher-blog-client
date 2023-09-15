import { PostBodyType } from "types/types/PostBodyType";

export type ElementCommentProps = Pick<PostBodyType, "content" | "id"> & {
  deleteElement: (elementId: string) => void;
};
