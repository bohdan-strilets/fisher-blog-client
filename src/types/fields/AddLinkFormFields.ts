import { PostBodyType } from "types/PostType";

export type AddLinkFormFields = Pick<PostBodyType, "content" | "url">;
