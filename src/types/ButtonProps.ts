export type ButtonProps = {
  type: "button" | "submit" | "reset";
  label?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
