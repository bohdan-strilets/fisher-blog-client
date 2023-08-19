export type StatisticsType = {
  numberViews: number;
  numberLikes: number;
  numberComments: number;
  readingTime: number;
};

export type PostBodyType = {
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

export type PostType = {
  _id: string;
  owner: string;
  title: string;
  body: PostBodyType[];
  category: string[];
  tags: string[];
  statistics: StatisticsType;
  posterURL: string;
  imagesURL: string[];
  videosURL: string[];
  isPublic: boolean;
  likes: string[];
  createdAt: string;
  updatedAt: string;
};
