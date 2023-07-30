import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiSearchAlt } from "react-icons/bi";
import Button from "components/Interface/Button";
import TextInput from "components/Interface/TextInput";
import { SearcFormFields } from "types/SearcFormFields";
import SearchFormSchema from "validations/SearchFormSchema";
import useClickOutside from "hooks/useClickOutside";
import { SearchWindow, Form } from "./Search.styled";

const Search: React.FC<{}> = () => {
  const validation = {
    resolver: yupResolver<SearcFormFields>(SearchFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearcFormFields>(validation);

  const { isOpen, toggle, divRef } = useClickOutside();

  const onSubmit: SubmitHandler<SearcFormFields> = (data) => {
    console.log(data);
  };

  return (
    <div ref={divRef}>
      <Button
        type="button"
        handleClick={toggle}
        width={70}
        height={40}
        icon={<BiSearchAlt size={22} />}
      />
      {isOpen && (
        <SearchWindow>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              type="text"
              name="value"
              icon={<BiSearchAlt size={20} />}
              placeholder="Search..."
              register={register}
              errors={errors}
              height="40px"
              width="90%"
            />
            <Button type="submit" label="Search" height={40} width={100} />
          </Form>
          <div>
            <p>Nothing found yet... :(</p>
          </div>
        </SearchWindow>
      )}
    </div>
  );
};

export default Search;
