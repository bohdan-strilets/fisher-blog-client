export type TagListProps = {
  tags: string[];
  margin?: string;
  color?: string;
  background?: string;
};

export type ListProps = Pick<TagListProps, "margin">;

export type ValueProps = Pick<TagListProps, "color" | "background">;
