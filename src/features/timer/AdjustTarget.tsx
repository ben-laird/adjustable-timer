import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { adjustTarget, DayDelta } from "./timerSlice";

export type AdjustTargetBaseProps = { delta: DayDelta; text: string };
type AdjustTargetProps = ConnectedProps<typeof connectUp>;

const AdjustTarget = (props: AdjustTargetProps) => {
  const adjTarget = (delta: DayDelta) => () => {
    props.adjustTarget(delta);
  };

  return <button onClick={adjTarget(props.delta)}>{props.text}</button>;
};

const connectUp = connect(
  (_state: RootState, ownProps: AdjustTargetBaseProps) => ownProps,
  { adjustTarget }
);

export default connectUp(AdjustTarget);
