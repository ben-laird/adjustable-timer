import { AdjustTargetBaseProps } from "./features/timer/AdjustTarget";
import AdjustTime from "./features/timer/AdjustTime";
import StartStop from "./features/timer/StartStop";
import TargetAdjusters from "./features/timer/TargetAdjusters";
import Timer from "./features/timer/Timer";

const adjusters: Array<AdjustTargetBaseProps> = [
  {delta: {value: 1, unit: "minute"}, text: "Add one minute"},
  {delta: {value: 5, unit: "minutes"}, text: "Add five minutes"},
  {delta: {value: 10, unit: "minutes"}, text: "Add ten minutes"},
  {delta: {value: 30, unit: "minutes"}, text: "Add half an hour"},
  {delta: {value: 1, unit: "hour"}, text: "Add an hour"}
]

const App = () => {
  return (
    <div>
      <h1>Time Stream</h1>
      <h2>Timer for streamers</h2>
      <Timer />
      <StartStop />
      <TargetAdjusters adjusters={adjusters} />
      <AdjustTime />
    </div>
  );
};

export default App;
