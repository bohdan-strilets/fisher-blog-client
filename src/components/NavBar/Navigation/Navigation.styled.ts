import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: var(--large-indent);

  :last-child {
    margin-right: 0;
  }
`;

export const Reference = styled(NavLink)`
  display: flex;
  align-items: center;

  outline: none;
  transition: color var(--hover-effect);

  &.active {
    color: var(--accent-color);
  }

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;

export const Text = styled.p`
  margin-left: 5px;
`;
