import styled from "@emotion/styled";

export const Reference = styled.a`
  position: relative;

  display: inline-flex;
  align-items: center;

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

export const Label = styled.p`
  margin-left: 10px;
`;
