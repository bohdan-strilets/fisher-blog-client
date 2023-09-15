import { PostBodyType } from "../types/PostBodyType";

export type PostPreviewProps = {
  elements: PostBodyType[];
  deleteElement: (elementId: string) => void;
};
