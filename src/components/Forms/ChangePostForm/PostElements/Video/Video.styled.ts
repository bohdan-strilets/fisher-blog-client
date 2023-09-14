import styled from "@emotion/styled";
import { WrapperProps } from "types/props/ElementVideoProps";

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ size }) => {
    if (size === "small") {
      return "50%";
    } else if (size === "medium") {
      return "75%";
    } else {
      return "100%";
    }
  }};
  height: ${({ size }) => {
    if (size === "small") {
      return "50%";
    } else if (size === "medium") {
      return "75%";
    } else {
      return "100%";
    }
  }};
  margin: 0 auto;

  border-radius: 5px;
  box-shadow: var(--main-shadow);
`;

export const Media = styled.video`
  width: 100%;
  height: auto;

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  outline: none;
`;

export const Label = styled.p`
  font-style: italic;
  color: #cccccc;
  text-align: center;

  padding: 10px 0 var(--small-indent) 0;
`;
