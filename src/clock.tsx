// import {
//   getYear,
//   getMonth,
//   getDate,
//   getHours,
//   getMinutes,
//   getSeconds,
// } from "date-fns";
import dayjs from "dayjs";

export default Clock;

function Clock(props: { time: dayjs.Dayjs | undefined }) {
  console.log("received time: ", props.time);
  return (
    <div>
      <h1>Clock: {props.time && props.time.millisecond()}</h1>
    </div>
  );
}

function displayDuration(time: dayjs.Dayjs) {
  setInterval(() => {
    console.log(time.millisecond());
  }, 1000);
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
