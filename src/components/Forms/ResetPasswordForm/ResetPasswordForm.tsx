import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "components/Interface/Title";
import TextInput from "components/Interface/TextInput";
import PasswordInput from "components/Interface/PasswordInput";
import Button from "components/Interface/Button";
import { ResetPasswordFormFields } from "types/FormsProps";
import { ResponseType } from "types/UserState";
import ResetPasswordFormSchema from "validations/ResetPasswordFormSchema";
import { useAppDispatch } from "hooks/useAppDispatch";
import operations from "redux/user/userOperations";
import { Container, Wrapper } from "../Forms.styled";

const ResetPasswordForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validation = {
    resolver: yupResolver<ResetPasswordFormFields>(ResetPasswordFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>(validation);

  const onSubmit: SubmitHandler<ResetPasswordFormFields> = async (value) => {
    const resetPasswordDto = { password: value.password, email: value.email };
    const response = await dispatch(operations.resetPassword(resetPasswordDto));
    const data = response.payload as ResponseType;

    if (data && data.success) {
      navigate("/auth/login");
      toast.success("The password has been successfully changed.");
    }
  };

  return (
    <Container width="60%">
      <Title
        title="Reset password"
        type="h2"
        background="black"
        margin="0 0 var(--medium-indent) 0 "
      />
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
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
        <PasswordInput
          name="password"
          label="Enter the password provided during registration."
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
        <Button type="submit" label="Reset password" height={40} width={300} />
      </Wrapper>
    </Container>
  );
};

export default ResetPasswordForm;
