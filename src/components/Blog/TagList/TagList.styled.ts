import styled from "@emotion/styled";
import { ListProps, ValueProps } from "types/TagListProps";

export const List = styled.ul<ListProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Item = styled.li`
  margin: 0 5px 5px 0;

  :last-child {
    margin: 0 0 5px 0;
  }
`;

export const Value = styled.p<ValueProps>`
  font-size: 14px;

  background-color: ${({ background }) =>
    background ? background : "var(--gray-color)"};
  color: ${({ color }) => (color ? color : "var(--black-color)")};
  border-radius: 3px;

  padding: 0 5px;
`;
