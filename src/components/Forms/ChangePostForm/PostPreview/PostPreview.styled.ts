import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: var(--small-indent);
  margin-bottom: var(--small-indent);

  box-shadow: var(--main-shadow);
  border: 1px solid var(--gray-color);
  border-radius: 5px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 15px;
  margin-bottom: 15px;

  border-bottom: 1px solid var(--gray-color);
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
`;
