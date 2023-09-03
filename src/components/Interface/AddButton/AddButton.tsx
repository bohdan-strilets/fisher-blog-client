import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AddButtonProps } from "types/AddButtonProps";
import { Button } from "./AddButton.styled";

const AddButton: React.FC<AddButtonProps> = ({
  height,
  width,
  margin,
  handleClick,
  iconSize,
}) => {
  return (
    <Button
      type="button"
      height={height}
      width={width}
      margin={margin}
      onClick={handleClick}
    >
      <AiOutlineAppstoreAdd size={iconSize ? iconSize : 80} />
    </Button>
  );
};

export default AddButton;
