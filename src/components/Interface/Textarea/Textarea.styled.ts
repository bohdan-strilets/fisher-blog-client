import styled from "@emotion/styled";
import { WrapperProps, InputProps } from "types/props/TextareaProps";

export const Wrapper = styled.label<WrapperProps>`
  position: relative;
  display: block;

  width: ${({ width }) => (width ? width : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Label = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Required = styled.span`
  color: var(--red-color);
`;

export const Input = styled.textarea<InputProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : "")};
  padding: 10px;

  line-height: 2;

  outline: none;
  border: 1px solid var(--gray-color);
  border-radius: 3px;
  resize: none;

  :focus {
    border-color: var(--accent-color);
  }

  ::placeholder {
    color: var(--gray-color);
  }
`;

export const Error = styled.p`
  margin-top: 10px;
  color: var(--red-color);
`;
