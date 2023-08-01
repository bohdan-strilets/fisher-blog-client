export type Statistics = {
  numberViews: number;
  numberLikes: number;
  numberComments: number;
  readingTime: number;
};

export type ShortPostProps = {
  posterUrl: string;
  title: string;
  text: string;
  updatedAt: string;
  category: string[];
  statistics: Statistics;
  tags: string[];
};
