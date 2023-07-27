import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 300px;
  height: 100vh;

  box-shadow: 3px 0px 6px -2px var(--black-transparent-color);
  background-color: var(--black-color);
`;

export const Name = styled.p`
  font-family: var(--second-font);
  font-size: 22px;

  text-align: center;
  color: var(--white-color);
`;

export const Profession = styled.p`
  font-weight: 600;
  font-size: 18px;

  text-align: center;
  color: var(--gray-color);
`;

export const Description = styled.p`
  line-height: 2;
  text-align: center;

  padding: var(--small-indent) 5px;

  color: var(--white-color);
  border-top: 1px rgba(255, 255, 255, 1);
  border-bottom: 1px rgba(255, 255, 255, 1);
`;
