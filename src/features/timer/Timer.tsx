import { Dayjs } from "dayjs";
import { Duration } from "dayjs/plugin/duration";
import { Component, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { advanceTimeBy } from "./timerSlice";

type TimerProps = ReturnType<typeof mapState> & typeof mapDispatch;

class Timer extends Component<TimerProps> {
  dateCode = "DD MMM, YYYY - h:mm:ss";
  duraCode = "HH:mm:ss";

  drStrangeMode = true;

  advanceTime = () => this.props.advanceTimeBy({ value: 1, unit: "second" });
  shapeT = (timeOrDur: Dayjs | Duration, formatter: string) =>
    timeOrDur.format(formatter);

  timeStoneClock = (clockInterval: number) => {
    setTimeout(() => {
      this.advanceTime();
      if (!this.drStrangeMode) this.timeStoneClock(clockInterval);
    }, clockInterval);
  };

  render = () => (
    <div>
      <h3>{this.shapeT(this.props.tMinus, this.duraCode)}</h3>
      <p>Counting to {this.shapeT(this.props.targetTime, this.dateCode)}</p>
      <button onClick={this.advanceTime}>Advance time</button>
      <button onClick={() => console.log("memes")}>
        Turn {`${this.drStrangeMode ? "off" : "on"}`} Dr. Strange Mode
      </button>
    </div>
  );
}

const mapState = (state: RootState) => {
  const { tMinus, targetTime } = state.timerSlice;
  return { tMinus, targetTime };
};

const mapDispatch = { advanceTimeBy };

export default connect(mapState, mapDispatch)(Timer);
