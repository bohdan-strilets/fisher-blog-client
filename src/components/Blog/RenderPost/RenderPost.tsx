import Title from "components/Forms/ChangePostForm/PostElements/Title";
import Paragraph from "components/Forms/ChangePostForm/PostElements/Paragraph";
import Image from "components/Forms/ChangePostForm/PostElements/Image";
import Video from "components/Forms/ChangePostForm/PostElements/Video";
import Line from "components/Forms/ChangePostForm/PostElements/Line";
import Indent from "components/Forms/ChangePostForm/PostElements/Indent";
import Link from "components/Forms/ChangePostForm/PostElements/Link";
import Comment from "components/Forms/ChangePostForm/PostElements/Comment";
import List from "components/Forms/ChangePostForm/PostElements/List";
import { PostBodyType, PostTypes } from "types/types/PostBodyType";

export type RenderPostProps = {
  element: PostBodyType;
  deleteElement: (elementId: string) => void;
};

const RenderPost: React.FC<RenderPostProps> = ({ element, deleteElement }) => {
  const renderPost = (element: PostBodyType) => {
    switch (element.type) {
      case PostTypes.TITLE:
        return (
          <Title
            id={element.id}
            content={element.content}
            background={element.background}
            color={element.color}
            bold={element.bold}
            italic={element.italic}
            fontSize={element.fontSize}
            deleteElement={deleteElement}
          />
        );
      case PostTypes.PARAGRAPH:
        return (
          <Paragraph
            id={element.id}
            content={element.content}
            background={element.background}
            color={element.color}
            bold={element.bold}
            italic={element.italic}
            fontSize={element.fontSize}
            deleteElement={deleteElement}
          />
        );
      case PostTypes.IMAGE:
        return (
          <Image
            id={element.id}
            content={element.content}
            url={element.url}
            size={element.size}
            deleteElement={deleteElement}
          />
        );
      case PostTypes.VIDEO:
        return (
          <Video
            id={element.id}
            content={element.content}
            url={element.url}
            size={element.size}
            deleteElement={deleteElement}
          />
        );
      case PostTypes.LINE:
        return (
          <Line
            id={element.id}
            color={element.color}
            lineType={element.lineType}
            size={element.size}
            deleteElement={deleteElement}
          />
        );
      case PostTypes.INDENT:
        return (
          <Indent
            id={element.id}
            background={element.background}
            size={element.size}
            deleteElement={deleteElement}
          />
        );
      case PostTypes.LIST:
        return (
          <List
            id={element.id}
            content={element.content}
            listItems={element.listItems}
            listType={element.listType}
            deleteElement={deleteElement}
          />
        );
      case PostTypes.LINK:
        return (
          <Link
            id={element.id}
            content={element.content}
            url={element.url}
            deleteElement={deleteElement}
          />
        );
      case PostTypes.COMMENT:
        return (
          <Comment
            id={element.id}
            content={element.content}
            deleteElement={deleteElement}
          />
        );
      default:
        return null;
    }
  };

  return renderPost(element);
};

export default RenderPost;
