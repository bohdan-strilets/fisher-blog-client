import { PostBodyType } from "types/PostType";

export type AddImageFormFields = Pick<PostBodyType, "content" | "url" | "size">;
