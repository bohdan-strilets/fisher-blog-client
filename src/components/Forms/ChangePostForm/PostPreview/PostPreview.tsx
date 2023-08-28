import { PiScreencastFill } from "react-icons/pi";
import { Wrapper, TitleWrapper, Title } from "./PostPreview.styled";

const PostPreview: React.FC<{ children?: any }> = ({ children }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <PiScreencastFill size={24} color="var(--accent-color)" />
        <Title>Post preview</Title>
      </TitleWrapper>
      {children}
    </Wrapper>
  );
};

export default PostPreview;
