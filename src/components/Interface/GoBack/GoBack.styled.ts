import styled from "@emotion/styled";
import { ButtonProps } from "types/GoBackProps";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : "")};

  background-color: transparent;
  border: none;
  outline: none;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;

export const Label = styled.span`
  margin-left: 5px;
`;
