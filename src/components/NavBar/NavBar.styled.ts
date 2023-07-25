import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: var(--small-indent);

  box-shadow: 0px 2px 6px -2px var(--black-transparent-color);
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.p`
  font-weight: 800;
  font-size: 18px;
`;

export const ThemeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 var(--medium-indent);

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

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 40px;

  color: var(--white-color);
  background-color: var(--accent-color);
  border: none;
  outline: none;
  border-radius: 3px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 25px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);

  transition: background-color var(--hover-effect), color var(--hover-effect);
  cursor: pointer;

  :hover,
  :focus {
    background-color: var(--gray-color);
    color: var(--black-color);
  }
`;
