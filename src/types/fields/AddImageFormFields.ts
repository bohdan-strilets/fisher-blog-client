import { PostBodyType } from "types/types/PostBodyType";

export type AddImageFormFields = Pick<PostBodyType, "content" | "url" | "size">;
