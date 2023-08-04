import { useAppSelector } from "hooks/useAppSelector";
import { getIsLoggedIn, getUser } from "redux/user/userSelectors";
import Logo from "../Interface/Logo";
import Navigation from "./Navigation";
import AuthNavigation from "./AuthNavigation";
import Search from "./Search";
import Controllers from "./Controllers/Controllers";
import { Wrapper, Group, UserName } from "./NavBar.styled";

const NavBar: React.FC<{}> = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const user = useAppSelector(getUser);

  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <Group>
        {isLoggedIn ? (
          <UserName>{`${user?.firstName} ${user?.lastName}`}</UserName>
        ) : (
          <AuthNavigation />
        )}
        <Controllers />
        <Search />
      </Group>
    </Wrapper>
  );
};

export default NavBar;
