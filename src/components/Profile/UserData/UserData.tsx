import { FaUser, FaLock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdCake, MdOutlineWork } from "react-icons/md";
import { GiFishingHook } from "react-icons/gi";
import { TbGenderEpicene } from "react-icons/tb";
import { BsFileTextFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import HobbyList from "../HobbyList";
import SocialNetworksList from "../SocialNetworksList";
import DataItem from "../DataItem";
import { UserDataProps } from "types/ProfileProps";
import { hobbyOptions } from "helpers/dropdownOptions";
import findLabelsByValues from "helpers/findLabelsByValues";
import formatDateTime from "helpers/formatDateTime";
import { List, Item } from "./UserData.styled";

const UserData: React.FC<UserDataProps> = ({
  firstName,
  lastName,
  email,
  dateBirth,
  gender,
  hobby,
  profession,
  phoneNumber,
  location,
  description,
  socialNetworks,
}) => {
  return (
    <List>
      <Item>
        <DataItem
          icon={<FaUser color="var(--accent-color)" />}
          label="First name"
          value={firstName}
        />
      </Item>
      <Item>
        <DataItem
          icon={<FaUser color="var(--accent-color)" />}
          label="Last name"
          value={lastName}
        />
      </Item>
      <Item>
        <DataItem
          icon={<MdEmail color="var(--accent-color)" size={18} />}
          label="Email address"
          value={email ? email : "-"}
        />
      </Item>
      <Item>
        <DataItem
          icon={<FaLock color="var(--accent-color)" />}
          label="Password"
          value="**********"
        />
      </Item>
      <Item>
        <DataItem
          icon={<MdCake color="var(--accent-color)" size={18} />}
          label="Date birth"
          value={dateBirth ? formatDateTime(dateBirth.toString()) : "-"}
        />
      </Item>
      <Item>
        <DataItem
          icon={<TbGenderEpicene color="var(--accent-color)" size={22} />}
          label="Gender"
          value={gender ? gender : "-"}
        />
      </Item>
      {hobby && hobby.length > 0 && (
        <Item>
          <DataItem
            icon={<GiFishingHook color="var(--accent-color)" />}
            label="Hobby"
            value={
              <HobbyList hobby={findLabelsByValues(hobby, hobbyOptions)} />
            }
          />
        </Item>
      )}
      <Item>
        <DataItem
          icon={<MdOutlineWork color="var(--accent-color)" />}
          label="Profession"
          value={profession ? profession : "-"}
        />
      </Item>
      <Item>
        <DataItem
          icon={<FaPhone color="var(--accent-color)" size={14} />}
          label="Phone number"
          value={phoneNumber ? phoneNumber : "-"}
        />
      </Item>
      <Item>
        <DataItem
          icon={<FaLocationDot color="var(--accent-color)" />}
          label="Location"
          value={
            location
              ? `${location.postcode} ${location.city} ${location.country}`
              : "-"
          }
        />
      </Item>
      <Item>
        <DataItem
          icon={<BsFileTextFill color="var(--accent-color)" />}
          label="Description"
          value={description ? description : "-"}
        />
      </Item>
      <Item>
        <DataItem
          icon={<IoShareSocialSharp color="var(--accent-color)" />}
          label="Social networks"
          value={
            <SocialNetworksList
              facebook={socialNetworks.facebook}
              twitter={socialNetworks.twitter}
              pinterest={socialNetworks.pinterest}
              instagram={socialNetworks.instagram}
            />
          }
        />
      </Item>
    </List>
  );
};

export default UserData;
