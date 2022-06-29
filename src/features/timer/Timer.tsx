import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { advanceTimeBy, DayDelta } from "./timerSlice";

type TimerProps = ReturnType<typeof mapState> & typeof mapDispatch;

const Timer = (props: TimerProps) => {
  const dateCode = "DD MMM, YYYY - h:mm:ss";
  const duraCode = "HH:mm:ss";

  const [drStrangeMode, setDrStrangeMode] = useState(true);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  const timeStone = (delta: DayDelta) => {
    if (drStrangeMode) {
      clearTimeout(timerId);
      return;
    }
    props.advanceTimeBy(delta);

    const { value, unit } = delta;
    const deltaMilis = dayjs.duration(value, unit).asMilliseconds();

    setTimerId(
      setTimeout(() => {
        timeStone(delta);
      }, deltaMilis)
    );
  };

  useEffect(() => timeStone({ value: 1, unit: "second" }), [drStrangeMode]);

  return (
    <div>
      <h3>{props.tMinus.format(duraCode)}</h3>
      <p>Counting to {props.targetTime.format(dateCode)}</p>
      <button onClick={() => setDrStrangeMode(!drStrangeMode)}>
        Turn {`${drStrangeMode ? "off" : "on"}`} Dr. Strange Mode
      </button>
    </div>
  );
};

const mapState = (state: RootState) => {
  const { tMinus, targetTime } = state.timerSlice;
  return { tMinus, targetTime };
};

const mapDispatch = { advanceTimeBy };

export default connect(mapState, mapDispatch)(Timer);
