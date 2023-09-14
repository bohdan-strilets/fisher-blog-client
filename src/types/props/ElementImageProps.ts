import { PostBodyType } from "types/PostType";

export type ElementImageProps = Pick<
  PostBodyType,
  "content" | "url" | "size" | "id"
> & {
  deleteElement: (elementId: string) => void;
};

export type WrapperProps = Pick<ElementImageProps, "size">;
