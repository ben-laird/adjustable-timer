import AdjustTarget from "./features/timer/AdjustTarget";
import StartStop from "./features/timer/StartStop";
import Timer from "./features/timer/Timer";

const App = () => {
  return (
    <div>
      <h1>Time Stream</h1>
      <h2>Timer for streamers</h2>
      <Timer />
      <StartStop />
      <AdjustTarget
        delta={{ value: 1, unit: "minute" }}
        text="Add one minute"
      />
    </div>
  );
};

export default App;
