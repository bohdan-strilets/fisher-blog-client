import { FiUploadCloud } from "react-icons/fi";
import Background from "components/Interface/Background";
import UserData from "./UserData";
import Controllers from "./Controllers";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import { useAppSelector } from "hooks/useAppSelector";
import { getUser } from "redux/user/userSelectors";
import { Wrapper, SettingBar, Button, ButtonHover } from "./Profile.styled";

const Profile: React.FC<{}> = () => {
  const user = useAppSelector(getUser);

  return (
    <div>
      <Header
        title="Hello fisherman"
        userId={user?._id ? user._id : "-"}
        isActivated={user?.isActivated ? user.isActivated : false}
      />
      <Wrapper>
        <UserData
          firstName={user?.firstName ? user.firstName : "-"}
          lastName={user?.lastName ? user.lastName : "-"}
          email={user?.email ? user.email : "-"}
          dateBirth={user?.dateBirth ? user.dateBirth : new Date().toString()}
          gender={user?.gender ? user.gender : "-"}
          hobby={user?.hobby ? user.hobby : []}
          profession={user?.profession ? user.profession : "-"}
          phoneNumber={user?.phoneNumber ? user.phoneNumber : "-"}
          location={
            user?.location
              ? user.location
              : { country: "", city: "", postcode: "" }
          }
          description={user?.description ? user.description : ""}
          socialNetworks={
            user?.socialNetworks
              ? user.socialNetworks
              : { facebook: "", instagram: "", pinterest: "", twitter: "" }
          }
        />
        <SettingBar>
          <Button type="button">
            <Background
              url={user?.posterURL ? user.posterURL : ""}
              width={300}
              height={180}
              borderRadius="10px"
              shadow={true}
            >
              <ButtonHover className="hover-effect">
                <FiUploadCloud color="var(--white-color)" size={90} />
              </ButtonHover>
            </Background>
          </Button>
          <Button type="button">
            <Background
              url={user?.avatarURL ? user.avatarURL : ""}
              width={300}
              height={180}
              borderRadius="10px"
              shadow={true}
            >
              <ButtonHover className="hover-effect">
                <FiUploadCloud color="var(--white-color)" size={90} />
              </ButtonHover>
            </Background>
          </Button>
          <Controllers />
          <ProfileInfo
            creationDate={
              user?.createdAt ? user.createdAt : new Date().toString()
            }
            lastChangesDate={
              user?.updatedAt ? user.updatedAt : new Date().toString()
            }
          />
        </SettingBar>
      </Wrapper>
    </div>
  );
};

export default Profile;
