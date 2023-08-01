import { Statistics } from "./ShortPostProps";

export type PostBody = {
  id: string;
  type:
    | "title"
    | "paragraph"
    | "image"
    | "video"
    | "line"
    | "indent"
    | "list"
    | "link"
    | "comment"
    | string;
  content: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  url?: string;
  color?: string;
  background?: string;
  size?: "small" | "medium" | "large" | string;
  lineType?: "solid" | "dotted" | "dashed" | "double" | string;
  listType?: "marked" | "numbered" | string;
  listItems?: string[];
  videoSize?: number;
};

export type Post = {
  _id: string;
  owner: string;
  title: string;
  body: PostBody[];
  category: string[];
  tags: string[];
  statistics: Statistics;
  posterURL: string;
  imagesURL: string[];
  videosURL: string[];
  isPublic: boolean;
  likes: string[];
  createdAt: string;
  updatedAt: string;
};

export type ListPostsProps = {
  posts: Post[];
};
