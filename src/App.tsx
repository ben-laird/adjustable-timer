import { Typography } from "@mui/material";
import { AdjustTargetBaseProps } from "./features/timer/AdjustTarget";
import StartStop from "./features/timer/StartStop";
import TargetAdjusters from "./features/timer/TargetAdjusters";
import Timer from "./features/timer/Timer";

const adjusters: Array<AdjustTargetBaseProps> = [
  { delta: { value: 1, unit: "minute" }, text: "Add one minute" },
  { delta: { value: 5, unit: "minutes" }, text: "Add five minutes" },
  { delta: { value: 10, unit: "minutes" }, text: "Add ten minutes" },
  { delta: { value: 30, unit: "minutes" }, text: "Add half an hour" },
  { delta: { value: 1, unit: "hour" }, text: "Add an hour" },
];

const App = () => {
  return (
    <div>
      <Typography variant="h2">Time Stream</Typography>
      <Typography variant="h3">Timer for streamers</Typography>
      <Timer dateCode="DD MMM, YYYY - h:mm:ss" durationCode = "HH:mm:ss" />
      <StartStop />
      <TargetAdjusters adjusters={adjusters} />
    </div>
  );
};

export default App;
