import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import TextInput from "components/Interface/TextInput";
import Dropdown from "components/Interface/Dropdown";
import Textarea from "components/Interface/Textarea";
import Button from "components/Interface/Button";
import { ChangeProfileFormFields } from "types/FormsProps";
import { ResponseType } from "types/UserState";
import { UserType } from "types/UserType";
import ChangeProfileFormSchema from "validations/ChangeProfileFormSchema";
import { genderOptions, hobbyOptions } from "helpers/dropdownOptions";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import useModal from "hooks/useModal";
import { getUser } from "redux/user/userSelectors";
import operations from "redux/user/userOperations";

const ChangeProfileForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const { closeModal } = useModal();

  const validation = {
    resolver: yupResolver<ChangeProfileFormFields>(ChangeProfileFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ChangeProfileFormFields>(validation);

  const onSubmit: SubmitHandler<ChangeProfileFormFields> = async (value) => {
    console.log(value);
    const changeProfileDto = {
      firstName: value.firstName,
      lastName: value.lastName,
      dateBirth: value.dateBirth,
      gender: value.gender,
      description: value.description,
      profession: value.profession,
      phoneNumber: value.phoneNumber,
      location: {
        country: value.country,
        city: value.city,
        postcode: value.postcode,
      },
      socialNetworks: {
        facebook: value.facebook,
        instagram: value.instagram,
        twitter: value.twitter,
        pinterest: value.pinterest,
      },
      hobby: value.hobby,
    };

    console.log(changeProfileDto);

    const response = await dispatch(operations.changeProfile(changeProfileDto));
    const data = response.payload as ResponseType<UserType>;
    if (data && data.success) {
      closeModal();
      toast.success("Your profile has been successfully edited.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="firstName"
        label="First name"
        placeholder="Mango"
        defaultValue={user?.firstName}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="lastName"
        label="Last name"
        placeholder="Yellow"
        defaultValue={user?.lastName}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="dateBirth"
        label="Date of birth"
        placeholder="YYYY-MM-DD"
        defaultValue={user?.dateBirth}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="gender"
            options={genderOptions}
            label={"Choose your gender"}
            buttonlabel="Gender"
            defaultValue={user?.gender}
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
      <Textarea
        name="description"
        label="Write a few words about yourself."
        placeholder="Example text..."
        defaultValue={user?.description}
        register={register}
        errors={errors}
        height="180px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <Controller
        name="hobby"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="multiselect"
            name="hobby"
            options={hobbyOptions}
            label={"Choose your hobby"}
            buttonlabel="Hobby"
            defaultValue={user?.gender}
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
      <TextInput
        type="text"
        name="profession"
        label="Profession"
        placeholder="Web developer"
        defaultValue={user?.profession}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="phoneNumber"
        label="Phone number"
        placeholder="+48 --- --- ---"
        defaultValue={user?.phoneNumber}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="country"
        label="Country of Residence"
        placeholder="Poland"
        defaultValue={user?.location.country}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="city"
        label="City of residence"
        placeholder="Warszawa"
        defaultValue={user?.location.city}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="postcode"
        label="Postal code"
        placeholder="05-800"
        defaultValue={user?.location.postcode}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="facebook"
        label="Facebook url"
        placeholder="https://facebook/profile-id"
        defaultValue={user?.socialNetworks.facebook}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="instagram"
        label="Instagram url"
        placeholder="https://instagram/profile-id"
        defaultValue={user?.socialNetworks.instagram}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="twitter"
        label="Twitter url"
        placeholder="https://twitter/profile-id"
        defaultValue={user?.socialNetworks.twitter}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <TextInput
        type="text"
        name="pinterest"
        label="Pinterest url"
        placeholder="https://pinterest/profile-id"
        defaultValue={user?.socialNetworks.pinterest}
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        margin="0 0 var(--small-indent) 0"
      />
      <Button type="submit" label="Change profile" height={40} width={300} />
    </form>
  );
};

export default ChangeProfileForm;
