import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "components/Interface/TextInput";
import Dropdown from "components/Interface/Dropdown";
import Loader from "components/Interface/Loader";
import Button from "components/Interface/Button";
import RadioButton from "components/Interface/RadioButton";
import PostBodyOptions from "./PostBodyOptions";
import PostPreview from "./PostPreview";
import { ChangePostFormFields } from "types/FormsProps";
import ChangePostFormSchema from "validations/ChangePostFormSchema";
import { fishingOptions } from "helpers/dropdownOptions";
import { useChangePostMutation } from "redux/post/postApi";
import useRenderPost from "hooks/useRenderPost";

const ChangePostForm: React.FC<{}> = () => {
  const [changePost] = useChangePostMutation();
  const {
    postElements,
    getPostElement,
    post,
    postId,
    deleteElement,
    createElement,
  } = useRenderPost();

  const validation = {
    resolver: yupResolver<ChangePostFormFields>(ChangePostFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ChangePostFormFields>(validation);

  const onSubmit: SubmitHandler<ChangePostFormFields> = async (data) => {
    let tags: string[] = [];
    tags = data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [];
    const changePostDto = {
      title: data.title,
      body: postElements,
      category: data.category,
      isPublic: data.isPublic,
      tags: tags,
    };
    if (postId) {
      await changePost({ changePostDto, postId });
    }
  };

  return post ? (
    <form onSubmit={handleSubmit(onSubmit)} id="change-post-form">
      <TextInput
        type="text"
        name="title"
        label="Title for the post."
        placeholder="My first big fish..."
        defaultValue={post.title}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        required={true}
        margin="0 0 var(--small-indent) 0"
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="category"
            options={fishingOptions}
            label="Select category for post."
            buttonlabel="Category"
            defaultValue={post.category}
            height="40px"
            width="100%"
            required={true}
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
      <TextInput
        type="text"
        name="tags"
        label="Post tags."
        placeholder="fishing, sport, fisherman..."
        defaultValue={post.tags.join(", ")}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <Controller
        name="isPublic"
        control={control}
        render={({ field }) => (
          <RadioButton
            label="Do you want to make this post private? (only you can see it)"
            name="isPublic"
            defaultValue={post.isPublic}
            margin="0 0 var(--small-indent) 0"
            register={register}
            errors={errors}
            onChange={(value: boolean) => field.onChange(value)}
          />
        )}
      />
      <PostBodyOptions
        getPostElement={getPostElement}
        createElement={createElement}
      />
      {postElements && (
        <PostPreview elements={postElements} deleteElement={deleteElement} />
      )}
      <Button
        type="submit"
        label="Edit post"
        height={40}
        width={300}
        form="change-post-form"
      />
    </form>
  ) : (
    <Loader />
  );
};

export default ChangePostForm;
