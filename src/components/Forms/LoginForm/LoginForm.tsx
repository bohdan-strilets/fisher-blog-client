import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Title from "components/Interface/Title";
import TextInput from "components/Interface/TextInput";
import PasswordInput from "components/Interface/PasswordInput";
import Button from "components/Interface/Button";
import { LoginFormFields } from "types/LoginFormFields";
import LoginFormSchema from "validations/LoginFormSchema";
import { Wrapper, ReferenceBtn, Reference, Text } from "../Forms.styled";

const LoginForm: React.FC<{}> = () => {
  const validation = {
    resolver: yupResolver<LoginFormFields>(LoginFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginFormFields>(validation);

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    console.log(data);
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
