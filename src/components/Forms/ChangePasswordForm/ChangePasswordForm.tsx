import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import PasswordInput from "components/Interface/PasswordInput";
import Button from "components/Interface/Button";
import { ChangePasswordFormFields } from "types/fields/ChangePasswordFormFields";
import { UserResponseType } from "types/types/UserResponseType";
import ChangePasswordFormSchema from "validations/ChangePasswordFormSchema";
import { useAppDispatch } from "hooks/useAppDispatch";
import useModal from "hooks/useModal";
import operations from "redux/user/userOperations";

const ChangePasswordForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<ChangePasswordFormFields>(ChangePasswordFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormFields>(validation);

  const onSubmit: SubmitHandler<ChangePasswordFormFields> = async (value) => {
    const changePasswordDto = {
      password: value.password,
      newPassword: value.newPassword,
    };
    const response = await dispatch(
      operations.changePassword(changePasswordDto)
    );
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      closeModal();
      toast.success("The password has been successfully changed.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PasswordInput
          name="password"
          label="Enter your current password."
          placeholder="Least one letter, one digit, and one special character  ! @ # $ % &"
          register={register}
          errors={errors}
          height="40px"
          width="100%"
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <PasswordInput
          name="newPassword"
          label="Create a new password."
          placeholder="Least one letter, one digit, and one special character  ! @ # $ % &"
          register={register}
          errors={errors}
          height="40px"
          width="100%"
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <PasswordInput
          name="passwordAgain"
          label="Repeat the entered password again."
          register={register}
          errors={errors}
          height="40px"
          width="100%"
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button type="submit" label="Change password" height={40} width={300} />
      </form>
    </>
  );
};

export default ChangePasswordForm;
