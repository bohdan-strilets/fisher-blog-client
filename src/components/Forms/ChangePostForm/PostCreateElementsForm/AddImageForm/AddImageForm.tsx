import { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 } from "uuid";
import Button from "components/Interface/Button";
import UploadFile from "components/UploadFile";
import TextInput from "components/Interface/TextInput";
import Dropdown from "components/Interface/Dropdown";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import { MediaProps } from "types/PostElementsProps";
import AddImageFormSchema from "validations/AddImageFormSchema";
import { useUploadImageMutation } from "redux/post/postApi";
import { sizeOptions } from "helpers/dropdownOptions";
import { imageValidation } from "helpers/fileValidation";
import useRenderPost from "hooks/useRenderPost";

const AddImageForm: React.FC<PostBodyOptionsProps> = ({ getPostElement }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [imageUrl, setImageUrl] = useState<null | string>(null);
  const [uploadImage, { data }] = useUploadImageMutation();
  const { createElement, PostTypes } = useRenderPost();

  useEffect(() => {
    const result = data?.data?.imagesURL.at(-1);
    const changeStep = () => (step === 1 ? setStep(2) : setStep(1));
    if (result) {
      setImageUrl(result);
      changeStep();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data?.imagesURL]);

  const validation = {
    resolver: yupResolver<MediaProps>(AddImageFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<MediaProps>(validation);

  const onSubmit: SubmitHandler<MediaProps> = async (value) => {
    const body = { content: value.content, url: value.url, size: value.size };
    const image = createElement(PostTypes.IMAGE, body);
    getPostElement(image);
  };

  return (
    <>
      {step === 1 ? (
        <UploadFile
          fileName="image"
          text="The selected file must be in one of the following formats '.jpg .png .gif .webp'. The file must not exceed 5MB."
          buttonLabel="Next step"
          uploadFoo={uploadImage}
          acceptTypes={imageValidation.types}
          validationSize={imageValidation.size}
          type="image"
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            type="text"
            name="content"
            label="Add a description to the image"
            placeholder="This is my beautiful picture"
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
            defaultValue={imageUrl}
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
                label="Choose image size"
                buttonlabel="Size"
                height="40px"
                width="100%"
                margin="0 0 var(--small-indent) 0"
                onChange={(value: string | string[]) => field.onChange(value)}
                errors={errors}
              />
            )}
          />
          <Button type="submit" label="Add image" height={40} width={300} />
        </form>
      )}
    </>
  );
};

export default AddImageForm;
