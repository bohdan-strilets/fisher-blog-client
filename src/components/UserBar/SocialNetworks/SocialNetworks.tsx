import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { SocialNetworksProps } from "types/UserBarProps";
import { List, Item, Reference } from "./SocialNetworks.styled";

const SocialNetworks: React.FC<SocialNetworksProps> = ({
  facebook,
  twitter,
  pinterest,
  instagram,
  margin,
}) => {
  return (
    <List margin={margin}>
      {facebook && (
        <Item>
          <Reference href={facebook} rel="noopener noreferrer" target="_blank">
            <FaFacebookF size={20} />
          </Reference>
        </Item>
      )}
      {twitter && (
        <Item>
          <Reference href={twitter} rel="noopener noreferrer" target="_blank">
            <FaTwitter size={20} />
          </Reference>
        </Item>
      )}
      {pinterest && (
        <Item>
          <Reference href={pinterest} rel="noopener noreferrer" target="_blank">
            <FaPinterestP size={20} />
          </Reference>
        </Item>
      )}
      {instagram && (
        <Item>
          <Reference href={instagram} rel="noopener noreferrer" target="_blank">
            <FaInstagram size={20} />
          </Reference>
        </Item>
      )}
    </List>
  );
};

export default SocialNetworks;
