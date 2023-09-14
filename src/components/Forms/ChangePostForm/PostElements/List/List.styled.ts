import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
`;

export const Title = styled.p`
  margin-bottom: 5px;
`;

export const MarkedList = styled.ul`
  list-style: disc;
  margin-left: var(--large-indent);
`;

export const NumberedList = styled.ol`
  list-style: decimal;
  margin-left: var(--large-indent);
`;

export const Item = styled.li`
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;
