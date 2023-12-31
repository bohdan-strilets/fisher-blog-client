import { useNavigate } from "react-router-dom";
import Profile from "components/Profile";
import Modal from "components/Modal";
import ChangeProfileForm from "components/Forms/ChangeProfileForm";
import ChangeEmailForm from "components/Forms/ChangeEmailForm";
import ChangePasswordForm from "components/Forms/ChangePasswordForm";
import DialogWindow from "components/DialogWindow";
import Timer from "components/Timer";
import UploadFile from "components/UploadFile";
import useModal from "hooks/useModal";
import { useAppDispatch } from "hooks/useAppDispatch";
import operations from "redux/user/userOperations";
import { UserResponseType } from "types/types/UserResponseType";
import { imageValidation } from "helpers/fileValidation";

const ProfilePage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName, closeModal } = useModal();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteProfile = async () => {
    const response = await dispatch(operations.deleteProfile());
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      navigate("/parting");
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
      {checkQueryParam(modalsName.UPLOAD_USER_POSTER) && (
        <Modal title="Upload poster">
          <UploadFile
            fileName="poster"
            text="The selected file must be in one of the following formats '.jpg .png .gif .webp'. The file must not exceed 5MB."
            operation={operations.uploadPoster}
            buttonLabel="Change poster"
            acceptTypes={imageValidation.types}
            validationSize={imageValidation.size}
            type="image"
          />
        </Modal>
      )}
      {checkQueryParam(modalsName.UPLOAD_USER_AVATAR) && (
        <Modal title="Upload avatar">
          <UploadFile
            fileName="avatar"
            text="The selected file must be in one of the following formats '.jpg .png .gif .webp'. The file must not exceed 5MB."
            operation={operations.uploadAvatar}
            buttonLabel="Change avatar"
            acceptTypes={imageValidation.types}
            validationSize={imageValidation.size}
            type="image"
          />
        </Modal>
      )}
    </>
  );
};

export default ProfilePage;
