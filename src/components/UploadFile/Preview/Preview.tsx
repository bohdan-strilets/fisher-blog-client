import bytesToMegabytes from "helpers/bytesToMegabytes";
import { PreviewProps } from "types/props/UploadFileProps";
import { Wrapper, Image, Video, Text, Size } from "./Preview.styled";

const Preview: React.FC<PreviewProps> = ({
  previewSource,
  fileName,
  selectedFile,
  validationSize,
  type,
}) => {
  return (
    <Wrapper>
      {type === "image" ? (
        <Image
          src={previewSource.toString()}
          alt={`User-selected ${fileName}`}
        />
      ) : (
        <Video controls>
          <source src={previewSource.toString()} />
          Your browser does not support video.
        </Video>
      )}
      {selectedFile && selectedFile instanceof File && (
        <Text>
          {selectedFile.name} |{" "}
          <Size
            validationSize={validationSize}
            size={bytesToMegabytes(selectedFile.size)}
          >
            {bytesToMegabytes(selectedFile.size)} MB
          </Size>
        </Text>
      )}
    </Wrapper>
  );
};

export default Preview;
