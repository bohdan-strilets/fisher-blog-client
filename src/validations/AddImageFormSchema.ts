import * as yup from "yup";
import { Sizes } from "types/PostType";

const AddImageFormSchema = yup.object({
  content: yup
    .string()
    .min(5, "Image description must be at least 5 characters long.")
    .max(500, "Image description must not exceed 500 characters.")
    .required("The field must not be empty."),
  url: yup
    .string()
    .url("Please enter a valid URL.")
    .required("The field must not be empty."),
  size: yup.string().oneOf(Object.values(Sizes)),
});

export default AddImageFormSchema;
