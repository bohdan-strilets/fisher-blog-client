import styled from "@emotion/styled";
import { WrapperProps } from "types/BackgroundProps";

export const Wrapper = styled.div<WrapperProps>`
  position: relative;

  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  margin: ${({ margin }) => (margin ? margin : "")};

  background-color: var(--accent-color);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ url, gradient }) =>
    `${gradient ? `${gradient},` : ""} url(${url})`};

  border: ${({ border }) => (border ? border : "")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  box-shadow: ${({ shadow }) =>
    shadow ? " 2px 2px 10px -3px var(--black-transparent-color);" : ""};
`;
