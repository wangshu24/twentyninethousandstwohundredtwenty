import { useState } from "react";
import { isValid } from "date-fns";

type DateInputProps = {
  Date: string;
  Month: string;
  Year: string;
};

function validateDate(date: Date): boolean {
  return !isNaN(date.getTime());
}

function DateInput(props: { setDob: (dob: Date) => void }) {
  const [textInput, setTextInput] = useState<DateInputProps>({
    Date: "",
    Month: "",
    Year: "",
  } as DateInputProps);
  const { setDob } = props;
  const [alert, setAlert] = useState(false);

  return (
    <div>
      <label>Date</label>
      <input
        type="text"
        value={textInput.Date}
        onChange={(e) => {
          if (e.target.value.length > 2) {
            setAlert(true);
          } else {
            setAlert(false);
          }
          setTextInput({ ...textInput, Date: e.target.value });
        }}
      />
      <label>Month</label>
      <input
        type="text"
        value={textInput.Month}
        onChange={(e) => {
          if (e.target.value.length > 2) {
            setAlert(true);
          } else {
            setAlert(false);
          }
          setTextInput({ ...textInput, Month: e.target.value });
        }}
      />
      <label>Year</label>
      <input
        type="text"
        value={textInput.Year}
        onChange={(e) => {
          if (e.target.value.length > 4) {
            setAlert(true);
          } else {
            setAlert(false);
          }
          setTextInput({ ...textInput, Year: e.target.value });
        }}
      />
      <input type="text" onChange={(e) => setDob(new Date(e.target.value))} />
    </div>
  );
}

export default DateInput;
