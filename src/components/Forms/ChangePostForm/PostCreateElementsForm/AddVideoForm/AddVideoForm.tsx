import { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/Interface/Button";
import UploadFile from "components/UploadFile";
import TextInput from "components/Interface/TextInput";
import Dropdown from "components/Interface/Dropdown";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import { AddVideoFormFields } from "types/fields/AddVideoFormFields";
import { PostTypes } from "types/PostType";
import AddVideoFormSchema from "validations/AddVideoFormSchema";
import { useUploadVideoMutation } from "redux/post/postApi";
import { sizeOptions } from "helpers/dropdownOptions";
import { videoValidation } from "helpers/fileValidation";
import useModal from "hooks/useModal";

const AddVideoForm: React.FC<PostBodyOptionsProps> = ({
  getPostElement,
  createElement,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [videoUrl, setVideoUrl] = useState<null | string>(null);
  const [uploadVideo, { data }] = useUploadVideoMutation();
  const { closeModal } = useModal();

  useEffect(() => {
    const result = data?.data?.videosURL.at(-1);
    const changeStep = () => (step === 1 ? setStep(2) : setStep(1));
    if (result) {
      setVideoUrl(result);
      changeStep();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data?.videosURL]);

  const validation = {
    resolver: yupResolver<AddVideoFormFields>(AddVideoFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddVideoFormFields>(validation);

  const onSubmit: SubmitHandler<AddVideoFormFields> = async (value) => {
    const body = { content: value.content, url: value.url, size: value.size };
    const video = createElement(PostTypes.VIDEO, body);
    getPostElement(video);
    closeModal();
  };

  return (
    <>
      {step === 1 ? (
        <UploadFile
          fileName="video"
          text="The selected file must be in one of the following formats '.mp4 .webm .ogg. The file must not exceed 25MB."
          buttonLabel="Next step"
          uploadFoo={uploadVideo}
          acceptTypes={videoValidation.types}
          validationSize={videoValidation.size}
          type="video"
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            type="text"
            name="content"
            label="Add a description to the video"
            placeholder="This is my beautiful video"
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
            label="URL address of the image"
            defaultValue={videoUrl}
            register={register}
            errors={errors}
            height="40px"
            width="100%"
            required={true}
            readOnly={true}
            margin="0 0 var(--small-indent) 0"
          />
          <Controller
            name="size"
            control={control}
            render={({ field }) => (
              <Dropdown
                type="single"
                name="size"
                options={sizeOptions}
                label="Choose video container size"
                buttonlabel="Size"
                height="40px"
                width="100%"
                margin="0 0 var(--small-indent) 0"
                onChange={(value: string | string[]) => field.onChange(value)}
                errors={errors}
              />
            )}
          />
          <Button type="submit" label="Add video" height={40} width={300} />
        </form>
      )}
    </>
  );
};

export default AddVideoForm;
