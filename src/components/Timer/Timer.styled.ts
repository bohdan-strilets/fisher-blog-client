import styled from "@emotion/styled";
import { WrapperProps } from "types/props/TimerProps";

export const Wrapper = styled.div<WrapperProps>`
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Seconds = styled.p`
  font-weight: 600;
  text-align: center;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 14px;
  color: var(--red-color);
`;
