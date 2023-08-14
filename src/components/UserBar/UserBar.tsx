import Background from "components/Interface/Background";
import SocialNetworks from "./SocialNetworks";
import Controllers from "./Controllers";
import { useAppSelector } from "hooks/useAppSelector";
import { getUser } from "redux/user/userSelectors";
import shortenString from "helpers/shortenString";
import { Wrapper, Name, Profession, Description } from "./UserBar.styled";

const UserBar: React.FC<{}> = () => {
  const user = useAppSelector(getUser);

  return (
    <Wrapper>
      <Background
        url={user?.posterURL ? user.posterURL : ""}
        height={270}
        margin="0 0 70px 0"
      >
        <Background
          url={user?.avatarURL ? user.avatarURL : ""}
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
      <Name>{`${user?.firstName} ${user?.lastName}`}</Name>
      <Profession>{user?.profession}</Profession>
      <SocialNetworks
        facebook={
          user?.socialNetworks.facebook ? user.socialNetworks.facebook : null
        }
        twitter={
          user?.socialNetworks.twitter ? user.socialNetworks.twitter : null
        }
        pinterest={
          user?.socialNetworks.pinterest ? user.socialNetworks.pinterest : null
        }
        instagram={
          user?.socialNetworks.instagram ? user.socialNetworks.instagram : null
        }
        margin="var(--medium-indent) 0"
      />
      <Description>
        {user?.description
          ? shortenString(user?.description, 350)
          : "Embrace your uniqueness! Fill out your profile with information about yourself, add a photo, and showcase your accomplishments. It's a great way to grab attention, find new connections, and discover opportunities."}
      </Description>
      <Controllers />
    </Wrapper>
  );
};

export default UserBar;
