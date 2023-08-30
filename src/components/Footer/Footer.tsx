import Logo from "components/Interface/Logo";
import { Wrapper, Copyright, Studios } from "./Footer.styled";

const Footer: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Logo type="short" />
      <Copyright>© 2023 FisherBlog</Copyright>
      <Studios>BS</Studios>
    </Wrapper>
  );
};

export default Footer;
