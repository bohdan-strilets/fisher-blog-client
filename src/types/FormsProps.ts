import { PostBodyType } from "./PostType";

export type ContainerProps = { width?: string };

export type TextProps = { margin?: string; color?: string };

export type CreatePostFormFields = {
  title: string;
  text: string;
  category: string;
};

export type RegistrationFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordAgain: string;
  rules: boolean;
};

export type LoginFormFields = Pick<
  RegistrationFormFields,
  "email" | "password"
>;

export type RepeatConfirmEmailFormFields = Pick<
  RegistrationFormFields,
  "email"
>;

export type ResetPasswordFormFields = Pick<
  RegistrationFormFields,
  "email" | "password" | "passwordAgain"
>;

export type RestorePasswordFormFields = Pick<RegistrationFormFields, "email">;

export type ChangeProfileFormFields = {
  firstName?: string | null;
  lastName?: string | null;
  dateBirth?: string | null;
  gender?: "man" | "woman" | "other" | string | null;
  description?: string | null;
  profession?: string | null;
  phoneNumber?: string | null;
  country?: string | null;
  city?: string | null;
  postcode?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  pinterest?: string | null;
  hobby?: string[] | null;
};

export type ChangeEmailFormFields = Pick<RegistrationFormFields, "email">;

export type ChangePasswordFormFields = {
  password: string;
  newPassword: string;
  passwordAgain: string;
};

export type ChangePostFormFields = {
  title: string;
  body: PostBodyType[];
  category: string;
  tags: string;
  isPublic: boolean;
};
