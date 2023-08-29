import styled from "@emotion/styled";
import { LineProps } from "types/PostElementsProps";

export const Border = styled.div<LineProps>`
  width: 100%;

  border-bottom-color: ${({ color }) => (color ? color : "var(--black-color)")};
  border-bottom-style: ${({ lineType }) => (lineType ? lineType : "solid")};
  border-bottom-width: ${({ size }) => {
    if (size === "large") {
      return "6px";
    }
    if (size === "medium") {
      return "3px";
    }
    return "1px";
  }};
`;
