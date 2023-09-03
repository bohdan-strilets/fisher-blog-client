import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 } from "uuid";
import TextInput from "components/Interface/TextInput";
import Button from "components/Interface/Button";
import { LinkProps } from "types/PostElementsProps";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import AddLinkFormSchema from "validations/AddLinkFormSchema";

const AddLinkForm: React.FC<PostBodyOptionsProps> = ({ getPostElement }) => {
  const validation = {
    resolver: yupResolver<LinkProps>(AddLinkFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LinkProps>(validation);

  const onSubmit: SubmitHandler<LinkProps> = async (value) => {
    const link = {
      id: v4(),
      type: "link",
      content: value.content,
      url: value.url,
    };
    getPostElement(link);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="content"
        label="Title for the link"
        placeholder="Link to an external resource"
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        required={true}
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="url"
        label="Site url."
        placeholder="http://example.com"
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        required={true}
        margin="0 0 var(--small-indent) 0"
      />
      <Button type="submit" label="Add link" height={40} width={300} />
    </form>
  );
};

export default AddLinkForm;
