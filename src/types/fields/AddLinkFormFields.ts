import { PostBodyType } from "types/types/PostBodyType";

export type AddLinkFormFields = Pick<PostBodyType, "content" | "url">;
