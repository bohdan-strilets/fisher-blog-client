import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  padding: var(--small-indent);

  background-color: rgba(20, 126, 219, 0.1);
  border-radius: 5px;
  border: 1px solid var(--gray-color);
  box-shadow: var(--main-shadow);
`;

export const IconWrapper = styled.div`
  min-width: 130px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-style: italic;
`;
