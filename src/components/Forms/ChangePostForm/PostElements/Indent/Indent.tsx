import DeleteButton from "components/Interface/DeleteButton";
import { ElementIndentProps } from "types/props/ElementIndentProps";
import { Wrapper } from "./Indent.styled";

const Indent: React.FC<ElementIndentProps> = ({
  size,
  background,
  id,
  deleteElement,
}) => {
  return (
    <Wrapper size={size} background={background}>
      <DeleteButton deleteFoo={() => deleteElement(id)} />
    </Wrapper>
  );
};

export default Indent;
