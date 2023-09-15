import { DataItemProps } from "types/props/DataItemProps";
import { Wrapper, Label } from "./DataItem.styled";

const DataItem: React.FC<DataItemProps> = ({ icon, label, value }) => {
  return (
    <>
      <Wrapper>
        {icon}
        <Label>{`${label}:`}</Label>
      </Wrapper>
      {typeof value === "string" ? <p>{value}</p> : <div>{value}</div>}
    </>
  );
};

export default DataItem;
