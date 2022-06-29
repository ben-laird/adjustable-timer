import { connect, ConnectedProps } from "react-redux";
import { adjustTarget, DayDelta } from "./timerSlice";

type AdjustTargetProps = ConnectedProps<typeof connectUp>

const AdjustTarget = (props: AdjustTargetProps) => {
  const adjTarget = (delta: DayDelta) => () => {props.adjustTarget(delta)};

  return (
    <button onClick={adjTarget({value: 1, unit: "minute"})}>Add one minute</button>
  );
};

const connectUp = connect(null, { adjustTarget });

export default connectUp(AdjustTarget);
