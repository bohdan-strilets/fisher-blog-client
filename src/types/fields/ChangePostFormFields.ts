import { PostBodyType } from "types/types/PostBodyType";

export type ChangePostFormFields = {
  title: string;
  body?: PostBodyType[];
  category: string;
  tags?: string;
  isPublic?: boolean;
};
