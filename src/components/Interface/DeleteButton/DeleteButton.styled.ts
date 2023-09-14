import styled from "@emotion/styled";

export const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  background-color: transparent;
  font-size: 20px;

  transition: color var(--hover-effect);
  cursor: pointer;
  outline: none;

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;
