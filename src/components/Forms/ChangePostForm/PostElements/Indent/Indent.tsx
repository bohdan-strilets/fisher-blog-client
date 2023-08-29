import { IndentProps } from "types/PostElementsProps";
import { Wrapper } from "./Indent.styled";

const Indent: React.FC<IndentProps> = ({ size, background }) => {
  return (
    <>
      <Wrapper size={size} background={background} />
    </>
  );
};

export default Indent;
