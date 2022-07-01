import { Button } from "@mui/material";
import { FC, useState } from "react";
import Timer from "./Timer";

type DrStrangeModeTimerProps = { dateCode: string; durationCode: string };

const DrStrangeModeTimer: FC<DrStrangeModeTimerProps> = (props) => {
  const [drStrangeMode, setDrStrangeMode] = useState(true);
  return (
    <div>
      <Timer {...props} drStrangeMode={drStrangeMode} />
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

export default DrStrangeModeTimer;
