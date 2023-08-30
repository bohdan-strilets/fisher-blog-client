import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 } from "uuid";
import Textarea from "components/Interface/Textarea";
import RadioButton from "components/Interface/RadioButton";
import Dropdown from "components/Interface/Dropdown";
import RangeInput from "components/Interface/RangeInput";
import Button from "components/Interface/Button";
import { TextFieldProps } from "types/PostElementsProps";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import { colorsOptions } from "helpers/dropdownOptions";
import AddParagraphFormSchema from "validations/AddParagraphFormSchema";

const AddParagraphForm: React.FC<PostBodyOptionsProps> = ({
  getPostElement,
}) => {
  const validation = {
    resolver: yupResolver<TextFieldProps>(AddParagraphFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TextFieldProps>(validation);

  const onSubmit: SubmitHandler<TextFieldProps> = async (value) => {
    const paragraph = {
      id: v4(),
      type: "paragraph",
      content: value.content,
      fontSize: value.fontSize,
      bold: value.bold,
      italic: value.italic,
      color: value.color,
      background: value.background,
    };
    getPostElement(paragraph);
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
            <p style={{ fontSize: `${field.value}px`, fontWeight: 700 }}>Aa</p>
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