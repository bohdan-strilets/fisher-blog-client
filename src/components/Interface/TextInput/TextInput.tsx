import { TextInputProps } from "types/TextInputProps";
import {
  Wrapper,
  Label,
  Required,
  InputWrapper,
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
  defaultValue,
  required,
  disabled,
  register,
  errors,
  children,
  readOnly,
}) => {
  return (
    <Wrapper margin={margin} width={width}>
      {label && (
        <Label>
          {label} {required && <Required>*</Required>}
        </Label>
      )}
      {icon && <Icon>{icon}</Icon>}
      <InputWrapper>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
          height={height}
          {...register(name)}
          aria-invalid={errors[name] ? "true" : "false"}
          icon={icon}
          readOnly={readOnly}
        />
        {children && children}
      </InputWrapper>
      {errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
    </Wrapper>
  );
};

export default TextInput;
