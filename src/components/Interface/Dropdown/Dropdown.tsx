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
}) => {
  const {
    divRef,
    toggle,
    isOpen,
    selectedOption,
    getLabelByValue,
    pressEnterKey,
    selectOption,
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
        {selectedOption ? getLabelByValue(selectedOption) : buttonlabel}
        {isOpen ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
      </Button>
      {isOpen && (
        <List tabIndex={0}>
          {options.map(({ id, label, value }) => (
            <Item
              key={id}
              data-value={value}
              onClick={() => selectOption(value)}
              tabIndex={0}
              onKeyDown={(e) => pressEnterKey(e, value)}
            >
              <p>{label}</p>
              {selectedOption === value && (
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
