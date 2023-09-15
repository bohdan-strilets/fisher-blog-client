export type HeaderProps = {
  title: string;
  userId: string;
  isActivated: boolean;
};

export type StatusProps = Pick<HeaderProps, "isActivated">;
