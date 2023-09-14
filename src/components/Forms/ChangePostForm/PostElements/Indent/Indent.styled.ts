import styled from "@emotion/styled";
import { WrapperProps } from "types/props/ElementIndentProps";

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
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
