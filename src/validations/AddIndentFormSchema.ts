import * as yup from "yup";
import { Sizes, ColorHex } from "types/types/PostBodyType";

const AddIndentFormSchema = yup.object({
  background: yup.string().oneOf(Object.values(ColorHex)),
  size: yup.string().oneOf(Object.values(Sizes)),
  id: yup.string(),
});

export default AddIndentFormSchema;
