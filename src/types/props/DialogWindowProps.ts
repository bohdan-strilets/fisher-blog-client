export type DialogWindowProps = {
  message?: string;
  failureBtnLabel: string;
  successBtnLabel: string;
  failureBtnHandler: (e: React.MouseEvent) => void;
  successBtnHandler: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
};

export type ButtonProps = {
  background: string;
};
