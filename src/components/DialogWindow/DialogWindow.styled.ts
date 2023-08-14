import styled from "@emotion/styled";
import { ButtonProps } from "types/DialogWindowProps";

export const Message = styled.p`
  margin-bottom: var(--small-indent);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Item = styled.li`
  margin-right: var(--medium-indent);

  :last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 230px;
  height: 40px;

  font-weight: 700;

  color: var(--white-color);
  background-color: ${({ background }) => (background ? background : "")};
  border: none;
  outline: none;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 20px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);

  cursor: pointer;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--black-color);
  }
`;
