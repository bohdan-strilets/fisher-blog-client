import { TitleProps } from "types/PostElementsProps";
import { Text } from "./Title.styled";

const Title: React.FC<TitleProps> = ({
  content,
  fontSize,
  bold,
  italic,
  color,
  background,
}) => {
  return (
    <Text
      fontSize={fontSize}
      bold={bold}
      italic={italic}
      color={color}
      background={background}
    >
      {content}
    </Text>
  );
};

export default Title;
