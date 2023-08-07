const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color;

  do {
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  } while (color === "#000000" || color === "#FFFFFF");

  return color;
};

export default getRandomColor;
