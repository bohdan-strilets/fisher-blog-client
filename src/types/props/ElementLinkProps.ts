import { PostBodyType } from "types/PostType";

export type ElementLinkProps = Pick<PostBodyType, "content" | "url" | "id"> & {
  deleteElement: (elementId: string) => void;
};
