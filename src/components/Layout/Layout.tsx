import { useAppSelector } from "hooks/useAppSelector";
import { getIsLoggedIn } from "redux/user/userSelectors";
import NavBar from "components/NavBar";
import UserBar from "components/UserBar";
import Footer from "components/Footer";
import { LayoutProps } from "types/props/LayoutProps";
import { Wrapper, Body, Content } from "./Layout.styled";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && <UserBar />}
      <Body>
        <NavBar />
        <Content>{children}</Content>
        <Footer />
      </Body>
    </Wrapper>
  );
};

export default Layout;
