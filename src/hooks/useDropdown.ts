import { useState, useEffect, useRef } from "react";
import { UseDropdownData } from "types/DropdownProps";

const useDropdown = ({ onChange, options }: UseDropdownData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedOption !== null) {
      onChange(selectedOption);
    }
  }, [onChange, selectedOption]);

  const toggle = () => setIsOpen((state) => !state);

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

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const pressEnterKey = (e: React.KeyboardEvent, option: string) => {
    if (e.key === "Enter" || e.key === " ") {
      selectOption(option);
    }
  };

  return {
    wrapperRef,
    toggle,
    isOpen,
    selectedOption,
    getLabelByValue,
    pressEnterKey,
    selectOption,
  };
};

export default useDropdown;
