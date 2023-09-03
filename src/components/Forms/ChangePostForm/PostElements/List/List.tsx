import { ListProps } from "types/PostElementsProps";
import { Title, MarkedList, NumberedList, Item } from "./List.styled";

const List: React.FC<ListProps> = ({ content, listType, listItems }) => {
  return (
    <>
      <Title>{content}</Title>
      {listType === "marked" ? (
        <MarkedList>
          {listItems && listItems.map((item) => <Item key={item}>{item}</Item>)}
        </MarkedList>
      ) : (
        <NumberedList>
          {listItems && listItems.map((item) => <Item key={item}>{item}</Item>)}
        </NumberedList>
      )}
    </>
  );
};

export default List;
