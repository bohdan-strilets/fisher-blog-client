import { IoCalendarSharp } from "react-icons/io5";
import { MdOutlineDataUsage } from "react-icons/md";
import formatDateTime from "helpers/formatDateTime";
import calculateDaysOld from "helpers/calculateDaysOld";
import { ProfileInfoProps } from "types/props/ProfileInfoProps";
import {
  Wrapper,
  Group,
  LabelWrapper,
  Label,
  Value,
} from "./ProfileInfo.styled";

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  creationDate,
  lastChangesDate,
}) => {
  return (
    <Wrapper>
      <Group>
        <LabelWrapper>
          <IoCalendarSharp color="var(--accent-color)" />
          <Label>Profile creation date:</Label>
        </LabelWrapper>
        <Value>{formatDateTime(creationDate.toString(), true)}</Value>
      </Group>
      <Group>
        <LabelWrapper>
          <IoCalendarSharp color="var(--accent-color)" />
          <Label>Latest Updates:</Label>
        </LabelWrapper>
        <Value>{formatDateTime(lastChangesDate.toString(), true)}</Value>
      </Group>
      <LabelWrapper>
        <MdOutlineDataUsage color="var(--accent-color)" size={16} />
        <Label>
          Your profile is {calculateDaysOld(creationDate.toString())} days old.
        </Label>
      </LabelWrapper>
    </Wrapper>
  );
};

export default ProfileInfo;
