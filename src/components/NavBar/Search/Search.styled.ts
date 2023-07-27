import styled from "@emotion/styled";

export const SearchWindow = styled.div`
  position: absolute;
  top: 80px;
  right: 0;

  width: 99%;
  height: auto;
  padding: var(--small-indent);

  color: var(--white-color);
  background-color: var(--black-color);
  box-shadow: 2px 2px 9px 0px var(--black-transparent-color);
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: var(--medium-indent);
`;

export const Result = styled.div``;
