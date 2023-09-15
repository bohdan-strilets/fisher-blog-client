export type GoBackProps = {
  path: string;
  label: string;
  margin?: string;
};

export type ButtonProps = Pick<GoBackProps, "margin">;
