import styled from "@emotion/styled";

export const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--white-transparent-color);
  border-radius: 3px;
  border: none;
  outline: none;

  cursor: pointer;
  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--white-color);
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 45px;
  right: 15px;

  width: 270px;
  height: auto;

  background-color: #fff;
  box-shadow: var(--main-shadow);
  border-radius: 5px;

  overflow: hidden;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  border-bottom: 1px solid var(--gray-color);

  :last-child {
    border-bottom: none;
  }
`;

export const Controller = styled.button`
  width: 100%;
  height: 100%;
  padding: 5px;

  text-align: left;

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
  margin-left: var(--small-indent);
`;
