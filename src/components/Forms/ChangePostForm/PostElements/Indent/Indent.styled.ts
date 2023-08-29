import styled from "@emotion/styled";
import { IndentProps } from "types/PostElementsProps";

export const Wrapper = styled.div<IndentProps>`
  width: 100%;
  height: ${({ size }) => {
    if (size === "large") {
      return "var(--large-indent)";
    } else if (size === "medium") {
      return "var(--medium-indent)";
    }
    return "var(--small-indent)";
  }};
  background-color: ${({ background }) => (background ? background : "")};
`;
