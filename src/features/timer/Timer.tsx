import { Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { advanceTimeBy, DayDelta } from "./timerSlice";

type TimerProps = {
  durationCode: string;
  dateCode: string;
  drStrangeMode?: boolean;
};

const Timer: FC<ConnectedProps<typeof connector>> = (props) => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  const tickBy = (delta: DayDelta) => {
    if (props.drStrangeMode) {
      clearTimeout(timerId);
      return;
    }
    props.advanceTimeBy(delta);
    const delay = dayjs.duration(delta.value, delta.unit).asMilliseconds();
    setTimerId(setTimeout(() => tickBy(delta), delay));
  };

  useEffect(() => tickBy({ value: 1, unit: "second" }), [props.drStrangeMode]);

  return (
    <Grid container={true} justifyContent="center" margin={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h1">
            {props.tMinus.format(props.durationCode)}
          </Typography>
          <Grid container={true} justifyContent="flex" margin={2}>
            <Typography variant="body1">
              Counting to {props.targetTime.format(props.dateCode)}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const connector = connect(
  (state: RootState, ownProps: TimerProps) => {
    const { tMinus, targetTime } = state.timerSlice;
    const drStrangeMode =
      typeof ownProps.drStrangeMode !== undefined
        ? ownProps.drStrangeMode
        : false;
    const { dateCode, durationCode } = ownProps;

    return {
      tMinus,
      targetTime,
      durationCode,
      dateCode,
      drStrangeMode,
    };
  },
  { advanceTimeBy }
);

export default connector(Timer);
