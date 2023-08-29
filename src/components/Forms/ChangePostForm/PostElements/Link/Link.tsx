import { BiLinkExternal } from "react-icons/bi";
import { LinkProps } from "types/PostElementsProps";
import { Reference, Label } from "./Link.styled";

const Link: React.FC<LinkProps> = ({ content, url }) => {
  return (
    <>
      <Reference href={url} rel="noopener noreferrer" target="_blank">
        <BiLinkExternal />
        <Label>{content}</Label>
      </Reference>
    </>
  );
};

export default Link;
