import { CustomDuration } from "./clock";

function Countdown(props: { timeleft: CustomDuration }) {
  const { timeleft } = props;
  return <div>Counting down: {timeleft.milliseconds} </div>;
}

export default Countdown;
