import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 300px;
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
  color: var(--accent-color);
`;

export const Description = styled.p`
  line-height: 2;
  text-align: center;

  padding: var(--small-indent) 0;

  color: var(--white-color);
  border-top: 1px rgba(255, 255, 255, 1);
  border-bottom: 1px rgba(255, 255, 255, 1);
`;
