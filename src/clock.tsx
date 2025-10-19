import { ReactNode, useEffect, useState } from "react";
import {
  Duration,
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

function dateToDurationFns(date: Date): Duration {
  if (!date) throw new Error("date is undefined");
  return {
    seconds: Math.floor(date.getMilliseconds() / 1000),
    minutes: Math.floor(date.getTime() / 1000 / 60),
    hours: Math.floor(date.getTime() / 1000 / 60 / 60),
    days: Math.floor(date.getTime() / 1000 / 60 / 60 / 24),
    months: Math.floor(date.getTime() / 1000 / 60 / 60 / 24 / 30),
    years: Math.floor(date.getTime() / 1000 / 60 / 60 / 24 / 365),
  };
}

function Clock(props: { dob: Date; eod: Date }) {
  const { dob, eod } = props;
  console.log("received time: ", dob);
  let duration = calculateDuration(eod);

  const [timeleft, setTimeleft] = useState<CustomDuration>(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      duration = calculateDuration(eod);
      setTimeleft(duration);
    }, 1);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Clock: {timeleft.milliseconds}</h1>
    </div>
  );
}

export type CustomDuration = {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
};

function calculateDuration(eod: Date): CustomDuration {
  const now = new Date();
  const duration = {
    milliseconds: differenceInMilliseconds(eod, now),
    seconds: differenceInSeconds(eod, now),
    minutes: differenceInMinutes(eod, now),
    hours: differenceInHours(eod, now),
    days: differenceInDays(eod, now),
    weeks: differenceInWeeks(eod, now),
    months: differenceInMonths(eod, now),
    years: differenceInYears(eod, now),
  } as CustomDuration;
  // displayDuration(duration);
  return duration;
}

function displayDuration(time: CustomDuration): ReactNode {
  return time.milliseconds;
}

// function toDateStruct(date: Date) {
//   return {
//     year: getYear(date),
//     month: getMonth(date) + 1, // months are 0-indexed
//     day: getDate(date),
//     hour: getHours(date),
//     minute: getMinutes(date),
//     second: getSeconds(date),
//   };
// }

// console.log(toDateStruct(new Date()));

function displayHour() {}

function displayMinute() {}

function displaySecond() {}

export default Clock;
