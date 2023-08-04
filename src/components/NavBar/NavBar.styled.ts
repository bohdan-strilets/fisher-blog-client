import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: var(--small-indent);

  border-bottom: 1px solid var(--gray-color);
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
