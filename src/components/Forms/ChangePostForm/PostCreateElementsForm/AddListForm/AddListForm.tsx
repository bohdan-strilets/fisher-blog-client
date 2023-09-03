import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiTwotoneDelete } from "react-icons/ai";
import TextInput from "components/Interface/TextInput";
import Dropdown from "components/Interface/Dropdown";
import Button from "components/Interface/Button";
import AddButton from "components/Interface/AddButton";
import { ListProps } from "types/PostElementsProps";
import { PostBodyOptionsProps } from "types/ChangePostFormProps";
import AddListFormSchema from "validations/AddListFormSchema";
import { listTypeOptions } from "helpers/dropdownOptions";
import useRenderPost from "hooks/useRenderPost";
import { InputWrapper, DeleteBtn } from "components/Forms/Forms.styled";

const AddListForm: React.FC<PostBodyOptionsProps> = ({ getPostElement }) => {
  const [visibleListItems, setVisibleListItems] = useState<number[]>([0]);
  const { createElement, PostTypes } = useRenderPost();

  const validation = {
    resolver: yupResolver<ListProps>(AddListFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm<ListProps>(validation);

  const addListItem = () => {
    const lastIndex = visibleListItems[visibleListItems.length - 1];
    setVisibleListItems([...visibleListItems, lastIndex + 1]);
  };

  const removeListItem = (index: number) => {
    const updatedVisibleListItems = visibleListItems.filter(
      (item) => item !== index
    );
    setVisibleListItems(updatedVisibleListItems);
    getValues().listItems.splice(index, 1);
  };

  const onSubmit: SubmitHandler<ListProps> = async (value) => {
    const body = {
      content: value.content,
      listType: value.listType,
      listItems: value.listItems,
    };
    const list = createElement(PostTypes.LIST, body);
    getPostElement(list);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="content"
        label="Name for the list"
        placeholder="List of trophies caught..."
        register={register}
        errors={errors}
        height="40px"
        width="100%"
        required={true}
        margin="0 0 var(--small-indent) 0"
      />
      <Controller
        name="listType"
        control={control}
        render={({ field }) => (
          <Dropdown
            type="single"
            name="listType"
            options={listTypeOptions}
            label="List type"
            buttonlabel="Type"
            height="40px"
            width="100%"
            required={true}
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
          />
        )}
      />
      <AddButton
        width="100%"
        height={40}
        iconSize={40}
        handleClick={addListItem}
        margin="0 0 var(--small-indent) 0"
      />
      {visibleListItems.map((index) => (
        <InputWrapper key={index}>
          <TextInput
            type="text"
            name={`listItems[${index}]`}
            label={`List item ${index + 1}`}
            placeholder="Enter item text"
            register={register}
            errors={errors}
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
          />
          <DeleteBtn type="button" onClick={() => removeListItem(index)}>
            <AiTwotoneDelete size={18} />
          </DeleteBtn>
        </InputWrapper>
      ))}
      <Button type="submit" label="Add list" height={40} width={300} />
    </form>
  );
};

export default AddListForm;
