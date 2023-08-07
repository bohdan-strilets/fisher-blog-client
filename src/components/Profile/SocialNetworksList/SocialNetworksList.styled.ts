import styled from "@emotion/styled";

export const Item = styled.li<{ socialName: string }>`
  display: flex;
  align-items: center;

  padding: 5px 10px;
  margin-bottom: 10px;

  border-radius: 5px;
  color: var(--white-color);

  background-color: ${({ socialName }) => {
    if (socialName === "facebook") {
      return "#1877F2";
    }
    if (socialName === "twitter") {
      return "#1DA1F2";
    }
    if (socialName === "pinterest") {
      return "#E60023";
    }
    if (socialName === "instagram") {
      return "#C13584";
    }
  }};

  :last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.span`
  margin-left: 10px;
`;
