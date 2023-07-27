import { TextInputProps } from "types/TextInputProps";
import {
  Wrapper,
  Label,
  Required,
  Input,
  Icon,
  Error,
} from "./TextInput.styled";

const TextInput: React.FC<TextInputProps> = ({
  type,
  label,
  name,
  icon,
  width,
  height,
  margin,
  placeholder,
  required,
  disabled,
  register,
  errors,
}) => {
  return (
    <Wrapper margin={margin} width={width}>
      {label && (
        <Label>
          {label} {required && <Required>*</Required>}
        </Label>
      )}
      {icon && <Icon>{icon}</Icon>}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        height={height}
        {...register(name)}
        aria-invalid={errors[name] ? "true" : "false"}
        icon={icon}
      />
      {errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
    </Wrapper>
  );
};

export default TextInput;
