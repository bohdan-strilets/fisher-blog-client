import { useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import Logo from "../Interface/Logo";
import Navigation from "./Navigation";
import AuthNavigation from "./AuthNavigation";
import Search from "./Search";
import { Wrapper, Group, UserName, ThemeBtn } from "./NavBar.styled";

const NavBar: React.FC<{}> = () => {
  const [isLoggeden, setIsLoggeden] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <Group>
        {isLoggeden ? <UserName>User name</UserName> : <AuthNavigation />}
        <ThemeBtn type="button" onClick={toggleTheme}>
          {theme === "light" ? (
            <IoIosSunny size={20} />
          ) : (
            <IoIosMoon size={20} />
          )}
        </ThemeBtn>
        <Search />
      </Group>
    </Wrapper>
  );
};

export default NavBar;
