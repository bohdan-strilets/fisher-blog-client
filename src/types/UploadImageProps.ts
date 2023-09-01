export type UploadImageProps = {
  fileName: string;
  text: string;
  operation?: any;
  buttonLabel: string;
  uploadFoo?: any;
};

export type PreviewProps = {
  previewSource: string | ArrayBuffer;
  fileName: string;
  selectedFile: File | Blob | null;
};

export type SizeProps = {
  size: number;
};
