import DeleteButton from "components/Interface/DeleteButton";
import { ElementImageProps } from "types/props/ElementImageProps";
import { Wrapper, Picture, Label } from "./Image.styled";

const Image: React.FC<ElementImageProps> = ({
  content,
  url,
  size,
  id,
  deleteElement,
}) => {
  return (
    <Wrapper size={size}>
      <DeleteButton deleteFoo={() => deleteElement(id)} />
      <Picture src={url} alt={content} />
      <Label>{content}</Label>
    </Wrapper>
  );
};

export default Image;
