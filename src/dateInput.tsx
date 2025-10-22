import { useState } from "react";
import { isValid, setDate } from "date-fns";

type DateInputProps = {
  Date: string;
  Month: string;
  Year: string;
};

function toggleAlert(alertFunc: (bool: boolean) => void) {
  alertFunc(true);
  setTimeout(() => {
    alertFunc(false);
  }, 3000);
}

function DateInput(props: { setDob: (dob: Date) => void }) {
  const [textInput, setTextInput] = useState<DateInputProps>({
    Date: "",
    Month: "",
    Year: "",
  } as DateInputProps);
  const { setDob } = props;
  const [alert, setAlert] = useState(false);

  const validateDate = (dateInput: DateInputProps): void => {
    const date = new Date(
      parseInt(dateInput.Year),
      parseInt(dateInput.Month),
      parseInt(dateInput.Date)
    );
    if (!isValid(date)) {
      toggleAlert(setAlert);
    } else {
      setDob(date);
    }
  };

  return (
    <div>
      {alert && <p>Invalid Date</p>}
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
      <input type="submit" onChange={() => validateDate(textInput)} />
    </div>
  );
}

export default DateInput;
