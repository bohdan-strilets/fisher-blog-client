import { ButtonProps } from "types/ButtonProps";
import { Wrapper, Label } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  handleClick,
  icon,
  width,
  height,
  margin,
  disabled,
  form,
}) => {
  return (
    <Wrapper
      type={type}
      onClick={handleClick}
      width={width}
      height={height}
      margin={margin}
      disabled={disabled}
      form={form}
    >
      {icon && icon}
      {label && <Label icon={icon}>{label}</Label>}
    </Wrapper>
  );
};

export default Button;
