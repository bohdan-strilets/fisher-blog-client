import { TextFieldProps } from "types/PostElementsProps";
import { Text } from "./Title.styled";

const Title: React.FC<TextFieldProps> = ({
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