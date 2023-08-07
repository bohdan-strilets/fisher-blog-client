import { FiUploadCloud } from "react-icons/fi";
import Background from "components/Interface/Background";
import UserData from "./UserData";
import Controllers from "./Controllers";
import Header from "./Header";
import { Wrapper, SettingBar, Button, ButtonHover } from "./Profile.styled";

const posterUrl =
  "https://cdn.pixabay.com/photo/2023/06/23/19/34/campfire-8084064_1280.jpg";
const avatarUrl =
  "https://cdn.pixabay.com/photo/2023/07/04/19/13/stuart-bailey-8106891_1280.jpg";
const hobbies = [
  "Painting",
  "Playing the guitar",
  "Cooking",
  "Hiking",
  "Photography",
  "Reading",
  "Gardening",
  "Dancing",
  "Swimming",
  "Writing",
  "Cycling",
  "Playing chess",
  "Knitting",
  "Playing video games",
  "Bird watching",
  "Yoga",
];
const social = {
  facebook: "http://facebook.com/user-name-id",
  twitter: "http://twitter.com/user-name-id",
  pinterest: "http://pinterest.com/user-name-id",
  instagram: "http://instagram.com/user-name-id",
};
const location = {
  postcode: "05-900",
  city: "Pruszkow",
  country: "Poland",
};
const desc =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi harum corporis voluptate sint pariatur laudantium labore soluta impedit nam, nesciunt atque accusantium consectetur nobis explicabo voluptatem, quis a tenetur?";

const Profile: React.FC<{}> = () => {
  return (
    <div>
      <Header
        title="Hello fisherman"
        userId="64ce5459ddd04f54cfdb8cec"
        isActivated={true}
      />
      <Wrapper>
        <UserData
          firstName="Bohdan"
          lastName="Strilets"
          email="bohdan.strilets@gmail.com"
          dateBirth="02.06.1995"
          gender="Man"
          hobby={hobbies}
          profession="Front end Developer"
          phoneNumber="+48 892 2318 911"
          location={location}
          description={desc}
          socialNetworks={social}
        />
        <SettingBar>
          <Button type="button">
            <Background
              url={posterUrl}
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
              url={avatarUrl}
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
        </SettingBar>
      </Wrapper>
    </div>
  );
};

export default Profile;
