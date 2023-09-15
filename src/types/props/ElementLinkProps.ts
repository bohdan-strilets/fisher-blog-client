import { PostBodyType } from "types/types/PostBodyType";

export type ElementLinkProps = Pick<PostBodyType, "content" | "url" | "id"> & {
  deleteElement: (elementId: string) => void;
};
