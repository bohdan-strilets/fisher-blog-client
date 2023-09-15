import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import Button from "components/Interface/Button";
import useModal from "hooks/useModal";
import { ModalProps } from "types/props/ModalProps";
import {
  Backdrop,
  Wrapper,
  Header,
  Title,
  Content,
  Footer,
} from "./Modal.styled";

const modalRoot = document.getElementById("modal-root") as HTMLDivElement;

const Modal: React.FC<ModalProps> = ({ title, children }) => {
  const { closeModal, backdropClick } = useModal();

  return createPortal(
    <Backdrop onClick={backdropClick}>
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <Button
            type="button"
            height={30}
            width={30}
            icon={<RxCross2 size={20} />}
            handleClick={closeModal}
          />
        </Header>
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
