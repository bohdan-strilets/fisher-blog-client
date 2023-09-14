import { MdDelete } from "react-icons/md";
import { DeleteButtonProps } from "types/DeleteButtonProps";
import { Button } from "./DeleteButton.styled";

const DeleteButton: React.FC<DeleteButtonProps> = ({ deleteFoo }) => {
  return (
    <Button type="button" onClick={deleteFoo}>
      <MdDelete />
    </Button>
  );
};

export default DeleteButton;
