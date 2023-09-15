import { useState, useEffect } from "react";
import { HiCheck } from "react-icons/hi";
import { CheckboxProps } from "types/props/CheckboxProps";
import {
  Wrapper,
  Input,
  CustomCheckbox,
  Label,
  Error,
} from "./Checkbox.styled";

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  margin,
  required,
  disabled,
  register,
  errors,
  onChange,
  children,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    onChange(isChecked);
  }, [isChecked, onChange]);

  const toggle = () => setIsChecked((state) => !state);

  return (
    <Wrapper margin={margin}>
      <Input
        type="checkbox"
        name={name}
        checked={isChecked}
        {...register(name)}
        required={required}
        disabled={disabled}
        onClick={toggle}
      />
      <CustomCheckbox
        checked={isChecked}
        disabled={disabled}
        className="checkbox"
      >
        {isChecked && <HiCheck size={20} />}
      </CustomCheckbox>
      {children && !label && children}
      {label && !children && <Label>{label}</Label>}
      {errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
    </Wrapper>
  );
};

export default Checkbox;
