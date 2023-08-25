import ShortPost from "../ShortPost";
import { ListPostsProps } from "types/ListPosts";
import { PostBodyType } from "types/PostType";
import { Item } from "./ListPosts.styled";

const ListPosts: React.FC<ListPostsProps> = ({ posts }) => {
  const getParagraph = (arr: PostBodyType[]): string => {
    const result = arr.find((item) => item.type === "paragraph");
    const paragraph = result?.content;
    if (paragraph) {
      return paragraph;
    }
    return "";
  };

  return (
    <ul>
      {posts.map(
        ({
          _id,
          posterURL,
          title,
          body,
          category,
          statistics,
          tags,
          updatedAt,
        }) => (
          <Item key={_id}>
            <ShortPost
              id={_id}
              posterUrl={posterURL}
              title={title}
              text={getParagraph(body)}
              category={category}
              statistics={statistics}
              tags={tags}
              updatedAt={updatedAt}
            />
          </Item>
        )
      )}
    </ul>
  );
};

export default ListPosts;
