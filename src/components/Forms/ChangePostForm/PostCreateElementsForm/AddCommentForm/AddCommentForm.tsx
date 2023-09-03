import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "components/Interface/Textarea";
import Button from "components/Interface/Button";
import { CommentProps } from "types/PostElementsProps";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import AddCommentFormSchema from "validations/AddCommentFormSchema";
import useRenderPost from "hooks/useRenderPost";

const AddCommentForm: React.FC<PostBodyOptionsProps> = ({ getPostElement }) => {
  const { createElement, PostTypes } = useRenderPost();

  const validation = {
    resolver: yupResolver<CommentProps>(AddCommentFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentProps>(validation);

  const onSubmit: SubmitHandler<CommentProps> = async (value) => {
    const body = { content: value.content };
    const comment = createElement(PostTypes.COMMENT, body);
    getPostElement(comment);
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
