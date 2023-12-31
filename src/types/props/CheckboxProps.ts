export type CheckboxProps = {
  name: string;
  label?: string;
  margin?: string;
  required?: boolean;
  disabled?: boolean;
  register: any;
  errors: any;
  onChange: (value: boolean) => void;
  children?: string | React.ReactNode;
};

export type WrapperProps = Pick<CheckboxProps, "margin">;

export type CustomCheckboxProps = Pick<CheckboxProps, "disabled"> & {
  checked: boolean;
};
