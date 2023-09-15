import { PostType } from "./PostType";

export type PostResponseType<P = PostType | PostType[]> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  data?: P;
};
