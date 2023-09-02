import * as yup from "yup";
import { Sizes, ColorHex, Lines } from "types/PostElementsProps";

const AddIndentFormSchema = yup.object({
  background: yup.string().oneOf(Object.values(ColorHex)),
  size: yup.string().oneOf(Object.values(Sizes)),
});

export default AddIndentFormSchema;
