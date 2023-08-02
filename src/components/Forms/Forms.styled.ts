import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.form`
  padding: var(--small-indent);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const ReferenceBtn = styled.button`
  text-decoration: underline;

  color: var(--accent-color);
  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;

export const Reference = styled(Link)`
  text-decoration: underline;

  color: var(--accent-color);
  outline: none;

  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;

export const Text = styled.p`
  margin: var(--small-indent) 0 0 0;
`;
