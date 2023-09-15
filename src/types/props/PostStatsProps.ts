export type PostStatsProps = {
  readingTime: number;
  numberLikes: number;
  numberViews: number;
  numberComments: number;
  margin?: string;
};

export type ListProps = Pick<PostStatsProps, "margin">;
