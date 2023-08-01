import { RiMore2Fill } from "react-icons/ri";
import { MdModeEditOutline, MdDelete, MdShare } from "react-icons/md";
import { FaInfo, FaStar } from "react-icons/fa";
import useClickOutside from "hooks/useClickOutside";
import { Button, List, Item, Controller, Label } from "./MoreInfo.styled";

const MoreInfo: React.FC<{}> = () => {
  const { divRef, isOpen, toggle } = useClickOutside();

  return (
    <div ref={divRef}>
      <Button type="button" onClick={toggle}>
        <RiMore2Fill size={20} />
      </Button>

      {isOpen && (
        <List>
          <Item>
            <Controller type="button">
              <MdModeEditOutline size={18} color="var(--accent-color)" />
              <Label>Edit post</Label>
            </Controller>
          </Item>
          <Item>
            <Controller type="button">
              <MdDelete size={18} color="var(--accent-color)" />
              <Label>Delete post</Label>
            </Controller>
          </Item>
          <Item>
            <Controller type="button">
              <MdShare size={18} color="var(--accent-color)" />
              <Label>Share post</Label>
            </Controller>
          </Item>
          <Item>
            <Controller type="button">
              <FaInfo size={16} color="var(--accent-color)" />
              <Label>More information</Label>
            </Controller>
          </Item>
          <Item>
            <Controller type="button">
              <FaStar size={16} color="var(--accent-color)" />
              <Label>Save to favorites</Label>
            </Controller>
          </Item>
        </List>
      )}
    </div>
  );
};

export default MoreInfo;
