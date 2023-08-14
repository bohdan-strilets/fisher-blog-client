import partingImg from "images/partingImg.jpg";
import { Image, Text } from "./Parting.styled";

const Parting: React.FC<{}> = () => {
  return (
    <>
      <Image
        src={partingImg}
        alt="Illustration, a man is fishing from a boat."
      />
      <Text>
        We deeply regret that you have chosen to delete your profile and leave
        our platform. Your decision leaves us with a sense of loss, as each and
        every user is important to us.
      </Text>
      <Text margin="var(--small-indent) 0 0 0">
        We want to express our sincere gratitude for selecting our application
        during your time with us. Your user experience has always been a
        priority, and we continuously strive to make our app as convenient and
        valuable as possible for all our users.
      </Text>
      <Text margin="var(--small-indent) 0 0 0">
        If there were any issues or dissatisfaction that led to your decision,
        we kindly ask you to share your feedback with us. We are ready to listen
        to your thoughts and suggestions to improve our service and provide you
        with a more pleasant experience.
      </Text>
      <Text margin="var(--small-indent) 0 0 0">
        We hope that in the future, there might be an opportunity to welcome you
        back to our platform and offer you the quality experience you deserve.
        Your opinion holds great value for us, and we are prepared to take all
        necessary steps to meet your needs.
      </Text>
      <Text margin="var(--small-indent) 0 0 0">
        Once again, we extend our apologies and remain hopeful that we can turn
        this situation around. Should you have any questions or wishes, please
        do not hesitate to reach out to us.
      </Text>
      <Text margin="var(--small-indent) 0 0 0">
        Best regards, FisherBlog Team
      </Text>
    </>
  );
};

export default Parting;
