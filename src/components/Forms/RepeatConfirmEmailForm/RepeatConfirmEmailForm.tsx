import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import TextInput from "components/Interface/TextInput";
import Button from "components/Interface/Button";
import Reference from "components/Interface/Reference";
import { RepeatConfirmEmailFormFields } from "types/fields/RepeatConfirmEmailFormFields";
import { UserResponseType } from "types/types/UserResponseType";
import RepeatConfirmEmailFormSchema from "validations/RepeatConfirmEmailFormSchema";
import { useAppDispatch } from "hooks/useAppDispatch";
import operations from "redux/user/userOperations";
import { Text } from "../Forms.styled";

const RepeatConfirmEmailForm: React.FC<{}> = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useAppDispatch();

  const validation = {
    resolver: yupResolver<RepeatConfirmEmailFormFields>(
      RepeatConfirmEmailFormSchema
    ),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RepeatConfirmEmailFormFields>(validation);

  const onSubmit: SubmitHandler<RepeatConfirmEmailFormFields> = async (
    value
  ) => {
    const response = await dispatch(operations.repeatConfirmEmail(value));
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      toast.success("The confirmation email has been sent again.");
      setIsSuccess(true);
    }
  };

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        If you haven't received your activation email or it got lost in your
        inbox, including the spam folder, you can use this form to request
        another one. Just enter your registered email address below and click
        the "Send" button.
      </Text>
      <Text margin="0 0 var(--small-indent) 0">
        Please remember to check your spam folder in case the activation email
        accidentally landed there.
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
      {isSuccess && (
        <Text margin="var(--small-indent) 0 0 0" color="var(--green-color)">
          Once you've activated your email, you're good to go! Head over to the{" "}
          <Reference path="/" label="homepage" /> and start enjoying all the
          features we have to offer.
        </Text>
      )}
    </>
  );
};

export default RepeatConfirmEmailForm;
