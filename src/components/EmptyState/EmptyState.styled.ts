import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 550px;
  padding: var(--small-indent);

  box-shadow: var(--main-shadow);
  border: 1px solid var(--gray-color);
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
`;

export const Text = styled.p`
  line-height: 2;
  font-size: 18px;
`;
