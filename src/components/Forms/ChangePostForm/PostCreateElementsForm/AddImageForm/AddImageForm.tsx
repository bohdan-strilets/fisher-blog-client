import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 } from "uuid";
import Button from "components/Interface/Button";
import UploadImage from "components/UploadImage";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import { MediaProps } from "types/PostElementsProps";
import AddImageFormSchema from "validations/AddImageFormSchema";
import { useUploadImageMutation } from "redux/post/postApi";

const AddImageForm: React.FC<PostBodyOptionsProps> = ({ getPostElement }) => {
  const [step, setStep] = useState<1 | 2>(1);

  const changeStep = () => (step === 1 ? setStep(2) : setStep(1));

  // const validation = {
  //   firsttsolver: yupResolver<MediaProps>(AddImageFormSchema),
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  // } = useForm<MediaProps>(validation);

  const onSubmit: SubmitHandler<MediaProps> = async (value) => {
    const image = {
      id: v4(),
      type: "title",
      content: value.content,
      url: value.url,
      size: value.size,
    };
    getPostElement(image);
  };

  return (
    <form>
      <UploadImage
        fileName="image"
        text="The selected file must be in one of the following formats '.jpg .png .gif .webp'. The file must not exceed 5MB."
      />
      <Button type="button" label="Next step" height={40} width={300} />
    </form>
  );
};

export default AddImageForm;
