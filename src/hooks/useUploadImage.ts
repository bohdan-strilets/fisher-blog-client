import { useState, useRef } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { ResponseType } from "types/UserState";
import { UserType } from "types/UserType";

const useUploadImage = (
  onClose: () => void,
  fileName: string,
  operation: any
) => {
  const dispatch = useAppDispatch();
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState<null | File | Blob>(null);
  const [previewSource, setPreviewSource] = useState<
    string | ArrayBuffer | null
  >("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedFile) {
      previewFile(selectedFile);
      setIsLoading(true);
      const payload = new FormData();
      payload.append(fileName, selectedFile);

      if (!payload) return;
      const response = await dispatch(operation(payload));
      const data = response.payload as ResponseType<UserType>;

      if (data && data.success) {
        onClose();
        setIsLoading(false);
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    hiddenFileInput?.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return {
    handleSubmit,
    previewSource,
    handleFileInputChange,
    fileInputState,
    isLoading,
    hiddenFileInput,
    handleClick,
    selectedFile,
  };
};

export default useUploadImage;
