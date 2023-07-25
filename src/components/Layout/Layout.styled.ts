import styled from "@emotion/styled";
import screenWidth from "helpers/screenWidth";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${screenWidth.mobile};

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: ${screenWidth.tablet};
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    width: ${screenWidth.desktop};
  }
`;

export const Body = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  padding: var(--medium-indent) var(--small-indent);
`;
