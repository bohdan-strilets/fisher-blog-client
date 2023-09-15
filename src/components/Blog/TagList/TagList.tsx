import { TagListProps } from "types/props/TagListProps";
import { List, Item, Value } from "./TagList.styled";

const TagList: React.FC<TagListProps> = ({
  tags,
  margin,
  color,
  background,
}) => {
  return (
    <List margin={margin}>
      {tags.map((item) => (
        <Item key={item}>
          <Value color={color} background={background}>
            #{item}
          </Value>
        </Item>
      ))}
    </List>
  );
};

export default TagList;
