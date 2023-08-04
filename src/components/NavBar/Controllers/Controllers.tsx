import { useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { List, Item, Button } from "./Controllers.styled";

const Controllers: React.FC<{}> = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <List>
      <Item>
        <Button type="button">
          <RiLogoutBoxLine size={20} />
        </Button>
      </Item>
      <Item>
        <Button type="button" onClick={toggleTheme}>
          {theme === "light" ? (
            <IoIosSunny size={20} />
          ) : (
            <IoIosMoon size={20} />
          )}
        </Button>
      </Item>
    </List>
  );
};

export default Controllers;
