import NavBar from "components/NavBar";
import UserBar from "components/UserBar";
import { LayoutProps } from "types/LayoutProps";
import { Wrapper, Body, Content } from "./Layout.styled";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <UserBar />
      <Body>
        <NavBar />
        <Content>{children}</Content>
      </Body>
    </Wrapper>
  );
};

export default Layout;
