import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "components/Interface/Textarea";
import RadioButton from "components/Interface/RadioButton";
import Dropdown from "components/Interface/Dropdown";
import RangeInput from "components/Interface/RangeInput";
import Button from "components/Interface/Button";
import Letter from "components/Interface/Letter";
import { AddParagraphFormFields } from "types/fields/AddParagraphFormFields";
import { PostBodyOptionsProps } from "types/props/ChangePostFormProps";
import { PostTypes } from "types/types/PostBodyType";
import { colorsOptions } from "helpers/dropdownOptions";
import AddParagraphFormSchema from "validations/AddParagraphFormSchema";
import useModal from "hooks/useModal";

const AddParagraphForm: React.FC<PostBodyOptionsProps> = ({
  getPostElement,
  createElement,
}) => {
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<AddParagraphFormFields>(AddParagraphFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddParagraphFormFields>(validation);

  const onSubmit: SubmitHandler<AddParagraphFormFields> = async (value) => {
    const body = {
      content: value.content,
      fontSize: value.fontSize,
      bold: value.bold,
      italic: value.italic,
      color: value.color,
      background: value.background,
    };
    const paragraph = createElement(PostTypes.PARAGRAPH, body);
    getPostElement(paragraph);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        name="content"
        label="Add a paragraph of text"
        placeholder="Some text for example..."
        register={register}
        errors={errors}
        height="180px"
        width="100%"
        required={true}
        margin="0 0 var(--small-indent) 0"
      />
      <Controller
        name="fontSize"
        control={control}
        render={({ field }) => (
          <RangeInput
            label="Specify the font size for the paragraph"
            name="fontSize"
            min={14}
            max={20}
            step={1}
            defaultValue={16}
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
            label="Paragraph text color."
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
            label="The background color of the paragraph text."
            buttonlabel="Background color"
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
      <Button type="submit" label="Add paragraph" height={40} width={300} />
    </form>
  );
};

export default AddParagraphForm;
