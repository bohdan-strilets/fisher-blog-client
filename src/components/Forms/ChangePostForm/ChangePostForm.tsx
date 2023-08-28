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

import Title from "./PostElements/Title";
import Paragraph from "./PostElements/Paragraph";

const ChangePostForm: React.FC<{}> = () => {
  const { postId } = useParams();
  const { data } = useGetPostByIdQuery(postId ? postId : "");
  const post = data?.data;

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
    console.log(data);
    const tags = data.tags.split(",").map((tag) => tag.trim());
    console.log(tags);
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
      <PostBodyOptions />
      <PostPreview>
        <Title
          content="First paragraph by test post about fishing"
          fontSize={28}
          bold
          color="yellow"
          background="gray"
        />
        <Paragraph
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto repellendus velit tempora eaque quia non praesentium laborum fugit laudantium atque a doloribus officia nobis magni obcaecati corrupti, soluta doloremque dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto repellendus velit tempora eaque quia non praesentium laborum fugit laudantium atque a doloribus officia nobis magni obcaecati corrupti, soluta doloremque dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto repellendus velit tempora eaque quia non praesentium laborum fugit laudantium atque a doloribus officia nobis magni obcaecati corrupti, soluta doloremque dicta."
          color="gray"
        />
      </PostPreview>
      <Button type="submit" label="Edit post" height={40} width={300} />
    </form>
  ) : (
    <Loader />
  );
};

export default ChangePostForm;
