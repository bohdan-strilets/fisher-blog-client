import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: var(--small-indent);

  color: var(--white-color);
  background-color: var(--black-color);
`;

export const Copyright = styled.p`
  font-size: 14px;
  /* margin-bottom: var(--small-indent); */
`;

export const Studios = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  font-family: var(--second-font);

  border-radius: 3px;
  color: var(--black-color);
  background-color: var(--gray-color);
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 15px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);
`;
