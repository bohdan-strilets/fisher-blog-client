import * as yup from "yup";

const CreatePostFormSchema = yup
  .object({
    title: yup
      .string()
      .trim()
      .min(30, "Title must be at least 30 characters")
      .max(70, "Title can be up to 70 characters only")
      .required("Title is required"),
    text: yup
      .string()
      .trim()
      .min(100, "Text must be at least 100 characters")
      .max(3000, "Text can be up to 3000 characters only")
      .required("Text is required"),
    category: yup.string().trim().required("Category is required"),
  })
  .required("Please fill out the entire form");

export default CreatePostFormSchema;
