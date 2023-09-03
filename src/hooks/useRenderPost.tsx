import { v4 } from "uuid";
import { PostTypes, CreateElementBody, PostBodyType } from "types/PostType";
import Title from "components/Forms/ChangePostForm/PostElements/Title";
import Paragraph from "components/Forms/ChangePostForm/PostElements/Paragraph";
import Image from "components/Forms/ChangePostForm/PostElements/Image";
import Video from "components/Forms/ChangePostForm/PostElements/Video";
import Line from "components/Forms/ChangePostForm/PostElements/Line";
import Indent from "components/Forms/ChangePostForm/PostElements/Indent";
import Link from "components/Forms/ChangePostForm/PostElements/Link";
import Comment from "components/Forms/ChangePostForm/PostElements/Comment";
import List from "components/Forms/ChangePostForm/PostElements/List";

const useRenderPost = () => {
  const createElement = (
    type: PostTypes,
    elementBody: CreateElementBody
  ): PostBodyType => {
    return {
      id: v4(),
      type,
      ...elementBody,
    };
  };

  const renderPost = (element: PostBodyType) => {
    switch (element.type) {
      case PostTypes.TITLE:
        return (
          <Title
            content={element.content}
            background={element.background}
            color={element.color}
            bold={element.bold}
            italic={element.italic}
            fontSize={element.fontSize}
          />
        );
      case PostTypes.PARAGRAPH:
        return (
          <Paragraph
            content={element.content}
            background={element.background}
            color={element.color}
            bold={element.bold}
            italic={element.italic}
            fontSize={element.fontSize}
          />
        );
      case PostTypes.IMAGE:
        return (
          <Image
            content={element.content}
            url={element.url}
            size={element.size}
          />
        );
      case PostTypes.VIDEO:
        return (
          <Video
            content={element.content}
            url={element.url}
            size={element.size}
          />
        );
      case PostTypes.LINE:
        return (
          <Line
            color={element.color}
            lineType={element.lineType}
            size={element.size}
          />
        );
      case PostTypes.INDENT:
        return <Indent background={element.background} size={element.size} />;
      case PostTypes.LIST:
        return (
          <List
            content={element.content}
            listItems={element.listItems}
            listType={element.listType}
          />
        );
      case PostTypes.LINK:
        return <Link content={element.content} url={element.url} />;
      case PostTypes.COMMENT:
        return <Comment content={element.content} />;
      default:
        return null;
    }
  };

  return { PostTypes, createElement, renderPost };
};

export default useRenderPost;
