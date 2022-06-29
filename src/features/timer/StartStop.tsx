import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { flipCounting } from "./timerSlice";

type StartStopProps = ReturnType<typeof mapState> & typeof mapDispatch;

const StartStop = (props: StartStopProps) => {
  return (
    <button onClick={props.flipCounting}>
      {`${props.isCounting ? "Stop" : "Start"}`} Timer
    </button>
  );
};

const mapState = (state: RootState) => {
  return { isCounting: state.timerSlice.isCounting };
};

const mapDispatch = { flipCounting };

export default connect(mapState, mapDispatch)(StartStop);
