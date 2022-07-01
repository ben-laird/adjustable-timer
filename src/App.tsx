import { Grid, Typography } from "@mui/material";
import { AdjustTargetProps } from "./features/timer/AdjustTarget";
import DrStrangeModeTimer from "./features/timer/DrStrangeModeTimer";
import StartStop from "./features/timer/StartStop";
import TargetAdjusters from "./features/timer/TargetAdjusters";
import Timer from "./features/timer/Timer";

const adjusters: Array<AdjustTargetProps> = [
  { delta: { value: 1, unit: "minute" }, text: "Add one minute" },
  { delta: { value: 5, unit: "minutes" }, text: "Add five minutes" },
  { delta: { value: 10, unit: "minutes" }, text: "Add ten minutes" },
  { delta: { value: 30, unit: "minutes" }, text: "Add half an hour" },
  { delta: { value: 1, unit: "hour" }, text: "Add an hour" },
];

const App = () => {
  return (
    <div>
      <Grid container={true} justifyContent="center" margin={2}>
        <Typography variant="h2">Time Stream</Typography>
      </Grid>
      <Grid container={true} justifyContent="center" margin={2}>
        <Typography variant="h3">Timer for Streamers</Typography>
      </Grid>
      <DrStrangeModeTimer
        dateCode="h:mm:ss a on MMMM DD, YYYY"
        durationCode="HH:mm:ss"
      />
      <StartStop />
      <TargetAdjusters adjusters={adjusters} />
    </div>
  );
};

export default App;
