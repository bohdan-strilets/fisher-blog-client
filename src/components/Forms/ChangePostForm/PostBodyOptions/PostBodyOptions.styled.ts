import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
`;

export const List = styled.ul`
  position: absolute;
  top: 115px;
  left: 0;
  z-index: 1;

  width: 100%;
  margin-bottom: var(--small-indent);

  background-color: var(--white-color);
  box-shadow: var(--main-shadow);
  border: 1px solid var(--gray-color);
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  border-bottom: 1px solid var(--gray-color);

  :last-child {
    border-bottom: none;
  }

  cursor: pointer;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--gray-color);
  }
`;

export const Label = styled.p`
  margin-left: var(--medium-indent);
`;
