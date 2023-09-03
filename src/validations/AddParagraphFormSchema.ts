import * as yup from "yup";
import { ColorHex } from "types/PostElementsProps";

const AddParagraphFormSchema = yup.object({
  content: yup
    .string()
    .min(30, "Paragraph must be at least 30 characters long.")
    .max(10000, "The Paragraph cannot exceed 10000 characters.")
    .required("The field must not be empty."),
  fontSize: yup
    .number()
    .min(14, "Value: The font size should be at least 14.")
    .max(20, "The font size cannot exceed 20."),
  bold: yup.boolean(),
  italic: yup.boolean(),
  color: yup.string().oneOf(Object.values(ColorHex)),
  background: yup.string().oneOf(Object.values(ColorHex)),
});

export default AddParagraphFormSchema;
