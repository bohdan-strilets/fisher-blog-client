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
} from "./Dropdown.styled";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  buttonlabel,
  required,
  disabled,
  width,
  height,
  margin,
  onChange,
}) => {
  const {
    wrapperRef,
    toggle,
    isOpen,
    selectedOption,
    getLabelByValue,
    pressEnterKey,
    selectOption,
  } = useDropdown({ options, onChange });

  return (
    <Wrapper ref={wrapperRef} width={width} margin={margin}>
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
    </Wrapper>
  );
};

export default Dropdown;
