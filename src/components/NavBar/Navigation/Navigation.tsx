import { FaHome, FaBookOpen } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { FaUserGear } from "react-icons/fa6";
import { List, Item, Reference, Text } from "./Navigation.styled";

const Navigation: React.FC<{}> = () => {
  return (
    <List>
      <Item>
        <Reference to="/">
          <FaHome size={20} />
          <Text>Home</Text>
        </Reference>
      </Item>
      <Item>
        <Reference to="/blog">
          <FaBookOpen size={18} />
          <Text>Blog</Text>
        </Reference>
      </Item>
      <Item>
        <Reference to="/contacts">
          <AiFillContacts size={20} />
          <Text>Contacts</Text>
        </Reference>
      </Item>
      <Item>
        <Reference to="/profile">
          <FaUserGear size={20} />
          <Text>Profile</Text>
        </Reference>
      </Item>
    </List>
  );
};

export default Navigation;
