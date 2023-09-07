import { PostType } from "./PostType";
import { PostBodyType } from "./PostType";

export type ResponseType<P = PostType | PostType[]> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  data?: P;
};

export type CreatePostDto = {
  title: string;
  body: PostBodyType[];
  category: string[];
};

export type ChangePostDto = {
  title: string;
  body: PostBodyType[];
  category: string;
  isPublic?: boolean;
  tags?: string[];
};
