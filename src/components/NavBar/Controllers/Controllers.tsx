import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { getIsLoggedIn } from "redux/user/userSelectors";
import operations from "redux/user/userOperations";
import { UserResponseType } from "types/types/UserResponseType";
import { List, Item, Button } from "./Controllers.styled";

const Controllers: React.FC<{}> = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const logout = async () => {
    const response = await dispatch(operations.logout());
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      navigate("/");
    }
  };

  return (
    <List>
      {isLoggedIn && (
        <Item>
          <Button type="button" onClick={logout}>
            <RiLogoutBoxLine size={20} />
          </Button>
        </Item>
      )}
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
