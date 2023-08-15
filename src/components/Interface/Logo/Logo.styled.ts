import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { LogoProps, WrapperProps } from "types/LogoProps";

export const Wrapper = styled(Link)<WrapperProps>`
  display: inline-block;

  outline: none;
  transition: color var(--hover-effect);
  margin: ${({ margin }) => (margin ? margin : "")};

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;

export const Text = styled.p<LogoProps>`
  font-family: var(--second-font);
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `24px`)};
  color: ${({ mainColor }) => (mainColor ? mainColor : "")};
`;

export const Accent = styled.span`
  color: var(--accent-color);
`;
