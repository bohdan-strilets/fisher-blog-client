import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import TextInput from "../TextInput";
import { PasswordInputProps } from "types/PasswordInputProps";
import { Button } from "./PasswordInput.styled";

const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  label,
  placeholder,
  register,
  errors,
  height,
  width,
  required,
  disabled,
  icon,
  margin,
}) => {
  const [type, setType] = useState<"text" | "password">("password");

  const toggle = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <TextInput
      type={type}
      name={name}
      label={label}
      placeholder={placeholder}
      register={register}
      errors={errors}
      height={height}
      width={width}
      required={required}
      disabled={disabled}
      margin={margin}
      icon={icon}
    >
      <Button type="button" onClick={toggle}>
        {type === "password" ? <IoEye size={20} /> : <IoEyeOff size={20} />}
      </Button>
    </TextInput>
  );
};

export default PasswordInput;
