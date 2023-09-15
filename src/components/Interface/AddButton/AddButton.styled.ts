import styled from "@emotion/styled";
import { ButtonProps } from "types/props/AddButtonProps";

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  margin: ${({ margin }) => (margin ? margin : "")};

  background-color: var(--accent-color);
  color: var(--white-color);
  border: none;
  outline: none;
  border-radius: 5px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 55px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--gray-color);
    color: var(--black-color);
  }
`;
