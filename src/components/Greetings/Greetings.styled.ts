import styled from "@emotion/styled";

export const Image = styled.img`
  box-shadow: var(--main-shadow);
  border-radius: 5px;
`;

export const Text = styled.p<{ margin?: string }>`
  margin: ${({ margin }) => (margin ? margin : "")};
`;
