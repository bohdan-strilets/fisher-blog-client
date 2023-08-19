import bytesToMegabytes from "helpers/bytesToMegabytes";
import { PreviewProps } from "types/UploadImageProps";
import { Wrapper, Image, Text, Size } from "./Preview.styled";

const Preview: React.FC<PreviewProps> = ({
  previewSource,
  fileName,
  selectedFile,
}) => {
  return (
    <Wrapper>
      <Image src={previewSource as string} alt={`User-selected ${fileName}`} />
      {selectedFile && selectedFile instanceof File && (
        <Text>
          {selectedFile.name} |{" "}
          <Size size={bytesToMegabytes(selectedFile.size)}>
            {bytesToMegabytes(selectedFile.size)} MB
          </Size>
        </Text>
      )}
    </Wrapper>
  );
};

export default Preview;
