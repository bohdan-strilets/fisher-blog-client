import { useState, useEffect } from "react";
import { RangeInputProps } from "types/RangeInputProps";
import {
  Wrapper,
  Label,
  Required,
  Container,
  Value,
  Result,
  Input,
  Error,
} from "./RangeInput.styled";

const RangeInput: React.FC<RangeInputProps> = ({
  label,
  name,
  defaultValue,
  min,
  max,
  step,
  required,
  disabled,
  margin,

  errors,
  onChange,
  children,
}) => {
  const [value, setValue] = useState(defaultValue || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setValue(value);
  };

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <Wrapper margin={margin}>
      <div>
        <Label>
          {label} {required && <Required>*</Required>}
        </Label>
      </div>
      <Container>
        <Value margin="0 var(--small-indent) 0 0">{min}</Value>
        <Input
          type="range"
          name={name}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          aria-invalid={errors[name] ? "true" : "false"}
        />
        <Result>{value}</Result>
        <Value margin="0 0 0 var(--small-indent)">{max}</Value>
      </Container>
      {errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
      {children && children}
    </Wrapper>
  );
};

export default RangeInput;
