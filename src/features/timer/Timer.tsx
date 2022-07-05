import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { FC, ReactNode, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { advanceTimeBy, DayDelta } from "./timerSlice";

type TimerProps = {
  durationCode: string;
  dateCode: string;
  freeze?: boolean;
  children?: ReactNode;
};

const Timer: FC<ConnectedProps<typeof connector>> = (props) => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  const tickBy = (delta: DayDelta) => {
    if (props.freeze) {
      clearTimeout(timerId);
      return;
    }
    props.advanceTimeBy(delta);
    const delay = dayjs.duration(delta.value, delta.unit).asMilliseconds();
    setTimerId(setTimeout(() => tickBy(delta), delay));
  };

  useEffect(() => tickBy({ value: 1, unit: "second" }), [props.freeze]);

  return (
    <Grid container={true} justifyContent="center" margin={2}>
      <Card variant="elevation" elevation={4} sx={{paddingLeft: 8, paddingRight: 8}}>
        <CardContent>
          <Typography variant="h1" sx={{ textAlign: "center" }}>
            {props.tMinus.format(props.durationCode)}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Counting to {props.targetTime.format(props.dateCode)}
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            {props.children}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

const connector = connect(
  (state: RootState, ownProps: TimerProps) => {
    const { tMinus, targetTime } = state.timerSlice;
    const freeze =
      typeof ownProps.freeze !== "undefined"
        ? ownProps.freeze
        : false;
    const { dateCode, durationCode, children } = ownProps;

    return {
      tMinus,
      targetTime,
      durationCode,
      dateCode,
      freeze,
      children,
    };
  },
  { advanceTimeBy }
);

export default connector(Timer);
