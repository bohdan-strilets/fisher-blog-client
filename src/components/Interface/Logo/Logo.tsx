import { LogoProps } from "types/LogoProps";
import { Wrapper, Text, Accent } from "./Logo.styled";

const Logo: React.FC<LogoProps> = ({ fontSize, mainColor, margin }) => {
  return (
    <Wrapper to="/" margin={margin}>
      <Text fontSize={fontSize} mainColor={mainColor}>
        Fisher<Accent>Blog</Accent>
      </Text>
    </Wrapper>
  );
};

export default Logo;
