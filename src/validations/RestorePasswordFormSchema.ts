import * as yup from "yup";

const RestorePasswordFormSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  })
  .required();

export default RestorePasswordFormSchema;
