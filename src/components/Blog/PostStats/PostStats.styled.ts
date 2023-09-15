import styled from "@emotion/styled";
import { ListProps } from "types/props/PostStatsProps";

export const List = styled.ul<ListProps>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: var(--small-indent);

  :last-child {
    margin-right: 0;
  }
`;

export const Value = styled.span`
  margin-left: 5px;
  font-size: 12px;
`;
