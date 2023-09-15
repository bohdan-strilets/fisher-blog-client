import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { GoBackProps } from "types/props/GoBackProps";
import { Button, Label } from "./GoBack.styled";

const GoBack: React.FC<GoBackProps> = ({ path, label, margin }) => {
  const navigate = useNavigate();

  return (
    <Button type="button" margin={margin} onClick={() => navigate(path)}>
      <IoMdArrowDropleft size={24} />
      <Label>{label}</Label>
    </Button>
  );
};

export default GoBack;
