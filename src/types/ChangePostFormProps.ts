import { CreateElementBody, PostBodyType, PostTypes } from "./PostType";

export type PostBodyOptionsProps = {
  getPostElement: (element: PostBodyType) => void;
  createElement: (
    type: PostTypes,
    elementBody: CreateElementBody
  ) => PostBodyType;
};
