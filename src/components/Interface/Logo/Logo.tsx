import { GiAnglerFish } from "react-icons/gi";
import { LogoProps } from "types/LogoProps";
import { Wrapper, Text, Accent } from "./Logo.styled";

const Logo: React.FC<LogoProps> = ({ fontSize, mainColor, margin, type }) => {
  if (type === "short") {
    return (
      <Wrapper to="/" margin={margin}>
        <GiAnglerFish size={40} />
      </Wrapper>
    );
  }

  return (
    <Wrapper to="/" margin={margin}>
      <GiAnglerFish size={40} />
      <Text fontSize={fontSize} mainColor={mainColor}>
        Fisher<Accent>Blog</Accent>
      </Text>
    </Wrapper>
  );
};

export default Logo;
