import { UserType } from "./UserType";
import { TokensType } from "./TokensType";

export type ResponseType<U = UserType, T = TokensType> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  tokens?: T;
  data?: U;
};

export type AuthStateType = {
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

export type RegistrationData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginData = Pick<RegistrationData, "email" | "password">;
