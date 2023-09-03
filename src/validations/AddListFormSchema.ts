import * as yup from "yup";
import { Lists } from "types/PostElementsProps";

const AddListFormSchema = yup.object({
  content: yup
    .string()
    .min(5, "Image description must be at least 5 characters long.")
    .max(500, "Image description must not exceed 500 characters.")
    .required("The field must not be empty."),
  listType: yup
    .string()
    .oneOf(Object.values(Lists))
    .required("The field must not be empty."),
  listItems: yup
    .array()
    .of(yup.string().required())
    .required("The field must not be empty."),
});

export default AddListFormSchema;
