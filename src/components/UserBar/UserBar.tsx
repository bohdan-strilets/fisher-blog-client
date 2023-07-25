import Background from "components/Interface/Background";
import SocialNetworks from "./SocialNetworks";
import Controllers from "./Controllers";
import { Wrapper, Name, Profession, Description } from "./UserBar.styled";

const posterUrl =
  "https://cdn.pixabay.com/photo/2023/06/23/19/34/campfire-8084064_1280.jpg";
const avatarUrl =
  "https://cdn.pixabay.com/photo/2023/07/04/19/13/stuart-bailey-8106891_1280.jpg";

const UserBar: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Background url={posterUrl} height={270} margin="0 0 70px 0">
        <Background
          url={avatarUrl}
          width={120}
          height={120}
          borderRadius="50%"
          border="2px solid var(--white-color)"
          shadow={true}
          otherStyles={{
            position: "absolute",
            bottom: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Background>
      <Name>User name</Name>
      <Profession>Profession</Profession>
      <SocialNetworks
        facebook="https://facebook.com"
        twitter="https://twitter.com"
        pinterest="https://pinterest.com"
        instagram="https://instagram.com"
        margin="var(--medium-indent) 0"
      />
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis
        facere voluptates minus impedit excepturi, qui sunt quia, quod, maxime
        voluptate magni! Optio dolor odio nesciunt vel dicta eveniet voluptates.
      </Description>
      <Controllers />
    </Wrapper>
  );
};

export default UserBar;
