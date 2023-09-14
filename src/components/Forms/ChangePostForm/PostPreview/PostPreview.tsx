import { PiScreencastFill } from "react-icons/pi";
import RenderPost from "components/Blog/RenderPost";
import { PostPreviewProps } from "types/PostPreviewProps";
import { Wrapper, TitleWrapper, Title } from "./PostPreview.styled";

const PostPreview: React.FC<PostPreviewProps> = ({
  elements,
  deleteElement,
}) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <PiScreencastFill size={24} color="var(--accent-color)" />
        <Title>Post preview</Title>
      </TitleWrapper>
      {elements.map((element) => (
        <div key={element.id}>
          <RenderPost element={element} deleteElement={deleteElement} />
        </div>
      ))}
    </Wrapper>
  );
};

export default PostPreview;
