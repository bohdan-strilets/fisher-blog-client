import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "components/Interface/TextInput";
import Button from "components/Interface/Button";
import { AddLinkFormFields } from "types/fields/AddLinkFormFields";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import { PostTypes } from "types/PostType";
import AddLinkFormSchema from "validations/AddLinkFormSchema";
import useModal from "hooks/useModal";

const AddLinkForm: React.FC<PostBodyOptionsProps> = ({
  getPostElement,
  createElement,
}) => {
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<AddLinkFormFields>(AddLinkFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddLinkFormFields>(validation);

  const onSubmit: SubmitHandler<AddLinkFormFields> = async (value) => {
    const body = { content: value.content, url: value.url };
    const link = createElement(PostTypes.LINK, body);
    getPostElement(link);
    closeModal();
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
