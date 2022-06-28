import { Dayjs } from "dayjs";
import { Duration } from "dayjs/plugin/duration";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { advanceTimeBy } from "./timerSlice";

type TimerProps = ReturnType<typeof mapState> & typeof mapDispatch;

const Timer = (props: TimerProps) => {
  const dateCode = "DD MMM, YYYY - h:mm:ss";
  const duraCode = "HH:mm:ss";

  const { tMinus, targetTime } = props;

  const advanceTime = () => props.advanceTimeBy({ value: 1, unit: "second" });
  const shapeT = (timeOrDur: Dayjs | Duration, formatter: string) =>
    timeOrDur.format(formatter);

  return (
    <div>
      <h3>{shapeT(tMinus, duraCode)}</h3>
      <p>Counting to {targetTime.format(dateCode)}</p>
      <button onClick={advanceTime}>Advance time</button>
    </div>
  );
};

const mapState = (state: RootState) => {
  const { tMinus, targetTime } = state.timerSlice;
  return { tMinus, targetTime };
};

const mapDispatch = { advanceTimeBy };

export default connect(mapState, mapDispatch)(Timer);
