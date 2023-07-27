import * as yup from "yup";

const SearchFormSchema = yup
  .object({
    value: yup.string().trim(),
  })
  .required();

export default SearchFormSchema;
