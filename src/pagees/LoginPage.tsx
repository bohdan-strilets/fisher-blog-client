import LoginForm from "components/Forms/LoginForm";
import Modal from "components/Modal";
import RestorePasswordForm from "components/Forms/RestorePasswordForm";
import useModal from "hooks/useModal";

const LoginPage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModal();

  return (
    <>
      <LoginForm />

      {checkQueryParam(modalsName.RESTORE_PASSWORD) && (
        <Modal title="Restore password">
          <RestorePasswordForm />
        </Modal>
      )}
    </>
  );
};
export default LoginPage;
