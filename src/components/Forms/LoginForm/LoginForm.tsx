import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import Title from "components/Interface/Title";
import TextInput from "components/Interface/TextInput";
import PasswordInput from "components/Interface/PasswordInput";
import Button from "components/Interface/Button";
import Reference from "components/Interface/Reference";
import { LoginFormFields } from "types/FormsProps";
import { ResponseType } from "types/UserState";
import { UserType } from "types/UserType";
import { TokensType } from "types/TokensType";
import LoginFormSchema from "validations/LoginFormSchema";
import { useAppDispatch } from "hooks/useAppDispatch";
import useModal from "hooks/useModal";
import operations from "redux/user/userOperations";
import { Container, Wrapper, Text } from "../Forms.styled";

const LoginForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { modalsName } = useModal();

  const validation = {
    resolver: yupResolver<LoginFormFields>(LoginFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>(validation);

  const onSubmit: SubmitHandler<LoginFormFields> = async (value) => {
    const response = await dispatch(operations.login(value));
    const data = response.payload as ResponseType<UserType, TokensType>;
    if (data && data.success) {
      navigate("/");
      toast.success("Login is successfuly.");
    }
  };

  return (
    <Container width="60%">
      <Title
        title="Login"
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
        <Button type="submit" label="Login" height={40} width={300} />
        <Text margin="var(--small-indent) 0 0 0">
          If you have not yet created an account, click{" "}
          <Reference path="/auth/registration" label="register" />.
        </Text>
        <Reference
          path={`${location.pathname}?modal=${modalsName.RESTORE_PASSWORD}`}
          label="Forgot your password?"
        />
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
