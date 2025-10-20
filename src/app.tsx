import { JSX, createContext, useState } from "react";
import { addYears, toDate } from "date-fns";
import CalendarDemo from "./calendar";
import Clock from "./clock";
import { DisplayConfig } from "./displayFormat";
import DisplaySetting from "./displaySetting";

let stored = localStorage.getItem("dob");
let storedDob: Date | undefined = undefined;
if (stored) {
  storedDob = toDate(stored);
}

export const SettingContext = createContext<DisplayConfig>([
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
]);

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

  const restrictedSetSetting = (newSetting: DisplayConfig): void => {
    if (!newSetting.some((v) => v === true)) {
      return;
    }
    setSetting(newSetting);
  };

  return (
    <>
      <DisplaySetting setting={setting} setSetting={restrictedSetSetting} />
      <div>
        <h1>Welcome!</h1>
      </div>
      <SettingContext.Provider value={setting}>
        {!dob ? (
          <CalendarDemo setDate={setDob} />
        ) : (
          <Clock dob={dob} eod={addYears(dob, 80)} />
        )}
      </SettingContext.Provider>
    </>
  );
}

export default App;
