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
import AddParagraphForm from "../PostCreateElementsForm/AddParagraphForm";
import AddImageForm from "../PostCreateElementsForm/AddImageForm";
import AddVideoForm from "../PostCreateElementsForm/AddVideoForm";
import AddLineForm from "../PostCreateElementsForm/AddLineForm";
import AddIndentForm from "../PostCreateElementsForm/AddIndentForm";
import AddListForm from "../PostCreateElementsForm/AddListForm";
import AddLinkForm from "../PostCreateElementsForm/AddLinkForm";
import useModal from "hooks/useModal";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import { Wrapper, List, Item, Label } from "./PostBodyOptions.styled";

const PostBodyOptions: React.FC<PostBodyOptionsProps> = ({
  getPostElement,
}) => {
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
            <Item onClick={() => openModal(modalsName.ADD_PARAGRAPH)}>
              <FaParagraph color="var(--accent-color)" />
              <Label>Adding a paragraph</Label>
            </Item>
            <Item onClick={() => openModal(modalsName.ADD_IMAGE)}>
              <BsCardImage color="var(--accent-color)" />
              <Label>Insert an image</Label>
            </Item>
            <Item onClick={() => openModal(modalsName.ADD_VIDEO)}>
              <PiVideoFill color="var(--accent-color)" />
              <Label>Embed a video</Label>
            </Item>
            <Item onClick={() => openModal(modalsName.ADD_LINE)}>
              <HiOutlineMinus color="var(--accent-color)" />
              <Label>Insert a line</Label>
            </Item>
            <Item onClick={() => openModal(modalsName.ADD_INDENT)}>
              <FaArrowsAltV color="var(--accent-color)" />
              <Label>Apply an indent</Label>
            </Item>
            <Item onClick={() => openModal(modalsName.ADD_LIST)}>
              <GoTasklist color="var(--accent-color)" />
              <Label>Create a list</Label>
            </Item>
            <Item onClick={() => openModal(modalsName.ADD_LINK)}>
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
          <AddTitleForm getPostElement={getPostElement} />
        </Modal>
      )}
      {checkQueryParam(modalsName.ADD_PARAGRAPH) && (
        <Modal title="Add paragraph for post">
          <AddParagraphForm getPostElement={getPostElement} />
        </Modal>
      )}
      {checkQueryParam(modalsName.ADD_IMAGE) && (
        <Modal title="Add image for post">
          <AddImageForm getPostElement={getPostElement} />
        </Modal>
      )}
      {checkQueryParam(modalsName.ADD_VIDEO) && (
        <Modal title="Add video for post">
          <AddVideoForm getPostElement={getPostElement} />
        </Modal>
      )}
      {checkQueryParam(modalsName.ADD_LINE) && (
        <Modal title="Add line for post">
          <AddLineForm getPostElement={getPostElement} />
        </Modal>
      )}
      {checkQueryParam(modalsName.ADD_INDENT) && (
        <Modal title="Add indent for post">
          <AddIndentForm getPostElement={getPostElement} />
        </Modal>
      )}
      {checkQueryParam(modalsName.ADD_LIST) && (
        <Modal title="Add list for post">
          <AddListForm getPostElement={getPostElement} />
        </Modal>
      )}
      {checkQueryParam(modalsName.ADD_LINK) && (
        <Modal title="Add link for post">
          <AddLinkForm getPostElement={getPostElement} />
        </Modal>
      )}
    </>
  );
};

export default PostBodyOptions;
