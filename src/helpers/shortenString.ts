const shortenString = (inputString: string, length: number): string => {
  if (inputString.length <= length) {
    return inputString;
  } else {
    return inputString.substring(0, length) + "...";
  }
};

export default shortenString;
