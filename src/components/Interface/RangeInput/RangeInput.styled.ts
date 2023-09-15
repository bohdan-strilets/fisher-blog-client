import styled from "@emotion/styled";
import { WrapperProps, ValueProps } from "types/props/RangeInputProps";

export const Wrapper = styled.div<WrapperProps>`
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Label = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Required = styled.span`
  color: var(--red-color);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Value = styled.p<ValueProps>`
  margin: ${({ margin }) => (margin ? margin : "")};
  color: var(--accent-color);
  font-weight: 700;
`;

export const Result = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  height: 18px;
  appearance: none;

  background-color: rgba(20, 126, 219, 0.2);
  border-radius: 3px;
  border: 1px solid var(--accent-color);

  overflow: hidden;
  outline: none;

  ::-webkit-slider-thumb {
    height: 18px;
    width: 26px;

    background-color: var(--black-transparent-color);
    border-radius: 3px;
    box-shadow: inset 0px 8px 0px rgba(255, 255, 255, 0.1),
      -300px 0 0 285px var(--accent-color);

    appearance: none;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    height: 18px;
    width: 26px;

    background-color: var(--white-color);
    border-radius: 3px;
    box-shadow: inset 0px 8px 0px rgba(255, 255, 255, 0.1),
      -300px 0 0 285px var(--accent-color);

    appearance: none;
    cursor: pointer;
  }
`;

export const Error = styled.p`
  margin-top: 10px;
  color: var(--red-color);
`;
