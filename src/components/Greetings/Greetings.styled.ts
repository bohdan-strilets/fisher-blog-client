import styled from "@emotion/styled";

export const Image = styled.img`
  box-shadow: var(--main-shadow);
  border-radius: 5px;
`;

export const Text = styled.p<{ margin?: string }>`
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Reference = styled.a`
  font-weight: 600;
  text-decoration: underline;

  color: var(--accent-color);
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;
