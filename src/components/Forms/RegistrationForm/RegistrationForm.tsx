import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Title from "components/Interface/Title";
import TextInput from "components/Interface/TextInput";
import PasswordInput from "components/Interface/PasswordInput";
import Checkbox from "components/Interface/Checkbox";
import Button from "components/Interface/Button";
import Modal from "components/Modal";
import TermsUseSite from "components/Auth/TermsUseSite";
import useModal from "hooks/useModal";
import { Wrapper, ReferenceBtn, Reference, Text } from "../Forms.styled";

export type RegistrationFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordAgain: string;
  rules: boolean;
};

const RegistrationForm: React.FC<{}> = () => {
  const { openModal, modalsName, checkQueryParam } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegistrationFormFields>();

  const onSubmit: SubmitHandler<RegistrationFormFields> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Title
        title="Registration"
        type="h2"
        background="black"
        margin="0 0 var(--medium-indent) 0 "
      />
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          name="firstName"
          label="What a your first name?"
          placeholder="Mango"
          register={register}
          errors={errors}
          height="40px"
          width="100%"
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <TextInput
          type="text"
          name="lastName"
          label="What a your last name?"
          placeholder="Yellow"
          register={register}
          errors={errors}
          height="40px"
          width="100%"
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
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
          label="Come up with a secure password."
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
        <Controller
          name="rules"
          control={control}
          render={({ field }) => (
            <Checkbox
              name="rules"
              errors={errors}
              register={register}
              required={true}
              onChange={(value: boolean) => field.onChange(value)}
              margin="0 0 var(--small-indent) 0"
            >
              <p>
                I have read the
                <ReferenceBtn
                  type="button"
                  onClick={() => openModal(modalsName.TERMS_USE_SITE)}
                >
                  terms of use of the site
                </ReferenceBtn>
                and the
                <ReferenceBtn
                  type="button"
                  onClick={() => openModal(modalsName.PRIVACY_POLICY)}
                >
                  privacy policy
                </ReferenceBtn>
                and agree to them.
              </p>
            </Checkbox>
          )}
        />
        <Button type="submit" label="Registration" height={40} width={300} />
        <Text>
          If you already have an account, please{" "}
          <Reference to="/auth/login">log in</Reference>.
        </Text>
      </Wrapper>

      {checkQueryParam(modalsName.TERMS_USE_SITE) && (
        <Modal title="Terms of use of the site">
          <TermsUseSite />
        </Modal>
      )}
    </>
  );
};

export default RegistrationForm;
