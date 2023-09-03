import * as yup from "yup";
import { ColorHex } from "types/PostType";

const AddTitleFormSchema = yup.object({
  content: yup
    .string()
    .min(3, "Title must be at least 3 characters long.")
    .max(300, "The title cannot exceed 300 characters.")
    .required("The field must not be empty."),
  fontSize: yup
    .number()
    .min(14, "Value: The font size should be at least 14.")
    .max(36, "The font size cannot exceed 36."),
  bold: yup.boolean(),
  italic: yup.boolean(),
  color: yup.string().oneOf(Object.values(ColorHex)),
  background: yup.string().oneOf(Object.values(ColorHex)),
});

export default AddTitleFormSchema;
