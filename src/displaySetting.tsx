import { DisplayConfig } from "./displayFormat";

function DisplaySetting(props: {
  setting: DisplayConfig;
  setSetting: (s: DisplayConfig) => void;
}) {
  const { setting, setSetting } = props;

  return (
    <div>
      <h2>DisplaySetting:</h2>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </div>
  );
}

export default DisplaySetting;
