import Profile from "components/Profile";
import Modal from "components/Modal";
import ChangeProfileForm from "components/Forms/ChangeProfileForm";
import ChangeEmailForm from "components/Forms/ChangeEmailForm";
import ChangePasswordForm from "components/Forms/ChangePasswordForm";
import DialogWindow from "components/DialogWindow";
import Timer from "components/Forms/Timer";
import useModal from "hooks/useModal";
import { useAppDispatch } from "hooks/useAppDispatch";
import operations from "redux/user/userOperations";
import { ResponseType } from "types/UserState";

const ProfilePage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName, closeModal } = useModal();
  const dispatch = useAppDispatch();

  const deleteProfile = async () => {
    const response = await dispatch(operations.deleteProfile());
    const data = response.payload as ResponseType;
    if (data && data.success) {
      console.log("Your profile has been successfully deleted.");
      closeModal();
    }
  };

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
      {checkQueryParam(modalsName.DELETE_PROFILE) && (
        <Modal title="Delete your profile?">
          <DialogWindow
            message="Are you sure you want to permanently delete your profile and all associated data? Please be aware that this action is irreversible, and we will not be able to recover your account and information after deletion. All your personal information, uploaded files, and activity history will be lost forever."
            failureBtnLabel="Cancel"
            successBtnLabel="Delete"
            failureBtnHandler={closeModal}
            successBtnHandler={deleteProfile}
          >
            <Timer
              initialSeconds={10}
              callback={deleteProfile}
              message="Your profile will be permanently deleted in the specified time. To cancel, press the button above."
              margin="var(--small-indent) 0 0 0"
            />
          </DialogWindow>
        </Modal>
      )}
    </>
  );
};

export default ProfilePage;
