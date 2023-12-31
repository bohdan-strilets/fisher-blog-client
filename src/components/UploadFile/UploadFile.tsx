import { IoMdCloudUpload } from "react-icons/io";
import Button from "components/Interface/Button";
import Loader from "components/Interface/Loader";
import Preview from "./Preview";
import useModal from "hooks/useModal";
import useUploadFile from "hooks/useUploadFile";
import { UploadFileProps } from "types/props/UploadFileProps";
import {
  Text,
  Label,
  Input,
  UploadButton,
  UploadButtonLabel,
} from "./UploadFile.styled";

const UploadFile: React.FC<UploadFileProps> = ({
  fileName,
  text,
  operation,
  buttonLabel,
  uploadFoo,
  acceptTypes,
  validationSize,
  type,
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
  } = useUploadFile(closeModal, fileName, operation, uploadFoo);

  return (
    <form encType="multipart/from-data" onSubmit={handleSubmit}>
      <Text>{text}</Text>
      <Label>
        <Input
          type="file"
          name={fileName}
          ref={hiddenFileInput}
          multiple
          accept={acceptTypes}
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
          validationSize={validationSize}
          type={type}
        />
      )}
      {isLoading && <Loader margin="var(--medium-indent) 0 0 0" />}
      <Button type="submit" label={buttonLabel} height={40} width={300} />
    </form>
  );
};

export default UploadFile;
