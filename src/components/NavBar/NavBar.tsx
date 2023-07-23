import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import Logo from "../Interface/Logo";
import Navigation from "./Navigation";
import AuthNavigation from "./AuthNavigation";
import { Wrapper, Group, UserName, ThemeBtn, SearchBtn } from "./NavBar.styled";

const NavBar: React.FC<{}> = () => {
  const [isLoggeden, setIsLoggeden] = useState(true);
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
        <SearchBtn type="button">
          <BiSearchAlt size={22} />
        </SearchBtn>
      </Group>
    </Wrapper>
  );
};

export default NavBar;
