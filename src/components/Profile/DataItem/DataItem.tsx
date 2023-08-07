import { DataItemProps } from "types/ProfileProps";
import { Wrapper, Label } from "./DataItem.styled";

const DataItem: React.FC<DataItemProps> = ({ icon, label, value }) => {
  return (
    <>
      <Wrapper>
        {icon}
        <Label>{`${label}:`}</Label>
      </Wrapper>
      <p>{value}</p>
    </>
  );
};

export default DataItem;
