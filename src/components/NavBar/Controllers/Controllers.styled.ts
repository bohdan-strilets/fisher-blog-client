import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 var(--medium-indent);
`;

export const Item = styled.li`
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;
