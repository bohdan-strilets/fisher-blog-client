import { PostType } from "./PostType";

export type ResponseType<P = PostType | PostType[]> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  data?: P;
};
