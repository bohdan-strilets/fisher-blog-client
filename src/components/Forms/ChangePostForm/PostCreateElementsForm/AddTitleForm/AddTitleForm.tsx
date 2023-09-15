import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "components/Interface/TextInput";
import RadioButton from "components/Interface/RadioButton";
import Dropdown from "components/Interface/Dropdown";
import RangeInput from "components/Interface/RangeInput";
import Button from "components/Interface/Button";
import Letter from "components/Interface/Letter";
import { AddTitleFormFields } from "types/fields/AddTitleFormFields";
import { PostBodyOptionsProps } from "types/props/ChangePostFormProps";
import { PostTypes } from "types/types/PostBodyType";
import { colorsOptions } from "helpers/dropdownOptions";
import AddTitleFormSchema from "validations/AddTitleFormSchema";
import useModal from "hooks/useModal";

const AddTitleForm: React.FC<PostBodyOptionsProps> = ({
  getPostElement,
  createElement,
}) => {
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<AddTitleFormFields>(AddTitleFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddTitleFormFields>(validation);

  const onSubmit: SubmitHandler<AddTitleFormFields> = async (value) => {
    const body = {
      content: value.content,
      fontSize: value.fontSize,
      bold: value.bold,
      italic: value.italic,
      color: value.color,
      background: value.background,
    };
    const title = createElement(PostTypes.TITLE, body);
    getPostElement(title);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="content"
        label="Heading for a paragraph"
        placeholder="How do I catch big fish?"
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        required={true}
        margin="0 0 var(--small-indent) 0"
      />
      <Controller
        name="fontSize"
        control={control}
        render={({ field }) => (
          <RangeInput
            label="Specify the font size for the title"
            name="fontSize"
            min={14}
            max={36}
            step={1}
            defaultValue={22}
            margin="0 0 var(--small-indent) 0 "
            errors={errors}
            onChange={(value: number) => field.onChange(value)}
          >
            <Letter fontSize={field.value ? field.value : 16} />
          </RangeInput>
        )}
      />
      <Controller
        name="bold"
        control={control}
        render={({ field }) => (
          <RadioButton
            label="Want to make text bold?"
            name="bold"
            margin="0 0 var(--small-indent) 0"
            register={register}
            errors={errors}
            onChange={(value: boolean) => field.onChange(value)}
          />
        )}
      />
      <Controller
        name="italic"
        control={control}
        render={({ field }) => (
          <RadioButton
            label="Want to make text italic?"
            name="italic"
            margin="0 0 var(--small-indent) 0"
            register={register}
            errors={errors}
            onChange={(value: boolean) => field.onChange(value)}
          />
        )}
      />
      <Controller
        name="color"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="color"
            options={colorsOptions}
            label="Title text color."
            buttonlabel="Color"
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
            label="The background color of the header text."
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

export default AddTitleForm;
