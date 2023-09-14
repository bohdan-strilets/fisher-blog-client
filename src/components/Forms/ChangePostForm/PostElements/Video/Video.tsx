import DeleteButton from "components/Interface/DeleteButton";
import { ElementVideoProps } from "types/props/ElementVideoProps";
import { Wrapper, Media, Label } from "./Video.styled";

const Video: React.FC<ElementVideoProps> = ({
  content,
  url,
  size,
  id,
  deleteElement,
}) => {
  return (
    <Wrapper size={size}>
      <DeleteButton deleteFoo={() => deleteElement(id)} />
      <Media src={url} controls />
      <Label>{content}</Label>
    </Wrapper>
  );
};

export default Video;
