import styled from "@emotion/styled";
import { HeaderProps } from "types/props/TitleProps";

export const H1 = styled.h1<HeaderProps>`
  display: inline-block;
  padding: 0 10px;
  margin: ${({ margin }) => (margin ? margin : "")};

  font-family: var(--second-font);
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : ``)};

  color: var(--white-color);
  background-color: ${({ background }) =>
    background === "black" ? "var(--black-color)" : "var(--accent-color)"};
`;

export const H2 = styled.h2<HeaderProps>`
  display: inline-block;
  padding: 0 10px;
  margin: ${({ margin }) => (margin ? margin : "")};

  font-family: var(--second-font);
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : ``)};

  color: var(--white-color);
  background-color: ${({ background }) =>
    background === "black" ? "var(--black-color)" : "var(--accent-color)"};
`;

export const H3 = styled.h3<HeaderProps>`
  display: inline-block;
  padding: 0 10px;
  margin: ${({ margin }) => (margin ? margin : "")};

  font-family: var(--second-font);
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : ``)};

  color: var(--white-color);
  background-color: ${({ background }) =>
    background === "black" ? "var(--black-color)" : "var(--accent-color)"};
`;

export const H4 = styled.h4<HeaderProps>`
  display: inline-block;
  padding: 0 10px;
  margin: ${({ margin }) => (margin ? margin : "")};

  font-family: var(--second-font);
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : ``)};

  color: var(--white-color);
  background-color: ${({ background }) =>
    background === "black" ? "var(--black-color)" : "var(--accent-color)"};
`;

export const H5 = styled.h5<HeaderProps>`
  display: inline-block;
  padding: 0 10px;
  margin: ${({ margin }) => (margin ? margin : "")};

  font-family: var(--second-font);
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : ``)};

  color: var(--white-color);
  background-color: ${({ background }) =>
    background === "black" ? "var(--black-color)" : "var(--accent-color)"};
`;
