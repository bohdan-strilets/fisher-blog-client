import useModal from "hooks/useModal";
import Profile from "components/Profile";
import Modal from "components/Modal";
import ChangeProfileForm from "components/Forms/ChangeProfileForm";
import ChangeEmailForm from "components/Forms/ChangeEmailForm";
import ChangePasswordForm from "components/Forms/ChangePasswordForm";

const ProfilePage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModal();

  return (
    <>
      <Profile />
      {checkQueryParam(modalsName.CHANGE_PROFILE) && (
        <Modal title="Change profile">
          <ChangeProfileForm />
        </Modal>
      )}
      {checkQueryParam(modalsName.CHANGE_EMAIL) && (
        <Modal title="Change email">
          <ChangeEmailForm />
        </Modal>
      )}
      {checkQueryParam(modalsName.CHANGE_PASSWORD) && (
        <Modal title="Change password">
          <ChangePasswordForm />
        </Modal>
      )}
    </>
  );
};

export default ProfilePage;
