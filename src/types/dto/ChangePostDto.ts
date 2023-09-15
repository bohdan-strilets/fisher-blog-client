import { PostBodyType } from "types/types/PostBodyType";

export type ChangePostDto = {
  title: string;
  body: PostBodyType[];
  category: string;
  isPublic?: boolean;
  tags?: string[];
};
