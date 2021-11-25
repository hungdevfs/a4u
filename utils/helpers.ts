export const getDateInfos = (date: Date) => {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayOfWeekCode = date.getDay();
  const time = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
  const dayOfWeek = getDayOfWeek(dayOfWeekCode);

  return { time, dayOfWeek };
};

const getDayOfWeek = (code: number) => {
  switch (code) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
};
