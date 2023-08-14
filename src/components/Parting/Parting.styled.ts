import styled from "@emotion/styled";

export const Image = styled.img`
  box-shadow: var(--main-shadow);
  border-radius: 5px;
  margin-bottom: var(--medium-indent);
`;

export const Text = styled.p<{ margin?: string }>`
  line-height: 2;
  margin: ${({ margin }) => (margin ? margin : "")};
`;
