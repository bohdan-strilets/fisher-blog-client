import { PiScreencastFill } from "react-icons/pi";
import { Wrapper, TitleWrapper, Title } from "./PostPreview.styled";

const PostPreview: React.FC<{}> = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <PiScreencastFill size={24} color="var(--accent-color)" />
        <Title>Post preview</Title>
      </TitleWrapper>
      <p>:(</p>
    </Wrapper>
  );
};

export default PostPreview;
