import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "components/Interface/Textarea";
import Button from "components/Interface/Button";
import { AddCommentFormFields } from "types/fields/AddCommentFormFields";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import { PostTypes } from "types/PostType";
import AddCommentFormSchema from "validations/AddCommentFormSchema";
import useModal from "hooks/useModal";

const AddCommentForm: React.FC<PostBodyOptionsProps> = ({
  getPostElement,
  createElement,
}) => {
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<AddCommentFormFields>(AddCommentFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCommentFormFields>(validation);

  const onSubmit: SubmitHandler<AddCommentFormFields> = async (value) => {
    const body = { content: value.content };
    const comment = createElement(PostTypes.COMMENT, body);
    getPostElement(comment);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        name="content"
        label="Add comment text."
        placeholder="Some text for example..."
        register={register}
        errors={errors}
        height="180px"
        width="100%"
        required={true}
        margin="0 0 var(--small-indent) 0"
      />
      <Button type="submit" label="Add comment" height={40} width={300} />
    </form>
  );
};

export default AddCommentForm;
