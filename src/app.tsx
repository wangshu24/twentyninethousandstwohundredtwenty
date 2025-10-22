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

const DEFAULT_CONFIG = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
] as DisplayConfig;

export const SettingContext = createContext<DisplayConfig>(DEFAULT_CONFIG);

function App(): JSX.Element {
  const [dob, setDob] = useState<Date | undefined>(storedDob);
  const [setting, setSetting] = useState<DisplayConfig>(DEFAULT_CONFIG);

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
        {/** To be substituted for text input format with validation */}
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
