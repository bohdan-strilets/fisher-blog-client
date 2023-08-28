export type RadioButtonProps = {
  label: string;
  name: string;
  defaultValue?: boolean;
  required?: boolean;
  disabled?: boolean;
  margin?: string;
  register: any;
  errors: any;
  onChange: (value: boolean) => void;
};

export type WrapperProps = Pick<RadioButtonProps, "margin" | "disabled">;
