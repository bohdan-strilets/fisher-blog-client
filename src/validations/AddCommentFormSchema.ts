import * as yup from "yup";

const AddCommentFormSchema = yup.object({
  content: yup
    .string()
    .min(30, "Comment must be at least 30 characters long.")
    .max(10000, "The Comment cannot exceed 10000 characters.")
    .required("The field must not be empty."),
  id: yup.string(),
});

export default AddCommentFormSchema;
