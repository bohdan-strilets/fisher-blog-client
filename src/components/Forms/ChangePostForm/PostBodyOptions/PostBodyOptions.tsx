import { useState } from "react";
import { FaParagraph, FaArrowsAltV } from "react-icons/fa";
import { MdOutlineTitle, MdAddLink } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import { HiOutlineMinus } from "react-icons/hi";
import { GoTasklist } from "react-icons/go";
import { BiSolidCommentDetail } from "react-icons/bi";
import AddButton from "components/Interface/AddButton";
import Modal from "components/Modal";
import AddTitleForm from "../PostCreateElementsForm/AddTitleForm";
import useModal from "hooks/useModal";
import { Wrapper, List, Item, Label } from "./PostBodyOptions.styled";

const PostBodyOptions: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { modalsName, checkQueryParam, openModal } = useModal();

  const openList = () => setIsOpen((state) => !state);

  return (
    <>
      <Wrapper>
        <AddButton
          width="100%"
          height={100}
          margin="0 0 var(--small-indent) 0"
          handleClick={openList}
        />
        {isOpen && (
          <List>
            <Item onClick={() => openModal(modalsName.ADD_TITLE)}>
              <MdOutlineTitle color="var(--accent-color)" />
              <Label>Add a title</Label>
            </Item>
            <Item>
              <FaParagraph color="var(--accent-color)" />
              <Label>Adding a paragraph</Label>
            </Item>
            <Item>
              <BsCardImage color="var(--accent-color)" />
              <Label>Insert an image</Label>
            </Item>
            <Item>
              <PiVideoFill color="var(--accent-color)" />
              <Label>Embed a video</Label>
            </Item>
            <Item>
              <HiOutlineMinus color="var(--accent-color)" />
              <Label>Insert a line</Label>
            </Item>
            <Item>
              <FaArrowsAltV color="var(--accent-color)" />
              <Label>Apply an indent</Label>
            </Item>
            <Item>
              <GoTasklist color="var(--accent-color)" />
              <Label>Create a list</Label>
            </Item>
            <Item>
              <MdAddLink color="var(--accent-color)" />
              <Label>Add a link</Label>
            </Item>
            <Item>
              <BiSolidCommentDetail color="var(--accent-color)" />
              <Label>Include a comment</Label>
            </Item>
          </List>
        )}
      </Wrapper>

      {checkQueryParam(modalsName.ADD_TITLE) && (
        <Modal title="Add title for post">
          <AddTitleForm />
        </Modal>
      )}
    </>
  );
};

export default PostBodyOptions;
