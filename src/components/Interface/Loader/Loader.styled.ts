import styled from "@emotion/styled";
import { RiLoaderFill } from "react-icons/ri";
import { WrapperProps } from "types/LoaderProps";

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Icon = styled(RiLoaderFill)`
  color: var(--accent-color);
  animation: loaderEffect 1000ms linear infinite;
`;
