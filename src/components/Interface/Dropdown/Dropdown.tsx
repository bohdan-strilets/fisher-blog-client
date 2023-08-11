import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import useDropdown from "hooks/useDropdown";
import { DropdownProps } from "types/DropdownProps";
import {
  Wrapper,
  Label,
  Required,
  Button,
  List,
  Item,
  Error,
} from "./Dropdown.styled";

const Dropdown: React.FC<DropdownProps> = ({
  name,
  options,
  label,
  buttonlabel,
  defaultValue,
  required,
  disabled,
  width,
  height,
  margin,
  onChange,
  errors,
  type,
}) => {
  const {
    divRef,
    toggle,
    isOpen,
    selectedOption,
    selectedOptions,
    getLabelByValue,
    pressEnterKey,
    selectOption,
    selectManyOptions,
  } = useDropdown({ options, onChange, defaultValue });

  return (
    <Wrapper ref={divRef} width={width} margin={margin}>
      {label && (
        <Label>
          {label} {required && <Required>*</Required>}
        </Label>
      )}
      <Button
        type="button"
        onClick={toggle}
        height={height}
        isOpen={isOpen}
        disabled={disabled}
      >
        {type === "single" && selectedOption
          ? getLabelByValue(selectedOption)
          : type === "multiselect" &&
            selectedOptions &&
            selectedOptions.length > 0
          ? `${selectedOptions.length} items selected`
          : buttonlabel}
        {isOpen ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
      </Button>
      {isOpen && (
        <List tabIndex={0}>
          {options.map(({ id, label, value }) => (
            <Item
              key={id}
              data-value={value}
              onClick={
                type === "single"
                  ? () => selectOption(value)
                  : () => selectManyOptions(value)
              }
              tabIndex={0}
              onKeyDown={(e) => pressEnterKey(e, value)}
            >
              <p>{label}</p>
              {type === "single" && selectedOption === value && (
                <FaCheck size={16} color="var(--accent-color)" />
              )}
              {type === "multiselect" && selectedOptions?.includes(value) && (
                <FaCheck size={16} color="var(--accent-color)" />
              )}
            </Item>
          ))}
        </List>
      )}
      {errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
    </Wrapper>
  );
};

export default Dropdown;
