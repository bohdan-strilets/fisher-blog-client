import { FaHeart } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import { MdComment } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { PostStatsProps } from "types/PostStatsProps";
import { List, Item, Value } from "./PostStats.styled";

const PostStats: React.FC<PostStatsProps> = ({
  readingTime,
  numberLikes,
  numberViews,
  numberComments,
  margin,
}) => {
  return (
    <List margin={margin}>
      <Item>
        <GiOpenBook size={18} color="var(--accent-color)" />
        <Value>{readingTime} min.</Value>
      </Item>
      <Item>
        <FaHeart size={16} color="var(--accent-color)" />
        <Value>{numberLikes}</Value>
      </Item>
      <Item>
        <HiEye size={18} color="var(--accent-color)" />
        <Value>{numberViews}</Value>
      </Item>
      <Item>
        <MdComment size={18} color="var(--accent-color)" />
        <Value>{numberComments}</Value>
      </Item>
    </List>
  );
};

export default PostStats;
