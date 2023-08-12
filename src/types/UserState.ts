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

export type UserStateType = {
  user: UserType | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

export type RegistrationDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginDto = Pick<RegistrationDto, "email" | "password">;

export type EmailDto = Pick<RegistrationDto, "email">;

export type ResetPasswordDto = Pick<RegistrationDto, "password" | "email">;

type changeProfileDtoLocation = {
  country?: string | null;
  city?: string | null;
  postcode?: string | null;
};

type changeProfileDtoSocialNetworks = {
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  pinterest?: string | null;
};

export type ChangeProfileDto = {
  firstName?: string | null;
  lastName?: string | null;
  dateBirth?: string | null;
  gender?: "man" | "woman" | "other" | string | null;
  description?: string | null;
  profession?: string | null;
  phoneNumber?: string | null;
  location?: changeProfileDtoLocation | null;
  socialNetworks?: changeProfileDtoSocialNetworks | null;
  hobby?: string[] | null;
};

export type ChangePasswordDto = {
  password: String;
  newPassword: string;
};
