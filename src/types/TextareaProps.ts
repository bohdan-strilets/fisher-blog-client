export type TextareaProps = {
  label?: string;
  name: string;
  width?: string;
  height?: string;
  margin?: string;
  placeholder?: string;
  defaultValue?: string | null;
  required?: boolean;
  disabled?: boolean;
  register: any;
  errors: any;
};

export type WrapperProps = Pick<TextareaProps, "margin" | "width">;

export type InputProps = Pick<TextareaProps, "height">;
