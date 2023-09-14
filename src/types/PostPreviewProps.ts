import { PostBodyType } from "./PostType";

export type PostPreviewProps = {
  elements: PostBodyType[];
  deleteElement: (elementId: string) => void;
};
