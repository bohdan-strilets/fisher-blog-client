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

export type ContainerProps = { width?: string };

export type TextProps = { margin?: string; color?: string };
