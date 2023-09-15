import { RegistrationFormFields } from "./RegistrationFormFields";

export type LoginFormFields = Pick<
  RegistrationFormFields,
  "email" | "password"
>;
