import { Button } from "@mui/material";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { adjustTarget, DayDelta } from "./timerSlice";

export type AdjustTargetBaseProps = { delta: DayDelta; text: string };
type AdjustTargetProps = ConnectedProps<typeof connectUp>;

const AdjustTarget = (props: AdjustTargetProps) => {
  const adjTarget = (delta: DayDelta) => () => {
    props.adjustTarget(delta);
  };

  return (
    <Button onClick={adjTarget(props.delta)} variant="outlined">
      {props.text}
    </Button>
  );
};

const connectUp = connect(
  (_state: RootState, ownProps: AdjustTargetBaseProps) => ownProps,
  { adjustTarget }
);

export default connectUp(AdjustTarget);
