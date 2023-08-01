import ShortPost from "../ShortPost";
import { ListPostsProps, PostBody } from "types/ListPosts";
import { Item } from "./ListPosts.styled";

const ListPosts: React.FC<ListPostsProps> = ({ posts }) => {
  const getParagraph = (arr: PostBody[]): string => {
    const result = arr.find((item) => item.id === "paragraph");
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
