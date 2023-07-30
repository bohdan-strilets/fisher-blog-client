import { useState, useEffect } from "react";
import useClickOutside from "./useClickOutside";
import usePressEscClose from "./usePressEscClose";
import { UseDropdownData } from "types/DropdownProps";

const useDropdown = ({ onChange, options }: UseDropdownData) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { isOpen, toggle, divRef } = useClickOutside();
  usePressEscClose({ isOpen, toggle });

  useEffect(() => {
    if (selectedOption !== null) {
      onChange(selectedOption);
    }
  }, [onChange, selectedOption]);

  const selectOption = (option: string) => {
    selectedOption === null || selectedOption !== option
      ? setSelectedOption(option)
      : setSelectedOption(null);
    toggle();
  };

  const getLabelByValue = (value: string) => {
    const option = options.find((item) => item.value === value);
    return option?.label;
  };

  const pressEnterKey = (e: React.KeyboardEvent, option: string) => {
    if (e.key === "Enter" || e.key === " ") {
      selectOption(option);
    }
  };

  return {
    divRef,
    toggle,
    isOpen,
    selectedOption,
    getLabelByValue,
    pressEnterKey,
    selectOption,
  };
};

export default useDropdown;
