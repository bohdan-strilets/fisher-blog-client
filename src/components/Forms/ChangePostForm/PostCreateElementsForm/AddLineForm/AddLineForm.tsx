import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Dropdown from "components/Interface/Dropdown";
import Button from "components/Interface/Button";
import { LineProps } from "types/PostElementsProps";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import AddLineFormSchema from "validations/AddLineFormSchema";
import useRenderPost from "hooks/useRenderPost";
import useModal from "hooks/useModal";
import {
  colorsOptions,
  sizeOptions,
  lineTypeOptions,
} from "helpers/dropdownOptions";

const AddLineForm: React.FC<PostBodyOptionsProps> = ({ getPostElement }) => {
  const { createElement, PostTypes } = useRenderPost();
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<LineProps>(AddLineFormSchema),
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LineProps>(validation);

  const onSubmit: SubmitHandler<LineProps> = async (value) => {
    const body = {
      color: value.color,
      size: value.size,
      lineType: value.lineType,
    };
    const line = createElement(PostTypes.LINE, body);
    getPostElement(line);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="color"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="color"
            options={colorsOptions}
            label="Line color"
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
        name="size"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="size"
            options={sizeOptions}
            label="Line size"
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
        name="lineType"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="lineType"
            options={lineTypeOptions}
            label="Line type"
            buttonlabel="Type"
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
      <Button type="submit" label="Add line" height={40} width={300} />
    </form>
  );
};

export default AddLineForm;
