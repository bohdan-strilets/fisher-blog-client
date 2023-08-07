import styled from "@emotion/styled";

export const Item = styled.li`
  border-bottom: 1px solid var(--gray-color);

  :last-child {
    border-bottom: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 7px;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--gray-color);
  }
`;

export const Label = styled.span`
  margin-left: 10px;
`;
