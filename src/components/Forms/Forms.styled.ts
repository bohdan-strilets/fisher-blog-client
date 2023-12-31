import styled from "@emotion/styled";
import { ContainerProps, TextProps } from "types/props/FormProps";

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? width : "")};
  margin: 0 auto;
`;

export const Wrapper = styled.form`
  padding: var(--small-indent);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const ReferenceBtn = styled.button`
  text-decoration: underline;

  color: var(--accent-color);
  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;

export const Text = styled.p<TextProps>`
  margin: ${({ margin }) => (margin ? margin : "")};
  color: ${({ color }) => (color ? color : "")};
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  bottom: 8%;
  right: 10px;

  color: var(--accent-color);
  background-color: transparent;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--black-color);
  }
`;
