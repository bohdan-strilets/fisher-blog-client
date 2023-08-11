import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdCreate } from "react-icons/io";
import TextInput from "components/Interface/TextInput";
import Textarea from "components/Interface/Textarea";
import Dropdown from "components/Interface/Dropdown";
import Button from "components/Interface/Button";
import CreatePostFormSchema from "validations/CreatePostFormSchema";
import { CreatePostFormFields } from "types/FormsProps";

const options = [
  { id: 1, label: "Super option 1", value: "super option 1" },
  { id: 2, label: "Super option 2", value: "super option 2" },
  { id: 3, label: "Super option 3", value: "super option 3" },
  { id: 4, label: "Super option 4", value: "super option 4" },
  { id: 5, label: "Super option 5", value: "super option 5" },
  { id: 7, label: "Super option 6", value: "super option 6" },
  { id: 8, label: "Super option 7", value: "super option 7" },
  { id: 9, label: "Super option 8", value: "super option 8" },
  { id: 10, label: "Super option 9", value: "super option 9" },
  { id: 11, label: "Super option 10", value: "super option 10" },
  { id: 12, label: "Super option 11", value: "super option 11" },
];

const CreatePostForm: React.FC<{}> = () => {
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
    console.log(data);
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
            options={options}
            label={"Select category for post."}
            buttonlabel="Category"
            height="40px"
            width="100%"
            required={true}
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string) => field.onChange(value)}
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
