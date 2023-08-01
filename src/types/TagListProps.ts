export type TagListProps = {
  tags: string[];
  margin?: string;
};

export type ListProps = Pick<TagListProps, "margin">;
