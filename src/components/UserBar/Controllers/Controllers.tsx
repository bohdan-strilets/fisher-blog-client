import { MdPersonAdd } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Button from "components/Interface/Button";
import { List } from "./Controllers.styled";

const Controllers: React.FC<{}> = () => {
  return (
    <List>
      <li>
        <Button
          type="button"
          label="Add"
          icon={<MdPersonAdd size={20} />}
          width={120}
          height={30}
        />
      </li>
      <li>
        <Button
          type="button"
          label="Write"
          icon={<FaPen size={16} />}
          width={120}
          height={30}
        />
      </li>
    </List>
  );
};

export default Controllers;
