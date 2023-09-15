import styled from "@emotion/styled";
import { WrapperProps } from "types/props/RadioButtonProps";

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : "")};

  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "")};
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;

  min-width: 40px;
  height: 20px;
  margin-right: var(--small-indent);
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--green-color);
    border-color: var(--green-color);
  }

  &:checked + span:before {
    transform: translateX(20px);
  }

  &:focus + span {
    outline: 3px solid rgba(19, 126, 219, 0.3);
  }
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  border: 1px solid var(--accent-color);
  border-radius: 10px;
  background-color: var(--accent-color);
  box-shadow: inset 0px 10px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);

  transition: background-color linear 0.2s, border-color linear 0.2s;
  cursor: pointer;

  &:before {
    content: "";

    position: absolute;
    left: 1px;
    bottom: 1px;

    height: 16px;
    width: 16px;

    border-radius: 50%;
    background-color: var(--white-color);
    transition: transform linear 0.2s;
  }
`;

export const Error = styled.p`
  margin-top: 10px;
  color: var(--red-color);
`;

export const Required = styled.span`
  color: var(--red-color);
`;
