import { List, Item, Reference } from "./AuthNavigation.styled";

const AuthNavigation: React.FC<{}> = () => {
  return (
    <List>
      <Item>
        <Reference to="auth/registration">Registration</Reference>
      </Item>
      <Item>
        <Reference to="auth/login">Login</Reference>
      </Item>
    </List>
  );
};

export default AuthNavigation;
