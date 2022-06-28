import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { advanceTimeBy, flipCounting } from "./timerSlice";

type TimerProps = ReturnType<typeof mapState> & typeof mapDispatch;

const Timer = (props: TimerProps) => {
  const advanceUp = () => props.advanceTimeBy({ value: 1, unit: "second" });

  const dateString = "DD MMM, YYYY - h:mm:ss";

  return (
    <div>
      <h3>{props.tMinus.format("HH:mm:ss")}</h3>
      <p>
        Counting from {props.currentTime.format(dateString)} to{" "}
        {props.targetTime.format(dateString)}
      </p>
      <button onClick={advanceUp}>Advance time</button>
      <button onClick={() => props.flipCounting()}>Start/stop counting</button>
    </div>
  );
};

const mapState = (state: RootState) => {
  const { tMinus, targetTime, currentTime } = state.timerSlice;
  return { tMinus, targetTime, currentTime };
};

const mapDispatch = { advanceTimeBy, flipCounting };

export default connect(mapState, mapDispatch)(Timer);
