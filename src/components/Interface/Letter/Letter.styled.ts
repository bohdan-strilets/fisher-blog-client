import styled from "@emotion/styled";
import { TextProps } from "types/props/LetterProps";

export const Text = styled.p<TextProps>`
  font-weight: 700;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
`;
