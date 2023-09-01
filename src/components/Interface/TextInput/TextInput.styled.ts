import styled from "@emotion/styled";
import { WrapperProps, InputProps } from "types/TextInputProps";

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

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : "")};
  padding: ${({ icon }) => (icon ? "0 10px 0 35px" : "0 10px")};

  outline: none;
  border: 1px solid var(--gray-color);
  border-radius: 3px;
  opacity: ${({ readOnly }) => (readOnly ? "0.3" : "")};

  :focus {
    border-color: var(--accent-color);
  }

  ::placeholder {
    color: var(--gray-color);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);

  width: 20px;
  height: 20px;

  color: var(--accent-color);
`;

export const Error = styled.p`
  margin-top: 10px;
  color: var(--red-color);
`;
