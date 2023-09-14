import DeleteButton from "components/Interface/DeleteButton";
import { ElementTitleProps } from "types/props/ElementTitleProps";
import { Text } from "./Title.styled";

const Title: React.FC<ElementTitleProps> = ({
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

export default Title;
