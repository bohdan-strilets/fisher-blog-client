import styled from "@emotion/styled";

export const List = styled.ul`
  width: 65%;
`;

export const Item = styled.li`
  margin-bottom: var(--small-indent);
  padding-bottom: var(--small-indent);

  border-bottom: 1px solid var(--gray-color);

  :last-child {
    border-bottom: none;
  }
`;
