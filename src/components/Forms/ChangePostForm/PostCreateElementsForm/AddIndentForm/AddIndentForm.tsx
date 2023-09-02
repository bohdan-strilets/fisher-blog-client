import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 } from "uuid";
import Dropdown from "components/Interface/Dropdown";
import Button from "components/Interface/Button";
import { IndentProps } from "types/PostElementsProps";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import AddIndentFormSchema from "validations/AddIndentFormSchema";
import { colorsOptions, sizeOptions } from "helpers/dropdownOptions";

const AddIndentForm: React.FC<PostBodyOptionsProps> = ({ getPostElement }) => {
  const validation = {
    resolver: yupResolver<IndentProps>(AddIndentFormSchema),
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IndentProps>(validation);

  const onSubmit: SubmitHandler<IndentProps> = async (value) => {
    const indent = {
      id: v4(),
      type: "indent",
      size: value.size,
      background: value.background,
    };
    getPostElement(indent);
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
      <Button type="submit" label="Add title" height={40} width={300} />
    </form>
  );
};

export default AddIndentForm;
