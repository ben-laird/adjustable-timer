import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { flipCounting } from "./timerSlice";

type StartStopProps = ReturnType<typeof mapState> & typeof mapDispatch;

const StartStop = () => {
  const memes = () => console.log("memes");
  return <button onClick={memes}>Start/Stop Timer</button>;
};

const mapState = (state: RootState) => {};

const mapDispatch = { flipCounting };

export default StartStop;
