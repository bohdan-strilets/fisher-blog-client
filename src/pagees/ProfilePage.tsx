import useModal from "hooks/useModal";
import Profile from "components/Profile";
import Modal from "components/Modal";
import ChangeProfileForm from "components/Forms/ChangeProfileForm";

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
    </>
  );
};

export default ProfilePage;
