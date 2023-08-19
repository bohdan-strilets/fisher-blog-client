import { IoMdCloudUpload } from "react-icons/io";
import Button from "components/Interface/Button";
import Loader from "components/Interface/Loader";
import useModal from "hooks/useModal";
import useUploadImage from "hooks/useUploadImage";
import {
  Text,
  Label,
  Input,
  UploadButton,
  UploadButtonLabel,
  Preview,
} from "./UploadImage.styled";

export type UploadImageProps = {
  fileName: string;
  text: string;
};

const UploadImage: React.FC<UploadImageProps> = ({ fileName, text }) => {
  const { closeModal } = useModal();
  const {
    handleSubmit,
    fileInputState,
    handleClick,
    handleFileInputChange,
    hiddenFileInput,
    isLoading,
    previewSource,
  } = useUploadImage(closeModal, "poster");

  return (
    <form encType="multipart/from-data" onSubmit={handleSubmit}>
      <Text>{text}</Text>
      <Label>
        <Input
          type="file"
          name={fileName}
          ref={hiddenFileInput}
          multiple
          accept=".jpg, .png, .gif .webp"
          onChange={handleFileInputChange}
          value={fileInputState}
        />

        <UploadButton type="button" onClick={handleClick}>
          <IoMdCloudUpload size={50} />
          <UploadButtonLabel>{`Select ${fileName}`}</UploadButtonLabel>
        </UploadButton>
      </Label>
      {previewSource && (
        <Preview
          src={previewSource as string}
          alt={`User-selected ${fileName}`}
        />
      )}
      <Button
        type="submit"
        label={`Change ${fileName}`}
        height={40}
        width={300}
      />

      {isLoading && <Loader margin="var(--medium-indent) 0 0 0" />}
    </form>
  );
};

export default UploadImage;
