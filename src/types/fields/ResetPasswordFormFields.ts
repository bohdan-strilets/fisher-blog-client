import { RegistrationFormFields } from "./RegistrationFormFields";

export type ResetPasswordFormFields = Pick<
  RegistrationFormFields,
  "email" | "password" | "passwordAgain"
>;
