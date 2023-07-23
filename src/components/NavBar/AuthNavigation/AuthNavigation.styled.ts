import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: var(--medium-indent);

  :last-child {
    margin-right: 0;
  }
`;

export const Reference = styled(NavLink)`
  display: flex;
  align-items: center;

  outline: none;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;
