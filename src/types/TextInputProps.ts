export type TextInputProps = {
  type?: "tel" | "text" | "email" | "password" | "number";
  label?: string;
  name: string;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  placeholder?: string;
  defaultValue?: string | Date | null;
  required?: boolean;
  disabled?: boolean;
  register: any;
  errors: any;
  children?: React.ReactNode;
};

export type WrapperProps = Pick<TextInputProps, "margin" | "width">;

export type InputProps = Pick<TextInputProps, "height" | "icon">;
