export type TimerProps = {
  initialSeconds: number;
  callback: () => void;
  message?: string;
  margin?: string;
};

export type WrapperProps = Pick<TimerProps, "margin">;
