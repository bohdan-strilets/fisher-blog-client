import { PiScreencastFill } from "react-icons/pi";
import { Wrapper, TitleWrapper, Title } from "./PostPreview.styled";
import useRenderPost from "hooks/useRenderPost";
import { PostPreviewProps } from "types/PostPreviewProps";

const PostPreview: React.FC<PostPreviewProps> = ({ elements }) => {
  const { renderPost } = useRenderPost();

  return (
    <Wrapper>
      <TitleWrapper>
        <PiScreencastFill size={24} color="var(--accent-color)" />
        <Title>Post preview</Title>
      </TitleWrapper>
      {elements.map((element) => (
        <div key={element.id}>{renderPost(element)}</div>
      ))}
    </Wrapper>
  );
};

export default PostPreview;
