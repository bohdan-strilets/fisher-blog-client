import DeleteButton from "components/Interface/DeleteButton";
import { ElementListProps } from "types/props/ElementListProps";
import { Wrapper, Title, MarkedList, NumberedList, Item } from "./List.styled";

const List: React.FC<ElementListProps> = ({
  content,
  listType,
  listItems,
  id,
  deleteElement,
}) => {
  return (
    <Wrapper>
      <DeleteButton deleteFoo={() => deleteElement(id)} />
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
    </Wrapper>
  );
};

export default List;
