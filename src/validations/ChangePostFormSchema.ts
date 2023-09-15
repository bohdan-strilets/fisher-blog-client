import * as yup from "yup";
import {
  PostTypes,
  ColorHex,
  Sizes,
  Lines,
  Lists,
} from "types/types/PostBodyType";

const postTypesSchema = yup.string().oneOf(Object.values(PostTypes)).required();
const colorHexSchema = yup.string().oneOf(Object.values(ColorHex));
const sizesSchema = yup.string().oneOf(Object.values(Sizes));
const linesSchema = yup.string().oneOf(Object.values(Lines));
const listsSchema = yup.string().oneOf(Object.values(Lists));

const postBodyTypeSchema = yup.object().shape({
  id: yup.string().required(),
  type: postTypesSchema.required(),
  content: yup.string(),
  fontSize: yup.number(),
  bold: yup.boolean(),
  italic: yup.boolean(),
  url: yup.string(),
  color: colorHexSchema,
  background: colorHexSchema,
  size: sizesSchema,
  lineType: linesSchema,
  listType: listsSchema,
  listItems: yup.array().of(yup.string().required()),
  videoSize: yup.number(),
});

const ChangePostFormSchema = yup.object({
  title: yup
    .string()
    .min(30, "Title must be at least 30 characters long")
    .max(70, "Title cannot exceed 70 characters")
    .required("Title is required"),
  body: yup.array().of(postBodyTypeSchema.required()),
  category: yup.string().required("Category is required"),
  tags: yup.string().transform((value, originalValue) => {
    if (originalValue && Array.isArray(originalValue)) {
      return originalValue.join(", ");
    }
    return value;
  }),
  isPublic: yup.boolean(),
});

export default ChangePostFormSchema;
