import { CreateElementBodyType } from "types/types/CreateElementBodyType";
import { PostBodyType, PostTypes } from "types/types/PostBodyType";

export type PostBodyOptionsProps = {
  getPostElement: (element: PostBodyType) => void;
  createElement: (
    type: PostTypes,
    elementBody: CreateElementBodyType
  ) => PostBodyType;
};
