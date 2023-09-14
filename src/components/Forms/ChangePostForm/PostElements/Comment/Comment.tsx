import { GiFishingBoat } from "react-icons/gi";
import DeleteButton from "components/Interface/DeleteButton";
import { ElementCommentProps } from "types/props/ElementCommentProps";
import { Wrapper, IconWrapper, TextWrapper, Text } from "./Comment.styled";

const Comment: React.FC<ElementCommentProps> = ({
  content,
  id,
  deleteElement,
}) => {
  return (
    <Wrapper>
      <DeleteButton deleteFoo={() => deleteElement(id)} />
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
