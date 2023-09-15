import { PostBodyType } from "types/types/PostBodyType";

export type AddVideoFormFields = Pick<PostBodyType, "content" | "url" | "size">;
