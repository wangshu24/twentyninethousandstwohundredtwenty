import { JSX, useState } from "react";
import dayjs from "dayjs";
import { CalendarDemo } from "./calendar";
import Clock from "./clock";

let stored = localStorage.getItem("dob");
let storedDob: dayjs.Dayjs | undefined = undefined;
if (stored) {
  storedDob = dayjs(stored);
}

function App(): JSX.Element {
  const [dob, setDob] = useState<dayjs.Dayjs | undefined>(storedDob);

  return (
    <>
      <div>
        <h1>Welcome!</h1>
      </div>
      {!dob ? <CalendarDemo setDate={setDob} /> : <Clock time={dob} />}
    </>
  );
}

export default App;
