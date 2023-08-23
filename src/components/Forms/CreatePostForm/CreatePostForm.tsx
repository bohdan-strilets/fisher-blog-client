import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { IoMdCreate } from "react-icons/io";
import TextInput from "components/Interface/TextInput";
import Textarea from "components/Interface/Textarea";
import Dropdown from "components/Interface/Dropdown";
import Button from "components/Interface/Button";
import CreatePostFormSchema from "validations/CreatePostFormSchema";
import { CreatePostFormFields } from "types/FormsProps";
import { fishingOptions } from "helpers/dropdownOptions";
import { useCreatePostMutation } from "redux/post/postApi";
import useModal from "hooks/useModal";

const CreatePostForm: React.FC<{}> = () => {
  const [createPost] = useCreatePostMutation();
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<CreatePostFormFields>(CreatePostFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreatePostFormFields>(validation);

  const onSubmit: SubmitHandler<CreatePostFormFields> = (data) => {
    const createPostDto = {
      title: data.title,
      body: [
        {
          id: v4(),
          type: "paragraph",
          content: data.text,
        },
      ],
      category: [data.category],
    };
    createPost(createPostDto);
    closeModal();
    toast.success("The post has been successfully created.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="title"
        label="Title for the post."
        placeholder="My first big fish..."
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        required={true}
        margin="0 0 var(--small-indent) 0"
      />
      <Textarea
        name="text"
        label="Text for the post."
        placeholder="Example text..."
        register={register}
        errors={errors}
        height="180px"
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
            label={"Select category for post."}
            buttonlabel="Category"
            height="40px"
            width="100%"
            required={true}
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
          />
        )}
      />

      <Button
        type="submit"
        label="Create"
        height={40}
        width={300}
        icon={<IoMdCreate size={20} />}
      />
    </form>
  );
};

export default CreatePostForm;
