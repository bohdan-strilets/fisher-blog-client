import * as yup from "yup";
import { Sizes, ColorHex, Lines } from "types/PostType";

const AddLineFormSchema = yup.object({
  color: yup.string().oneOf(Object.values(ColorHex)),
  size: yup.string().oneOf(Object.values(Sizes)),
  lineType: yup.string().oneOf(Object.values(Lines)),
  id: yup.string(),
});

export default AddLineFormSchema;
