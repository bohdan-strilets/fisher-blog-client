import { Wrapper, Media, Label } from "./Video.styled";
import { MediaProps } from "types/PostElementsProps";

const Video: React.FC<MediaProps> = ({ content, url, size }) => {
  return (
    <Wrapper size={size}>
      <Media src={url} controls />
      <Label>{content}</Label>
    </Wrapper>
  );
};

export default Video;
