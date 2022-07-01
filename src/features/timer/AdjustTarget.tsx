import { Button } from "@mui/material";
import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { adjustTarget, DayDelta } from "./timerSlice";

export type AdjustTargetProps = { delta: DayDelta; text: string };

const AdjustTarget: FC<ConnectedProps<typeof connector>> = (props) => {
  const adjTarget = (delta: DayDelta) => () => {
    props.adjustTarget(delta);
  };

  return (
    <Button onClick={adjTarget(props.delta)} variant="outlined">
      {props.text}
    </Button>
  );
};

const connector = connect(
  (_state: RootState, ownProps: AdjustTargetProps) => ownProps,
  { adjustTarget }
);

export default connector(AdjustTarget);
