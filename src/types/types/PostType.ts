import { PostBodyType } from "./PostBodyType";
import { StatisticsType } from "./StatisticsType";

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
