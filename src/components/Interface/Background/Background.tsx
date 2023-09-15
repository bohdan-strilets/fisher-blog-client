import { BackgroundProps } from "types/props/BackgroundProps";
import { Wrapper } from "./Background.styled";

const Background: React.FC<BackgroundProps> = ({
  url,
  gradient,
  width,
  height,
  margin,
  borderRadius,
  border,
  shadow,
  children,
  otherStyles,
}) => {
  return (
    <Wrapper
      url={url}
      gradient={gradient}
      width={width}
      height={height}
      margin={margin}
      borderRadius={borderRadius}
      border={border}
      shadow={shadow}
      style={otherStyles}
    >
      {children && children}
    </Wrapper>
  );
};

export default Background;
