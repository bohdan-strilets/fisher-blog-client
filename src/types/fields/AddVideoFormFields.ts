import { PostBodyType } from "types/PostType";

export type AddVideoFormFields = Pick<PostBodyType, "content" | "url" | "size">;
