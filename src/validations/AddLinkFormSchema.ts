import * as yup from "yup";

const AddLinkFormSchema = yup.object({
  content: yup
    .string()
    .min(5, "Link title must be at least 5 characters long.")
    .max(500, "Link title must not exceed 500 characters.")
    .required("The field must not be empty."),
  url: yup
    .string()
    .url("Please enter a valid URL.")
    .required("The field must not be empty."),
  id: yup.string(),
});

export default AddLinkFormSchema;
