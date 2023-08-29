import { GiFishingBoat } from "react-icons/gi";
import { CommentProps } from "types/PostElementsProps";
import { Wrapper, IconWrapper, TextWrapper, Text } from "./Comment.styled";

const Comment: React.FC<CommentProps> = ({ content }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <GiFishingBoat size={50} color="var(--accent-color)" />
      </IconWrapper>
      <TextWrapper>
        <Text>{content}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Comment;
