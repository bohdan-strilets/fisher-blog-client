import styled from "@emotion/styled";
import { SizeProps } from "types/UploadImageProps";

export const Wrapper = styled.div`
  margin-bottom: var(--medium-indent);
`;

export const Image = styled.img`
  width: 220px;
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
`;

export const Size = styled.span<SizeProps>`
  color: ${({ size }) =>
    size > 5 ? "var(--red-color)" : "var(--green-color)"};
`;
