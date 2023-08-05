import greetingsImg from "images/greetingsImg.jpg";
import Title from "components/Interface/Title";
import { Text, Reference, Image } from "./Greetings.styled";

const Greetings: React.FC<{}> = () => {
  return (
    <>
      <Image
        src={greetingsImg}
        alt="A man on a boat near the pier is fishing."
      />
      <Title
        title="Hey there, fellow angler!"
        fontSize={24}
        background="black"
        margin="var(--small-indent) 0"
      />
      <Text margin="0 0 var(--small-indent) 0">
        Welcome to our fishing blog where the adventures of the water await you.
        Dive into a world of angling tales, tips, and tricks that will reel you
        in. As a member of our community, you can cast your own posts, hook
        those likes, drop a line of comments, and even net some fishing buddies.
      </Text>
      <Text margin="0 0 var(--small-indent) 0">
        If you haven't received this email, or if it got lost in the depths of
        your inbox, feel free to click{" "}
        <Reference href="link-to-activation">here</Reference> to send the
        activation email again and unlock all the amazing features.
      </Text>
      <Text>
        Get ready to explore the depths and make a splash in the world of
        fishing camaraderie!
      </Text>
    </>
  );
};

export default Greetings;
