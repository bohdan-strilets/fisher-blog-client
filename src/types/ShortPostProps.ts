import { StatisticsType } from "./PostType";

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
