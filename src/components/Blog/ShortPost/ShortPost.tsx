import { useNavigate } from "react-router-dom";
import { GiFishing } from "react-icons/gi";
import { IoMdArrowRoundForward } from "react-icons/io";
import Background from "components/Interface/Background";
import Title from "components/Interface/Title";
import PostStats from "../PostStats";
import TagList from "../TagList";
import MoreInfo from "../MoreInfo";
import { ShortPostProps } from "types/BlogProps";
import formatDateTime from "helpers/formatDateTime";
import findLabelsByValues from "helpers/findLabelsByValues";
import { fishingOptions } from "helpers/dropdownOptions";
import {
  Wrapper,
  Data,
  Text,
  Statistics,
  Container,
  Date,
  Category,
  ReadButton,
} from "./ShortPost.styled";

const ShortPost: React.FC<ShortPostProps> = ({
  id,
  posterUrl,
  title,
  text,
  updatedAt,
  category,
  statistics,
  tags,
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Background url={posterUrl} height={320} shadow={true}>
        <MoreInfo postId={id} />
      </Background>
      <Title
        type="h2"
        title={title}
        margin="var(--small-indent) 0 0 0"
        background="black"
        fontSize={22}
      />
      <Data>
        <Text>{text}</Text>
        <footer>
          <Statistics>
            <Container>
              <Date>{formatDateTime(updatedAt, true)}</Date>
              <GiFishing size={18} color="var(--accent-color)" />
              <Category>
                {findLabelsByValues(category, fishingOptions)}
              </Category>
            </Container>
            <Container>
              <PostStats
                readingTime={statistics.readingTime}
                numberLikes={statistics.numberLikes}
                numberComments={statistics.numberComments}
                numberViews={statistics.numberViews}
                margin="0 var(--small-indent) 0 0"
              />
              <ReadButton type="button" onClick={() => navigate(`blog/${id}`)}>
                <span>Read</span>
                <IoMdArrowRoundForward size={18} className="icon" />
              </ReadButton>
            </Container>
          </Statistics>
          <div>
            <TagList tags={tags} />
          </div>
        </footer>
      </Data>
    </Wrapper>
  );
};

export default ShortPost;
