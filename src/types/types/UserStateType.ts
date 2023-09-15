import { UserType } from "./UserType";

export type UserStateType = {
  user: UserType | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};
