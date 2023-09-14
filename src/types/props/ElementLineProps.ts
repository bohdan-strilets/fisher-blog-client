import { PostBodyType } from "types/PostType";

export type ElementLineProps = Pick<
  PostBodyType,
  "color" | "size" | "lineType" | "id"
> & {
  deleteElement: (elementId: string) => void;
};

export type BorderProps = Pick<ElementLineProps, "color" | "lineType" | "size">;
