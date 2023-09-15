import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { StyledLinkProps } from "types/props/ReferenceProps";

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: underline;
  font-weight: 600;

  color: var(--accent-color);
  outline: none;

  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;
