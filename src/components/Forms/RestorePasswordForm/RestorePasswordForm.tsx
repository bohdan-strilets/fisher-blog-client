import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import TextInput from "components/Interface/TextInput";
import Button from "components/Interface/Button";
import GoBack from "components/Interface/GoBack";
import { RestorePasswordFormFields } from "types/fields/RestorePasswordFormFields";
import { UserResponseType } from "types/types/UserResponseType";
import RestorePasswordFormSchema from "validations/RestorePasswordFormSchema";
import { useAppDispatch } from "hooks/useAppDispatch";
import operations from "redux/user/userOperations";
import { Text } from "../Forms.styled";

const RestorePasswordForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const validation = {
    resolver: yupResolver<RestorePasswordFormFields>(RestorePasswordFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RestorePasswordFormFields>(validation);

  const onSubmit: SubmitHandler<RestorePasswordFormFields> = async (value) => {
    const response = await dispatch(operations.requestResetPassword(value));
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      toast.success(
        "A password reset email has been successfully sent to your email address."
      );
    }
  };

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        Once you provide your email address, a password reset email will be sent
        to your inbox. This email will contain a link that will allow you to
        reset your password securely.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label="What a your email address?"
          placeholder="yellow.mango@mail.com"
          register={register}
          errors={errors}
          height="40px"
          width="100%"
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button type="submit" label="Send" height={40} width={300} />
      </form>
      <GoBack
        label="Go login form"
        path="/auth/login"
        margin="var(--small-indent) 0 0 0"
      />
    </>
  );
};

export default RestorePasswordForm;
