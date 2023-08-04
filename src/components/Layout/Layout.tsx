import { useAppSelector } from "hooks/useAppSelector";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import NavBar from "components/NavBar";
import UserBar from "components/UserBar";
import { LayoutProps } from "types/LayoutProps";
import { Wrapper, Body, Content } from "./Layout.styled";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && <UserBar />}
      <Body>
        <NavBar />
        <Content>{children}</Content>
      </Body>
    </Wrapper>
  );
};

export default Layout;
