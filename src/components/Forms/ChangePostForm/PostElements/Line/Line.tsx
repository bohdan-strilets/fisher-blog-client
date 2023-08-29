import { LineProps } from "types/PostElementsProps";
import { Border } from "./Line.styled";

const Line: React.FC<LineProps> = ({ color, size, lineType }) => {
  return (
    <>
      <Border color={color} size={size} lineType={lineType} />
    </>
  );
};

export default Line;
