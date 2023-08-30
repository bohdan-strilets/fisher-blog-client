import * as yup from "yup";

const AddImageFormSchema = yup.object({
  content: yup
    .string()
    .min(5, "Image description must be at least 5 characters long.")
    .max(500, "Image description must not exceed 500 characters."),
  url: yup
    .string()
    .url("Please enter a valid URL.")
    .required("The field must not be empty."),
  size: yup.string().oneOf(["small", "medium", "large"]),
});

export default AddImageFormSchema;
