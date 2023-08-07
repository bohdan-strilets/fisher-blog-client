import { MdVerified } from "react-icons/md";
import DataItem from "../DataItem";
import { HeaderProps } from "types/ProfileProps";
import { Wrapper, Title, Container, Id, Group, Status } from "./Header.styled";

const Header: React.FC<HeaderProps> = ({ title, userId, isActivated }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Container>
        <Id>{userId}</Id>
        <Group>
          <DataItem
            icon={<MdVerified color="var(--accent-color)" />}
            label="Account activated"
            value={<Status isActivated={isActivated} />}
          />
        </Group>
      </Container>
    </Wrapper>
  );
};

export default Header;
