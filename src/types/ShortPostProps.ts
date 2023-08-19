import { StatisticsType } from "./PostType";

export type ShortPostProps = {
  posterUrl: string;
  title: string;
  text: string;
  updatedAt: string;
  category: string[];
  statistics: StatisticsType;
  tags: string[];
};
