import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  outline: none;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;

export const Text = styled.p`
  font-family: var(--second-font);
  font-size: 24px;
`;

export const Accent = styled.span`
  color: var(--accent-color);
`;
