import emptyListImg from "images/emptyListImg.png";
import Button from "components/Interface/Button";
import { Wrapper, Image, Text } from "./EmptyState.styled";

const EmptyState: React.FC<{}> = () => {
  return (
    <Wrapper>
      <div>
        <Text>
          Fishing is not just a great way to relax, but also an opportunity to
          enjoy nature and tranquility. Creating a blog about fishing will help
          preserve those memorable moments and share experiences with others.
        </Text>
        <Button
          type="button"
          label="Add post"
          width={300}
          height={40}
          margin="var(--medium-indent) 0 0 0"
        />
      </div>
      <Image src={emptyListImg} alt="Fishing gear" width={500} height={500} />
    </Wrapper>
  );
};

export default EmptyState;
