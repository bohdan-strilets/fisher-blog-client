import { Wrapper, Text, Accent } from "./Logo.styled";

const Logo: React.FC<{}> = () => {
  return (
    <Wrapper to="/">
      <Text>
        Fisher<Accent>Blog</Accent>
      </Text>
    </Wrapper>
  );
};

export default Logo;
