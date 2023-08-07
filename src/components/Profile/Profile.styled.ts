import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SettingBar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;

  margin-bottom: var(--medium-indent);

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  :hover .hover-effect {
    opacity: 1;
  }
`;

export const ButtonHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 180px;

  border-radius: inherit;
  background-color: var(--white-transparent-color);
  opacity: 0;
  transition: opacity var(--hover-effect);
`;
