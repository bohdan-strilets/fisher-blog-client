import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
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
import { useGetPostByIdQuery } from "redux/post/postApi";
import { PostBodyType } from "types/PostType";

const ChangePostForm: React.FC<{}> = () => {
  const { postId } = useParams();
  const { data } = useGetPostByIdQuery(postId ? postId : "");
  const post = data?.data;
  const [postData, setPostData] = useState<PostBodyType[] | null>(
    post?.body || null
  );

  console.log(postData);

  const getPostElement = (element: PostBodyType) => {
    setPostData((state) => {
      if (state) {
        return [...state, element];
      } else {
        return [element];
      }
    });
  };

  // const validation = {
  //   resolver: yupResolver<ChangePostFormFields>(ChangePostFormSchema),
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ChangePostFormFields>();

  const onSubmit: SubmitHandler<ChangePostFormFields> = (data) => {
    const tags = data.tags.split(",").map((tag) => tag.trim());
  };

  return post ? (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <PostBodyOptions getPostElement={getPostElement} />
      {postData && <PostPreview elements={postData} />}
      <Button type="submit" label="Edit post" height={40} width={300} />
    </form>
  ) : (
    <Loader />
  );
};

export default ChangePostForm;
