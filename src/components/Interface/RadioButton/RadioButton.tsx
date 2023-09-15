import { useState, useEffect } from "react";
import { RadioButtonProps } from "types/props/RadioButtonProps";
import {
  Wrapper,
  Label,
  Input,
  Slider,
  Error,
  Required,
} from "./RadioButton.styled";

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  defaultValue,
  required,
  disabled,
  margin,
  register,
  errors,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue || false);
  const toggle = () => setIsChecked((state) => !state);

  useEffect(() => {
    onChange(isChecked);
  }, [isChecked, onChange]);

  return (
    <Wrapper margin={margin} disabled={disabled}>
      <Label>
        <Input
          type="checkbox"
          checked={isChecked}
          onClick={toggle}
          {...register(name)}
          required={required}
        />
        <Slider />
      </Label>
      <p>
        {label} {required && <Required>*</Required>}
      </p>
      {errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
    </Wrapper>
  );
};

export default RadioButton;
