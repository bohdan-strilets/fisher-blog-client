import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li<{ background?: string }>`
  margin: 0 10px 10px 0;
  padding: 0 10px;

  border-radius: 3px;
  color: var(--white-color);
  background-color: ${({ background }) =>
    background ? background : "var(--accent-color)"};

  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 15px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);

  :last-child {
    margin-right: none;
  }
`;
