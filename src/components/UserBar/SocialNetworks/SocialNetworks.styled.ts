import styled from "@emotion/styled";
import { ListProps } from "types/props/SocialNetworksProps";

export const List = styled.ul<ListProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  outline: none;
  border-radius: 3px;
  background-color: var(--accent-color);
  color: var(--white-color);
  box-shadow: inset 0px 20px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);

  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--gray-color);
    color: var(--black-color);
  }
`;

export const Reference = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
