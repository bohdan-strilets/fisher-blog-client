import { List, Item, Reference } from "./AuthNavigation.styled";

const AuthNavigation: React.FC<{}> = () => {
  return (
    <List>
      <Item>
        <Reference to="/">Registration</Reference>
      </Item>
      <Item>
        <Reference to="/">Login</Reference>
      </Item>
    </List>
  );
};

export default AuthNavigation;
