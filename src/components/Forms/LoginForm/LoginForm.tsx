import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Title from "components/Interface/Title";
import TextInput from "components/Interface/TextInput";
import PasswordInput from "components/Interface/PasswordInput";
import Button from "components/Interface/Button";
import { LoginFormFields } from "types/LoginFormFields";
import { ResponseType } from "types/UserState";
import { UserType } from "types/UserType";
import { TokensType } from "types/TokensType";
import LoginFormSchema from "validations/LoginFormSchema";
import { useAppDispatch } from "hooks/useAppDispatch";
import operations from "redux/user/userOperations";
import { Wrapper, Reference, Text } from "../Forms.styled";

const LoginForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    <>
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
          register={register}
          errors={errors}
          height="40px"
          width="100%"
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button type="submit" label="Login" height={40} width={300} />
        <Text>
          If you have not yet created an account, click{" "}
          <Reference to="/auth/registration">register</Reference>.
        </Text>
      </Wrapper>
    </>
  );
};

export default LoginForm;
