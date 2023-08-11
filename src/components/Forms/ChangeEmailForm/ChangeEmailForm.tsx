import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import TextInput from "components/Interface/TextInput";
import Button from "components/Interface/Button";
import { ChangeEmailFormFields } from "types/FormsProps";
import { ResponseType } from "types/UserState";
import ChangeEmailFormSchema from "validations/ChangeEmailFormSchema";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import operations from "redux/user/userOperations";
import { getUserEmail } from "redux/user/userSelectors";
import { Text } from "../Forms.styled";

const ChangeEmailForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getUserEmail);

  const validation = {
    resolver: yupResolver<ChangeEmailFormFields>(ChangeEmailFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeEmailFormFields>(validation);

  const onSubmit: SubmitHandler<ChangeEmailFormFields> = async (value) => {
    const response = await dispatch(operations.changeEmail(value));
    const data = response.payload as ResponseType;
    if (data && data.success) {
      toast.success("The email address has been successfully changed.");
    }
  };

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        Enter the new email address you want to use. After making the changes,
        the system will automatically send an activation email to the new
        address.
      </Text>
      <Text margin="0 0 var(--small-indent) 0">
        Please ensure the accuracy of the entered email address, as an email
        with activation instructions will be sent to it. If you don't receive
        the activation email within a few minutes, check your "Spam" or "Junk"
        folder in your email inbox. Please note that the new email address will
        not be activated until you confirm it by clicking the link in the
        activation email. If you encounter any difficulties or have questions,
        don't hesitate to contact our support team.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label="Enter a new email address."
          placeholder="yellow.mango@mail.com"
          defaultValue={userEmail}
          register={register}
          errors={errors}
          height="40px"
          width="100%"
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button type="submit" label="Change email" height={40} width={300} />
      </form>
    </>
  );
};

export default ChangeEmailForm;
