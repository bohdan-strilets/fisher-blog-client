import { MediaProps } from "types/PostElementsProps";
import { Wrapper, Picture, Label } from "./Image.styled";

const Image: React.FC<MediaProps> = ({ content, url, size }) => {
  return (
    <Wrapper size={size}>
      <Picture src={url} alt={content} />
      <Label>{content}</Label>
    </Wrapper>
  );
};

export default Image;
