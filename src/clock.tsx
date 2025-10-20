import { ReactNode, useEffect, useState } from "react";
import {
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

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
  return duration;
}

function displayDuration(time: CustomDuration): ReactNode {
  return time.milliseconds;
}

export default Clock;
