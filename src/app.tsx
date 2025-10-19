import { JSX, useState } from "react";
import { addYears, toDate } from "date-fns";
import CalendarDemo from "./calendar";
import Clock from "./clock";

let stored = localStorage.getItem("dob");
let storedDob: Date | undefined = undefined;
if (stored) {
  storedDob = toDate(stored);
}

function App(): JSX.Element {
  const [dob, setDob] = useState<Date | undefined>(storedDob);

  return (
    <>
      <div>
        <h1>Welcome!</h1>
      </div>
      {!dob ? (
        <CalendarDemo setDate={setDob} />
      ) : (
        <Clock dob={dob} eod={addYears(dob, 80)} />
      )}
    </>
  );
}

export default App;
