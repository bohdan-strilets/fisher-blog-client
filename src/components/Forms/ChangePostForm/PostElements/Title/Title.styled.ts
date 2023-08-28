import styled from "@emotion/styled";
import { TextProps } from "types/PostElementsProps";

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "22px")};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};

  color: ${({ color }) => (color ? color : "")};
  background-color: ${({ background }) => (background ? background : "")};

  padding: ${({ background }) => (background ? "0 10px" : "")};
`;
