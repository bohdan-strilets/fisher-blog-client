import styled from "@emotion/styled";
import { StatusProps } from "types/props/HeaderProps";

export const Wrapper = styled.div`
  margin-bottom: var(--medium-indent);
  padding-bottom: var(--small-indent);
  border-bottom: 1px solid var(--gray-color);
`;

export const Title = styled.p`
  font-weight: 900;
  font-size: 30px;
  font-family: var(--second-font);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Id = styled.p`
  font-size: 14px;
  color: var(--gray-color);
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Status = styled.div<StatusProps>`
  width: 15px;
  height: 15px;
  margin-left: 10px;

  border-radius: 50%;
  box-shadow: inset 0px 5 px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);
  background-color: ${({ isActivated }) =>
    isActivated ? "var(--green-color)" : "var(--red-color)"};
`;
