import * as yup from "yup";
import { Sizes } from "types/PostElementsProps";

const AddVideoFormSchema = yup.object({
  content: yup
    .string()
    .min(5, "Video description must be at least 5 characters long.")
    .max(500, "Video description must not exceed 500 characters.")
    .required("The field must not be empty."),
  url: yup
    .string()
    .url("Please enter a valid URL.")
    .required("The field must not be empty."),
  size: yup.string().oneOf(Object.values(Sizes)),
});

export default AddVideoFormSchema;
