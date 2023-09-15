import { OptionType } from "types/types/OptionType";

const findLabelsByValues = (
  valuesArray: string[],
  optionsArray: OptionType[]
) => {
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
