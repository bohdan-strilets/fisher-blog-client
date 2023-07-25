export type ButtonProps = {
  type: "button" | "submit" | "reset";
  label?: string;
  icon?: React.ReactNode;
  width?: number;
  height?: number;
  margin?: string;
  disabled?: boolean;
};

export type WrapperProps = Pick<
  ButtonProps,
  "width" | "height" | "margin" | "disabled"
>;

export type LabelProps = Pick<ButtonProps, "icon">;
