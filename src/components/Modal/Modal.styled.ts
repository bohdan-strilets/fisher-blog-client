import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100vw;
  height: 100vh;

  background-color: var(--black-transparent-color);
  backdrop-filter: var(--blur-effect);
`;

export const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 700px;
  max-height: 700px;

  background-color: var(--white-color);
  border-radius: 5px;
  box-shadow: 2px 2px 10px -3px var(--black-transparent-color);
  overflow: hidden;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--small-indent);
  border-bottom: 1px solid var(--gray-color);
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Content = styled.div`
  padding: var(--medium-indent);
`;

export const Footer = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--gray-color);
`;
