import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { advanceTimeBy, DayDelta } from "./timerSlice";

type TimerBaseProps = {
  durationCode: string;
  dateCode: string;
  drStrangeMode?: boolean;
};
type TimerProps = ReturnType<typeof mapState> & typeof mapDispatch;

const Timer = (props: TimerProps) => {
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

const mapState = (
  state: RootState,
  { durationCode, dateCode, drStrangeMode }: TimerBaseProps
) => {
  const { tMinus, targetTime } = state.timerSlice;
  drStrangeMode = typeof drStrangeMode !== undefined ? drStrangeMode : false;

  return { tMinus, targetTime, durationCode, dateCode, drStrangeMode };
};

const mapDispatch = { advanceTimeBy };

export default connect(mapState, mapDispatch)(Timer);
