import { BackgroundProps } from "types/BackgroundProps";
import { Wrapper } from "./Background.styled";

const Background: React.FC<BackgroundProps> = ({
  url,
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
