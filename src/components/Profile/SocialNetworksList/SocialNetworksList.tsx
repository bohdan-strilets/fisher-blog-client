import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { SocialNetworksListProps } from "types/props/SocialNetworksListProps";
import { Item, Label } from "./SocialNetworksList.styled";

const SocialNetworksList: React.FC<SocialNetworksListProps> = ({
  facebook,
  twitter,
  pinterest,
  instagram,
}) => {
  return (
    <ul>
      {facebook && (
        <Item socialName="facebook">
          <FaFacebookF />
          <Label>{facebook}</Label>
        </Item>
      )}
      {twitter && (
        <Item socialName="twitter">
          <FaTwitter />
          <Label>{twitter}</Label>
        </Item>
      )}
      {pinterest && (
        <Item socialName="pinterest">
          <FaPinterestP />
          <Label>{pinterest}</Label>
        </Item>
      )}
      {instagram && (
        <Item socialName="instagram">
          <FaInstagram />
          <Label>{instagram}</Label>
        </Item>
      )}
    </ul>
  );
};

export default SocialNetworksList;
