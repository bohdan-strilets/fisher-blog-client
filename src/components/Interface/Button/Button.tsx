import { ButtonProps } from "types/ButtonProps";
import { Wrapper, Label } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  width,
  height,
  margin,
  disabled,
}) => {
  return (
    <Wrapper
      type={type}
      width={width}
      height={height}
      margin={margin}
      disabled={disabled}
    >
      {icon}
      <Label icon={icon}>{label}</Label>
    </Wrapper>
  );
};

export default Button;
