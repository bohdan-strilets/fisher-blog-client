import { LetterProps } from "types/props/LetterProps";
import { Text } from "./Letter.styled";

const Letter: React.FC<LetterProps> = ({ fontSize }) => {
  return <Text fontSize={fontSize}>Aa</Text>;
};

export default Letter;
