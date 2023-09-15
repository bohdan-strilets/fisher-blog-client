import styled from "@emotion/styled";
import { WrapperProps, LabelProps } from "types/props/ButtonProps";

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? `${width}px` : "")};
  height: ${({ height }) => (height ? `${height}px` : "")};
  margin: ${({ margin }) => (margin ? margin : "")};

  text-transform: capitalize;

  color: var(--white-color);
  background-color: ${({ disabled }) =>
    disabled ? "var(--gray-color)" : "var(--accent-color)"};
  border: none;
  outline: none;
  border-radius: 3px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 20px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "")};

  :hover,
  :focus {
    background-color: var(--gray-color);
    color: ${({ disabled }) => (disabled ? "" : "var(--black-color);")};
  }
`;

export const Label = styled.span<LabelProps>`
  margin-left: ${({ icon }) => (icon ? "10px" : "")};
`;
