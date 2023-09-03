import { v4 } from "uuid";
import { PostTypes, CreateElementBody, PostBodyType } from "types/PostType";

const useRenderPost = () => {
  const createElement = (
    type: PostTypes,
    elementBody: CreateElementBody
  ): PostBodyType => {
    return {
      id: v4(),
      type,
      ...elementBody,
    };
  };

  return { PostTypes, createElement };
};

export default useRenderPost;
