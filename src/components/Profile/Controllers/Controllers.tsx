import { MdModeEditOutline, MdDelete } from "react-icons/md";
import useModal from "hooks/useModal";
import { Item, Button, Label } from "./Controllers.styled";

const Controllers: React.FC<{}> = () => {
  const { openModal, modalsName } = useModal();

  return (
    <ul>
      <Item>
        <Button
          type="button"
          onClick={() => openModal(modalsName.CHANGE_PROFILE)}
        >
          <MdModeEditOutline color="var(--accent-color)" />
          <Label>Change profile</Label>
        </Button>
      </Item>
      <Item>
        <Button
          type="button"
          onClick={() => openModal(modalsName.CHANGE_EMAIL)}
        >
          <MdModeEditOutline color="var(--accent-color)" />
          <Label>Change email address</Label>
        </Button>
      </Item>
      <Item>
        <Button type="button">
          <MdModeEditOutline color="var(--accent-color)" />
          <Label>Change password</Label>
        </Button>
      </Item>
      <Item>
        <Button type="button">
          <MdDelete color="var(--accent-color)" />
          <Label>Delete account</Label>
        </Button>
      </Item>
    </ul>
  );
};

export default Controllers;
