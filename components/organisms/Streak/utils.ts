import dayjs from "dayjs";

const daysOfTheWeek = ["S", "M", "T", "W", "T", "F", "S"];

export const getDay = (date: string): string => {
  return daysOfTheWeek[dayjs(date).day()];
};
