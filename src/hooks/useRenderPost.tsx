import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { PostTypes, CreateElementBody, PostBodyType } from "types/PostType";
import { useGetPostByIdQuery } from "redux/post/postApi";

const useRenderPost = () => {
  const { postId } = useParams();
  const [postElements, setPostElements] = useState<PostBodyType[]>([]);
  const { data } = useGetPostByIdQuery(postId ? postId : "");
  const post = data?.data;

  useEffect(() => {
    if (post && post.body) {
      setPostElements(post.body);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const deleteElement = (elementId: string) => {
    const result = postElements.filter((element) => element.id !== elementId);
    setPostElements(result);
  };

  const getPostElement = (element: PostBodyType) => {
    setPostElements((state) => {
      if (state) {
        return [...state, element];
      } else {
        return [element];
      }
    });
  };

  return {
    PostTypes,
    createElement,
    deleteElement,
    getPostElement,
    postElements,
    setPostElements,
    post,
    postId,
  };
};

export default useRenderPost;
