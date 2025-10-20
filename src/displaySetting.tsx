import { DisplayConfig } from "./displayFormat";

function DisplaySetting(props: {
  setting: DisplayConfig;
  setSetting: (s: DisplayConfig) => void;
}) {
  const { setting, setSetting } = props;

  return (
    <div>
      <h2>DisplaySetting:</h2>
      <input
        type="checkbox"
        checked={setting[7]}
        value={"Year"}
        onChange={setSetting}
      />
      <input type="checkbox" checked={setting[6]} value={"Month"} />
      <input type="checkbox" checked={setting[5]} value={"Week"} />
      <input type="checkbox" checked={setting[4]} value={"Day"} />
      <input type="checkbox" checked={setting[3]} value={"Hour"} />
      <input type="checkbox" checked={setting[2]} value={"Minute"} />
      <input type="checkbox" checked={setting[1]} value={"Second"} />
      <input type="checkbox" checked={setting[0]} value={"Millisecond"} />
    </div>
  );
}

export default DisplaySetting;
