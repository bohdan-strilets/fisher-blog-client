export type RangeInputProps = {
  label: string;
  name: string;
  defaultValue?: number;
  min: number;
  max: number;
  step: number;
  required?: boolean;
  disabled?: boolean;
  margin?: string;
  errors: any;
  onChange: (value: number) => void;
  children?: React.ReactNode;
};

export type WrapperProps = Pick<RangeInputProps, "margin">;

export type ValueProps = {
  margin?: string;
};
