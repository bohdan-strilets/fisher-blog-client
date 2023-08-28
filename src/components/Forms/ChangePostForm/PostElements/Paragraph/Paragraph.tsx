import { TextFieldProps } from "types/PostElementsProps";
import { Text } from "./Paragraph.styled";

const Paragraph: React.FC<TextFieldProps> = ({
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

export default Paragraph;
