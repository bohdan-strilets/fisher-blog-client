import { DialogWindowProps } from "types/props/DialogWindowProps";
import { Message, List, Item, Button } from "./DialogWindow.styled";

const DialogWindow: React.FC<DialogWindowProps> = ({
  message,
  failureBtnLabel,
  successBtnLabel,
  failureBtnHandler,
  successBtnHandler,
  children,
}) => {
  return (
    <>
      {message && <Message>{message}</Message>}
      <List>
        <Item>
          <Button
            type="button"
            onClick={failureBtnHandler}
            background="var(--accent-color)"
          >
            {failureBtnLabel}
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            onClick={successBtnHandler}
            background="var(--red-color)"
          >
            {successBtnLabel}
          </Button>
        </Item>
      </List>
      {children && children}
    </>
  );
};

export default DialogWindow;
