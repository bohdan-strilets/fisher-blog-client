import { TagListProps } from "types/TagListProps";
import { List, Item, Value } from "./TagList.styled";

const TagList: React.FC<TagListProps> = ({ tags, margin }) => {
  return (
    <List margin={margin}>
      {tags.map((item) => (
        <Item key={item}>
          <Value>#{item}</Value>
        </Item>
      ))}
    </List>
  );
};

export default TagList;
