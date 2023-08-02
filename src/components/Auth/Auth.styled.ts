import styled from "@emotion/styled";

export const FirstList = styled.ol`
  list-style: decimal;
  margin-bottom: var(--small-indent);
`;

export const SecondList = styled.ol`
  list-style: lower-alpha;
  margin-left: var(--medium-indent);
`;

export const Title = styled.p`
  font-weight: 700;
`;

export const Accent = styled.span`
  color: var(--accent-color);
`;

export const Paragraph = styled.p<{ margin?: string }>`
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Date = styled.p`
  margin-bottom: var(--small-indent);
  color: var(--accent-color);
`;
