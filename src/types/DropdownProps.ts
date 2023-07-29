export type Option = {
  id: number;
  label: string;
  value: string;
};

export type DropdownProps = {
  options: Option[];
  label?: string;
  buttonlabel: string;
  required?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  onChange: (value: string) => void;
};

export type UseDropdownData = Pick<DropdownProps, "options" | "onChange">;

export type WrapperProps = Pick<DropdownProps, "width" | "margin">;

export type ButtonProps = Pick<DropdownProps, "height" | "disabled"> & {
  isOpen: boolean;
};
