import { useState } from "react";
import dayjs from "dayjs";
import { DayPicker as Calendar } from "react-day-picker";

export function CalendarDemo(props: {
  setDate: (dayjs: dayjs.Dayjs | undefined) => void;
}) {
  const [touched, setTouched] = useState(false);

  const setCalendarInteraction = (date: Date | undefined): void => {
    if (!date) return;
    setTouched(true);
    props.setDate(dayjs(date));
    console.log("picked date: ", date);
  };

  return (
    <Calendar
      mode="single"
      selected={new Date()}
      onSelect={setCalendarInteraction}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  );
}
