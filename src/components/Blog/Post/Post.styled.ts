import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: var(--small-indent);
`;

export const Title = styled.h1`
  color: var(--white-color);
  font-family: var(--second-font);

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const Category = styled.p`
  color: var(--white-color);
  font-size: 18px;
`;

export const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: var(--small-indent) 0;
`;
