import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Dropdown from "components/Interface/Dropdown";
import Button from "components/Interface/Button";
import { AddIndentFormFields } from "types/fields/AddIndentFormFields";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import { PostTypes } from "types/PostType";
import AddIndentFormSchema from "validations/AddIndentFormSchema";
import { colorsOptions, sizeOptions } from "helpers/dropdownOptions";
import useModal from "hooks/useModal";

const AddIndentForm: React.FC<PostBodyOptionsProps> = ({
  getPostElement,
  createElement,
}) => {
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<AddIndentFormFields>(AddIndentFormSchema),
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddIndentFormFields>(validation);

  const onSubmit: SubmitHandler<AddIndentFormFields> = async (value) => {
    const body = { size: value.size, background: value.background };
    const indent = createElement(PostTypes.INDENT, body);
    getPostElement(indent);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="size"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="size"
            options={sizeOptions}
            label="Indent size"
            buttonlabel="Size"
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
      <Controller
        name="background"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="background"
            options={colorsOptions}
            label="Indent background color"
            buttonlabel="Background color"
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
      <Button type="submit" label="Add indent" height={40} width={300} />
    </form>
  );
};

export default AddIndentForm;
