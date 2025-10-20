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
  let displayStr = "";
  if (setting[0]) {
    if (time.years >= 1) {
      displayStr += time.years + " years ";
    } else {
      displayStr += " year ";
    }
  }
  if (setting[1]) {
    if (time.months >= 1) {
      displayStr += time.months + " months ";
    } else {
      displayStr += " month ";
    }
  }
  if (setting[2]) {
    if (time.weeks >= 1) {
      displayStr += time.weeks + " weeks ";
    } else {
      displayStr += " week ";
    }
  }
  if (setting[3]) {
    if (time.days >= 1) {
      displayStr += time.days + " days ";
    } else {
      displayStr += " day ";
    }
  }
  if (setting[4]) {
    if (time.hours >= 1) {
      displayStr += time.hours + " hours ";
    } else {
      displayStr += " hour ";
    }
  }
  if (setting[5]) {
    if (time.minutes >= 1) {
      displayStr += time.minutes + " minutes ";
    } else {
      displayStr += " minute ";
    }
  }
  if (setting[6]) {
    if (time.seconds >= 1) {
      displayStr += time.seconds + " seconds ";
    } else {
      displayStr += " second ";
    }
  }
  if (setting[7]) {
    if (time.milliseconds >= 1) {
      displayStr += time.milliseconds + " milliseconds ";
    } else {
      displayStr += " millisecond ";
    }
  }

  return displayStr;
}

export default Clock;
