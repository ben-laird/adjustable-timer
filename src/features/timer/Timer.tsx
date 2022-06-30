import { Button, Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { advanceTimeBy, DayDelta } from "./timerSlice";

type TimerBaseProps = { durationCode: string; dateCode: string };
type TimerProps = ReturnType<typeof mapState> & typeof mapDispatch;

const Timer = (props: TimerProps) => {
  const [drStrangeMode, setDrStrangeMode] = useState(true);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  const timeStone = (delta: DayDelta) => {
    if (drStrangeMode) {
      clearTimeout(timerId);
      return;
    }
    props.advanceTimeBy(delta);
    const delay = dayjs.duration(delta.value, delta.unit).asMilliseconds();
    setTimerId(setTimeout(() => timeStone(delta), delay));
  };

  useEffect(() => timeStone({ value: 1, unit: "second" }), [drStrangeMode]);

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h1">
            {props.tMinus.format(props.durationCode)}
          </Typography>
          <Typography variant="body1">
            Counting to {props.targetTime.format(props.dateCode)}
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="text"
        size="small"
        onClick={() => setDrStrangeMode(!drStrangeMode)}
      >
        Turn {`${drStrangeMode ? "off" : "on"}`} Dr. Strange Mode
      </Button>
    </div>
  );
};

const mapState = (
  state: RootState,
  { durationCode, dateCode }: TimerBaseProps
) => {
  const { tMinus, targetTime } = state.timerSlice;
  return { tMinus, targetTime, durationCode, dateCode };
};

const mapDispatch = { advanceTimeBy };

export default connect(mapState, mapDispatch)(Timer);
