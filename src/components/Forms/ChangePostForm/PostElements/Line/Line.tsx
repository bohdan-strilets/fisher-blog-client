import DeleteButton from "components/Interface/DeleteButton";
import { ElementLineProps } from "types/props/ElementLineProps";
import { Border } from "./Line.styled";

const Line: React.FC<ElementLineProps> = ({
  color,
  size,
  lineType,
  id,
  deleteElement,
}) => {
  return (
    <Border color={color} size={size} lineType={lineType}>
      <DeleteButton deleteFoo={() => deleteElement(id)} />
    </Border>
  );
};

export default Line;
