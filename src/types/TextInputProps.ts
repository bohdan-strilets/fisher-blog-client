export type TextInputProps = {
  type?: "tel" | "text" | "email" | "password";
  label?: string;
  name: string;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  register: any;
  errors: any;
  children?: React.ReactNode;
};

export type WrapperProps = Pick<TextInputProps, "margin" | "width">;

export type InputProps = Pick<TextInputProps, "height" | "icon">;
