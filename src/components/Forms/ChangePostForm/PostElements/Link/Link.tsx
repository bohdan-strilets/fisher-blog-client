import { BiLinkExternal } from "react-icons/bi";
import DeleteButton from "components/Interface/DeleteButton";
import { ElementLinkProps } from "types/props/ElementLinkProps";
import { Reference, Label } from "./Link.styled";

const Link: React.FC<ElementLinkProps> = ({
  content,
  url,
  id,
  deleteElement,
}) => {
  return (
    <Reference href={url} rel="noopener noreferrer" target="_blank">
      <DeleteButton deleteFoo={() => deleteElement(id)} />
      <BiLinkExternal />
      <Label>{content}</Label>
    </Reference>
  );
};

export default Link;
