import { PostBodyType } from "types/types/PostBodyType";

export type ElementLineProps = Pick<
  PostBodyType,
  "color" | "size" | "lineType" | "id"
> & {
  deleteElement: (elementId: string) => void;
};

export type BorderProps = Pick<ElementLineProps, "color" | "lineType" | "size">;
