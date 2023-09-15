import { HobbyListProps } from "types/props/HobbyListProps";
import getRandomColor from "helpers/getRandomColor";
import { List, Item } from "./HobbyList.styled";

const HobbyList: React.FC<HobbyListProps> = ({ hobby }) => {
  return (
    <List>
      {hobby.map((item) => (
        <Item key={item} background={getRandomColor()}>
          {item}
        </Item>
      ))}
    </List>
  );
};

export default HobbyList;
