import { StatisticsType } from "./PostType";
import { PostType } from "./PostType";

export type ShortPostProps = {
  id: string;
  posterUrl: string;
  title: string;
  text: string;
  updatedAt: string;
  category: string[];
  statistics: StatisticsType;
  tags: string[];
};

export type TagListProps = {
  tags: string[];
  margin?: string;
  color?: string;
  background?: string;
};

export type ListProps = Pick<TagListProps, "margin">;

export type ValueProps = Pick<TagListProps, "color" | "background">;

export type PostStatsProps = {
  readingTime: number;
  numberLikes: number;
  numberViews: number;
  numberComments: number;
  margin?: string;
};

export type MoreInfoProps = {
  postId: string;
};

export type ListPostsProps = {
  posts: PostType[];
};
