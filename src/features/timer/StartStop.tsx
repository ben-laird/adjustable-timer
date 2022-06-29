import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { flipCounting } from "./timerSlice";

type StartStopProps = ReturnType<typeof mapState> & typeof mapDispatch;

const StartStop = (props: StartStopProps) => {
  return <button onClick={props.flipCounting}>Start/Stop Timer</button>;
};

const mapState = (state: RootState) => {};

const mapDispatch = { flipCounting };

export default StartStop;
