const calculateDaysOld = (dateString: string) => {
  const currentDate = new Date();
  const profileDate = new Date(dateString);
  const timeDifference = currentDate.getTime() - profileDate.getTime();
  const daysOld = Math.floor(timeDifference / (1000 * 3600 * 24));
  return daysOld;
};

export default calculateDaysOld;
