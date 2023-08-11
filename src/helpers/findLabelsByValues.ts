import { Option } from "types/DropdownProps";

const findLabelsByValues = (valuesArray: string[], optionsArray: Option[]) => {
  const labels = [];

  for (const value of valuesArray) {
    const option = optionsArray.find((option) => option.value === value);
    if (option) {
      labels.push(option.label);
    }
  }

  return labels;
};

export default findLabelsByValues;
