import { JSX, use, useState } from "react";
import { addYears, toDate } from "date-fns";
import CalendarDemo from "./calendar";
import Clock from "./clock";
import { DisplayConfig } from "./displayFormat";

let stored = localStorage.getItem("dob");
let storedDob: Date | undefined = undefined;
if (stored) {
  storedDob = toDate(stored);
}

function App(): JSX.Element {
  const [dob, setDob] = useState<Date | undefined>(storedDob);
  const [setting, setSetting] = useState<DisplayConfig>([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const restrictedSetSetting = (newSetting: DisplayConfig) => {
    if (!newSetting.some((v) => v === true)) {
      return;
    }
    setSetting(newSetting);
  };

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
