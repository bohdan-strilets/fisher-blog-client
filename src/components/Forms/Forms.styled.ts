import styled from "@emotion/styled";

export const Container = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : "")};
  margin: 0 auto;
`;

export const Wrapper = styled.form`
  padding: var(--small-indent);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const ReferenceBtn = styled.button`
  text-decoration: underline;

  color: var(--accent-color);
  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  :hover,
  :focus {
    color: var(--gray-color);
  }
`;

export const Text = styled.p<{ margin?: string; color?: string }>`
  margin: ${({ margin }) => (margin ? margin : "")};
  color: ${({ color }) => (color ? color : "")};
`;
