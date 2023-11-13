import { DateTime } from "luxon";

export const getCurrentDateTime = (dateTime) => {
  const { day, month, year, hour, minute, second } =
    DateTime.fromSeconds(dateTime);
  const newDay = day < 10 ? `0${day}` : day;
  const newMonth = month < 10 ? `0${month}` : month;
  const newHour = hour < 10 ? `0${hour}` : hour;
  const newMinute = minute < 10 ? `0${minute}` : minute;
  const newSecond = second < 10 ? `0${second}` : second;
  const fullDateTime = DateTime.fromISO(
    `${year}-${newMonth}-${newDay}T${newHour}:${newMinute}:${newSecond}`
  ).toFormat("fff");
  return fullDateTime;
};
