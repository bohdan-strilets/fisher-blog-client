import { TextareaProps } from "types/props/TextareaProps";
import { Wrapper, Label, Required, Input, Error } from "./Textarea.styled";

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  width,
  height,
  margin,
  placeholder,
  defaultValue,
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
      <Input
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        height={height}
        {...register(name)}
        aria-invalid={errors[name] ? "true" : "false"}
      />
      {errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
    </Wrapper>
  );
};

export default Textarea;
