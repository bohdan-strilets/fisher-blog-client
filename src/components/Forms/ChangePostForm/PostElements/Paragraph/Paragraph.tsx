import DeleteButton from "components/Interface/DeleteButton";
import { ElementParagraphProps } from "types/props/ElementParagraphProps";
import { Text } from "./Paragraph.styled";

const Paragraph: React.FC<ElementParagraphProps> = ({
  content,
  fontSize,
  bold,
  italic,
  color,
  background,
  id,
  deleteElement,
}) => {
  return (
    <Text
      fontSize={fontSize}
      bold={bold}
      italic={italic}
      color={color}
      background={background}
    >
      <DeleteButton deleteFoo={() => deleteElement(id)} />
      {content}
    </Text>
  );
};

export default Paragraph;
