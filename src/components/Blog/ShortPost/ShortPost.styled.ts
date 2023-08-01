import styled from "@emotion/styled";

export const Wrapper = styled.article`
  box-shadow: var(--main-shadow);
  border-radius: 10px;
  overflow: hidden;
`;

export const Data = styled.div`
  margin: var(--small-indent);
`;

export const Text = styled.p`
  margin-bottom: var(--small-indent);
`;

export const Statistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.p`
  font-size: 14px;
  margin-right: var(--small-indent);
`;

export const Category = styled.p`
  font-size: 14px;
  margin-left: var(--small-indent);
`;

export const ReadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100px;
  height: 30px;

  background-color: var(--black-color);
  color: var(--white-color);
  border: none;
  border-radius: 3px;
  outline: none;

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--gray-color);
    color: var(--black-color);
  }

  :hover&& .icon,
  :focus&& .icon {
    animation: arrowEffect 1s linear infinite;
  }
`;
