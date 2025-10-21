import { useState } from "react";
import { DateValues } from "date-fns";

function dateToDateFns(date: Date): DateValues {
  return {
    milliseconds: date.getTime(),
    seconds: Math.floor(date.getTime() / 1000),
    minutes: Math.floor(date.getTime() / 1000 / 60),
    hours: Math.floor(date.getTime() / 1000 / 60 / 60),
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
}

function CalendarDemo(props: { setDate: (dayjs: Date) => void }) {
  const [touched, setTouched] = useState(false);

  const setCalendarInteraction = (date: Date): void => {
    if (!date) return;
    setTouched(true);
    props.setDate(date);
    console.log("picked date: ", date);
  };

  return (
    <input
      type="date"
      id="start"
      name="trip-start"
      min="1970-01-01"
      max="2018-12-31"
      onSelect={(e: React.ChangeEvent<HTMLInputElement>) =>
        setCalendarInteraction(new Date(e.target.value))
      }
    />
  );
}

export default CalendarDemo;
