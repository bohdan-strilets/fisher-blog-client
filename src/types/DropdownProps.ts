export type Option = {
  id: number;
  label: string;
  value: string;
};

export type DropdownProps = {
  name: string;
  options: Option[];
  label?: string;
  buttonlabel: string;
  defaultValue?: string | string[] | null;
  required?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  onChange: (value: string | string[]) => void;
  errors: any;
  type: "single" | "multiselect";
};

export type UseDropdownData = Pick<
  DropdownProps,
  "options" | "onChange" | "defaultValue" | "type"
>;

export type WrapperProps = Pick<DropdownProps, "width" | "margin">;

export type ButtonProps = Pick<DropdownProps, "height" | "disabled"> & {
  isOpen: boolean;
};
