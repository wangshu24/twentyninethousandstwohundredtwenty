import { DisplayConfig } from "./displayFormat";

function DisplaySetting(props: {
  setting: DisplayConfig;
  setSetting: (s: DisplayConfig) => void;
}) {
  const { setting, setSetting } = props;
  const contextualSetSetting = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const newSetting = [...setting];
    newSetting[index] = e.target.checked;
    setSetting(newSetting as DisplayConfig);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2>DisplaySetting:</h2>
      <label>Year</label>
      <input
        type="checkbox"
        checked={setting[7]}
        value={"Year"}
        onChange={(e) => contextualSetSetting(e, 7)}
      />
      <label>Month</label>
      <input
        type="checkbox"
        checked={setting[6]}
        value={"Month"}
        onChange={(e) => contextualSetSetting(e, 6)}
      />
      <label>Week</label>
      <input
        type="checkbox"
        checked={setting[5]}
        value={"Week"}
        onChange={(e) => contextualSetSetting(e, 5)}
      />
      <label>Day</label>
      <input
        type="checkbox"
        checked={setting[4]}
        value={"Day"}
        onChange={(e) => contextualSetSetting(e, 4)}
      />
      <label>Hour</label>
      <input
        type="checkbox"
        checked={setting[3]}
        value={"Hour"}
        onChange={(e) => contextualSetSetting(e, 3)}
      />
      <label>Minute</label>
      <input
        type="checkbox"
        checked={setting[2]}
        value={"Minute"}
        onChange={(e) => contextualSetSetting(e, 2)}
      />
      <label>Second</label>
      <input
        type="checkbox"
        checked={setting[1]}
        value={"Second"}
        onChange={(e) => contextualSetSetting(e, 1)}
      />
      <label>Millisecond</label>
      <input
        type="checkbox"
        checked={setting[0]}
        value={"Millisecond"}
        onChange={(e) => contextualSetSetting(e, 0)}
      />
    </div>
  );
}

export default DisplaySetting;
