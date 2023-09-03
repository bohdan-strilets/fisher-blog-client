export type AddButtonProps = {
  height?: number;
  width?: string;
  margin?: string;
  handleClick?: (e: React.MouseEvent) => void;
  iconSize?: number;
};

export type ButtonProps = Pick<AddButtonProps, "width" | "height" | "margin">;
