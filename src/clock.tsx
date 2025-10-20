import { ReactNode, useEffect, useState, useContext } from "react";
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
import { SettingContext } from "./app";
import { DisplayConfig } from "./displayFormat";

function Clock(props: { dob: Date; eod: Date }) {
  const { dob, eod } = props;
  console.log("received time: ", dob);
  let duration = calculateDuration(eod);

  let displaySetting: DisplayConfig = useContext(SettingContext);

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
      <h1>Clock: {displayDuration(timeleft, displaySetting)}</h1>
    </div>
  );
}

export type CustomDuration = {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
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

function displayDuration(
  time: CustomDuration,
  setting: DisplayConfig
): ReactNode {
  if (setting[0]) {
    return time.years;
  }
  if (setting[1]) {
    return time.months;
  }
  if (setting[2]) {
    return time.weeks;
  }
  if (setting[3]) {
    return time.days;
  }
  if (setting[4]) {
    return time.hours;
  }
  if (setting[5]) {
    return time.minutes;
  }
  if (setting[6]) {
    return time.seconds;
  }
  if (setting[7]) {
    return time.milliseconds;
  }

  return time.milliseconds;
}

export default Clock;
