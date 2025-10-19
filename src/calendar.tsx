import { useState } from "react";
import { DateValues } from "date-fns";
import { DayPicker as Calendar } from "react-day-picker";

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
    <Calendar
      mode="single"
      selected={new Date()}
      onSelect={setCalendarInteraction}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
      required={true}
    />
  );
}

export default CalendarDemo;
