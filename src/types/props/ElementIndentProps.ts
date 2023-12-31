import { PostBodyType } from "types/types/PostBodyType";

export type ElementIndentProps = Pick<
  PostBodyType,
  "size" | "background" | "id"
> & {
  deleteElement: (elementId: string) => void;
};

export type WrapperProps = Pick<ElementIndentProps, "size" | "background">;
