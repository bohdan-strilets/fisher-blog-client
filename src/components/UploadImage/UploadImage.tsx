import { IoMdCloudUpload } from "react-icons/io";
import Button from "components/Interface/Button";
import Loader from "components/Interface/Loader";
import Preview from "./Preview";
import useModal from "hooks/useModal";
import useUploadImage from "hooks/useUploadImage";
import { UploadImageProps } from "types/UploadImageProps";
import {
  Text,
  Label,
  Input,
  UploadButton,
  UploadButtonLabel,
} from "./UploadImage.styled";

const UploadImage: React.FC<UploadImageProps> = ({
  fileName,
  text,
  operation,
}) => {
  const { closeModal } = useModal();
  const {
    handleSubmit,
    fileInputState,
    handleClick,
    handleFileInputChange,
    hiddenFileInput,
    isLoading,
    previewSource,
    selectedFile,
  } = useUploadImage(closeModal, fileName, operation);

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
          fileName={fileName}
          previewSource={previewSource}
          selectedFile={selectedFile}
        />
      )}
      {isLoading && <Loader margin="var(--medium-indent) 0 0 0" />}
      <Button
        type="submit"
        label={`Change ${fileName}`}
        height={40}
        width={300}
      />
    </form>
  );
};

export default UploadImage;
