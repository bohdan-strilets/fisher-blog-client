import { PostBodyType } from "types/types/PostBodyType";

export type CreatePostDto = {
  title: string;
  body: PostBodyType[];
  category: string[];
};
