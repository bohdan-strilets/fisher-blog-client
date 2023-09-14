import { PostBodyType } from "types/PostType";

export type ElementVideoProps = Pick<
  PostBodyType,
  "content" | "url" | "size" | "id"
> & {
  deleteElement: (elementId: string) => void;
};

export type WrapperProps = Pick<ElementVideoProps, "size">;
